import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import UserStudioDetail from "../screens/StudioDetail/UserStudioDetail";
import ClassEdit from "../screens/ClassEdit/ClassEdit";
import ClassCreate from "../screens/ClassCreate/ClassCreate";
import StudioCreateEdit from "../screens/StudioCreateEdit/StudioCreateEdit";
import { deleteFitClass, postFitClass, putFitClass } from "../services/classes";
import { getUserStudio, postStudio, putStudio } from "../services/studios";

function MyStudioContainer(props) {
  const [userStudio, setUserStudio] = useState(null);
  const [fitClasses, setFitClasses] = useState([]);
  const history = useHistory();

  const { setStudios } = props;

  useEffect(() => {
    const fetchMyStudio = async () => {
      const studioData = await getUserStudio();
      setUserStudio(studioData);
      setFitClasses(studioData.fit_classes);
    };
    fetchMyStudio();
  });

  // function to create studio
  const handleCreateStudio = async (formData) => {
    const studioItem = await postStudio(formData);
    setStudios((prevState) => [...prevState, studioItem]);
    // push to user's studio detail page???
    history.push("/my-studio");
  };

  //function to update studio
  const handleUpdateStudio = async (id, formData) => {
    const studioItem = await putStudio(id, formData);
    setStudios((prevState) =>
      prevState.map((studio) => {
        return studio.id === Number(id) ? studioItem : studio;
      })
    );
  };

  //function to create fitclass function
  const handleCreateFitClass = async (formData) => {
    const classItem = await postFitClass(formData);
    setFitClasses((prevState) => [...prevState, classItem]);
    // push back to user's studio detail page???
    history.push("/");
  };

  // update fitclass
  const handleUpdateFitClass = async (id, formData) => {
    const classItem = await putFitClass(id, formData);
    setFitClasses((prevState) =>
      prevState.map((fitClass) => {
        return fitClass.id === Number(id) ? classItem : fitClass;
      })
    );
  };

  // delete fitclass
  const handleDeleteFitClass = async (id) => {
    await deleteFitClass(id);
    setFitClasses((prevState) =>
      prevState.filter((fitClass) => fitClass.id !== id)
    );
  };

  return (
    <div>
      <h2>MyStudioContainer</h2>
      <Switch>
        <Route path="/updateclass/:id">
          <ClassEdit
            handleUpdateFitClass={handleUpdateFitClass}
            handleDeleteFitClass={handleDeleteFitClass}
          />
        </Route>
        <Route path="/create-update-studio">
          <StudioCreateEdit handleCreateStudio={handleCreateStudio} />
        </Route>
        <Route path="/createclass">
          <ClassCreate handleCreateFitClass={handleCreateFitClass} />
        </Route>
        <Route path="/my-studio">
          <UserStudioDetail userStudio={userStudio} />
        </Route>
      </Switch>
    </div>
  );
}

export default MyStudioContainer;

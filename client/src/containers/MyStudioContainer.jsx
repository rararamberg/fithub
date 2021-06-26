import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { deleteFitClass, postFitClass, putFitClass } from "../services/classes";
import { getUserStudio, postStudio, putStudio } from "../services/studios";
import UserStudioDetail from "../screens/StudioDetail/UserStudioDetail";
import ClassEdit from "../screens/ClassEdit/ClassEdit";
import ClassCreate from "../screens/ClassCreate/ClassCreate";
import UserStudioCreate from "../screens/StudioCreateEdit/UserStudioCreate";
import UserStudioEdit from "../screens/StudioCreateEdit/UserStudioEdit";

function MyStudioContainer(props) {
  const [userStudio, setUserStudio] = useState(null);
  const history = useHistory();

  const { setStudios } = props;

  useEffect(() => {
    const fetchMyStudio = async () => {
      const studioData = await getUserStudio();
      setUserStudio(studioData);
    };
    fetchMyStudio();
  }, []);

  // function to create studio
  const handleCreateStudio = async (formData) => {
    const studioItem = await postStudio(formData);
    setUserStudio(studioItem);
    setStudios((prevState) => [...prevState, studioItem]);
    // push to user's studio detail page???
    history.push("/my-studio");
  };

  //function to update studio
  const handleUpdateStudio = async (id, formData) => {
    const studioItem = await putStudio(id, formData);
    setUserStudio(studioItem);
    setStudios((prevState) =>
      prevState.map((studio) => {
        return studio.id === Number(id) ? studioItem : studio;
      })
    );
    history.push("/my-studio");
  };

  //function to create fitclass function
  const handleCreateFitClass = async (formData) => {
    const classItem = await postFitClass(formData);
    setUserStudio((prevState) => ({
      ...prevState,
      fit_classes: [...prevState.fit_classes, classItem],
    }));
    // push back to user's studio detail page???
    history.push("/my-studio");
  };

  // update fitclass
  const handleUpdateFitClass = async (id, formData) => {
    const classItem = await putFitClass(id, formData);
    setUserStudio((prevState) => ({
      ...prevState,
      fit_classes: prevState.fit_classes.map((fitClass) => {
        return fitClass.id === Number(id) ? classItem : fitClass;
      }),
    }));
  };

  // delete fitclass
  const handleDeleteFitClass = async (id) => {
    await deleteFitClass(id);
    setUserStudio((prevState) => ({
      ...prevState,
      fit_classes: prevState.fit_classes.filter(
        (fitClass) => fitClass.id !== id
      ),
    }));
  };

  return (
    <div>
      <h2>MyStudioContainer</h2>
      <Switch>
        <Route path="/my-studio/updateclass/:id">
          <ClassEdit
            handleUpdateFitClass={handleUpdateFitClass}
            handleDeleteFitClass={handleDeleteFitClass}
          />
        </Route>
        <Route path="/my-studio/updatestudio/:id">
          <UserStudioEdit handleUpdateStudio={handleUpdateStudio} />
        </Route>
        <Route path="/my-studio/create-update-studio">
          <UserStudioCreate handleCreateStudio={handleCreateStudio} />
        </Route>
        <Route path="/my-studio/createclass">
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

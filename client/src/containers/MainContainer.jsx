import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ClassCreate from "../screens/ClassCreate/ClassCreate";
import ClassEdit from "../screens/ClassEdit/ClassEdit";
import StudioCreateEdit from "../screens/StudioCreateEdit/StudioCreateEdit";
import StudioDetail from "../screens/StudioDetail/StudioDetail";
import Studios from "../screens/Studios/Studios";
// import UserStudioDetail from "../screens/UserStudioDetail";
import { deleteFitClass, postFitClass, putFitClass } from "../services/classes";
import { getAllStudios, postStudio, putStudio } from "../services/studios";

function MainContainer(props) {
  const [studios, setStudios] = useState([]);
  // empty array or null for fitclass
  const [fitClasses, setFitClasses] = useState([]);
  // const [studio, setStudio] = useState(null);
  const history = useHistory();

  const { currentUser } = props;

  // useEffect function to get all studios
  useEffect(() => {
    const fetchStudios = async () => {
      const studioList = await getAllStudios();
      console.log(studioList);
      setStudios(studioList);
    };
    fetchStudios();
  }, []);

  // function to create studio
  const handleCreateStudio = async (formData) => {
    const studioItem = await postStudio(formData);
    setStudios((prevState) => [...prevState, studioItem]);
    // push to user's studio detail page???
    history.push("/my-studio");
  };

  //function to update studio
  // const handleUpdateStudio = async (id, formData) => {
  //   const studioItem = await putStudio(id, formData);
  //   setStudios((prevState) =>
  //     prevState.map((studio) => {
  //       return studio.id === Number(id) ? studioItem : studio;
  //     })
  //   );
  // };

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
  // do I  need to
  const handleDeleteFitClass = async (id) => {
    await deleteFitClass(id);
    setFitClasses((prevState) =>
      prevState.filter((fitClass) => fitClass.id !== id)
    );
  };

  return (
    <div>
      <h2>This is main container</h2>
      <Switch>
        <Route path="/studios/:id">
          <StudioDetail currentUser={currentUser} />
        </Route>
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
        <Route path="/studios">
          <Studios studios={studios} />
        </Route>
        <Route path="/my-studio">
          <StudioDetail currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

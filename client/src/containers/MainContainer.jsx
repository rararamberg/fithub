import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ClassCreate from "../screens/ClassCreate/ClassCreate";
import ClassEdit from "../screens/ClassEdit/ClassEdit";
import StudioCreateEdit from "../screens/StudioCreateEdit/StudioCreateEdit";
import StudioDetail from "../screens/StudioDetail/StudioDetail";
import Studios from "../screens/Studios/Studios";
import UserStudioDetail from "../screens/UserStudioDetail";
import { postFitClass } from "../services/classes";
import { getAllStudios } from "../services/studios";

function MainContainer(props) {
  const [studios, setStudios] = useState([]);
  // empty array or null for fitclass
  const [fitClass, setFitClass] = useState(null);
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

  //function to create fitclass function
  const handleCreateFitClass = async (formData) => {
    const classItem = await postFitClass(formData);
    setFitClass((prevState) => [...prevState, classItem]);
    // push back to studios detail???
    history.push("/");
  };
  return (
    <div>
      <h2>This is main container</h2>
      {/* <UserStudioDetail /> */}
      {/* route to studios screen */}
      <Switch>
        <Route path="/studios/:id">
          <StudioDetail currentUser={currentUser} />
        </Route>
        <Route path="/updateclass/:id">
          <ClassEdit />
        </Route>
        {/* <Route path="/users/studios">
          <UserStudioDetail />
        </Route> */}
        <Route path="/create-update-studio">
          <StudioCreateEdit />
        </Route>
        <Route path="/createclass">
          <ClassCreate handleCreateFitClass={handleCreateFitClass} />
        </Route>
        <Route path="/studios">
          <Studios studios={studios} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

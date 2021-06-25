import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ClassCreate from "../screens/ClassCreate/ClassCreate";
import StudioCreateEdit from "../screens/StudioCreateEdit/StudioCreateEdit";
import StudioDetail from "../screens/StudioDetail/StudioDetail";
import Studios from "../screens/Studios/Studios";
import UserStudioDetail from "../screens/UserStudioDetail";
import { getAllStudios } from "../services/studios";

function MainContainer(props) {
  const [studios, setStudios] = useState([]);
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

  return (
    <div>
      <h2>This is main container</h2>
      {/* <UserStudioDetail /> */}
      {/* route to studios screen */}
      <Switch>
        <Route path="/studios/:id">
          <StudioDetail currentUser={currentUser} />
        </Route>
        {/* <Route path="/users/studios">
          <UserStudioDetail />
        </Route> */}
        <Route path="/create-update-studio">
          <StudioCreateEdit />
        </Route>
        <Route path="/createclass">
          <ClassCreate />
        </Route>
        <Route path="/studios">
          <Studios studios={studios} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

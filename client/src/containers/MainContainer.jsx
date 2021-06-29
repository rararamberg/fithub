import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import StudioDetail from "../screens/StudioDetail/StudioDetail";
import Studios from "../screens/Studios/Studios";
import { getAllStudios } from "../services/studios";
import MyStudioContainer from "./MyStudioContainer";

function MainContainer(props) {
  const [studios, setStudios] = useState([]);
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
      <Switch>
        <Route path="/studios/:id">
          <StudioDetail />
        </Route>
        <Route path="/studios">
          <Studios studios={studios} />
        </Route>
        <Route path="/my-studio">
          <MyStudioContainer
            setStudios={setStudios}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

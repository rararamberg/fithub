import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Studios from "../screens/Studios/Studios";
import { getAllStudios } from "../services/studios";

function MainContainer() {
  const [studios, setStudios] = useState([]);

  // useEffect function to get all studios
  useEffect(() => {
    const fetchStudios = async () => {
      const studioList = await getAllStudios();
      // console.log(studioList);
      setStudios(studioList);
      console.log(studios);
    };
    fetchStudios();
  }, []);

  return (
    <div>
      <h2>This is main container</h2>
      {/* route to studios screen */}
      <Switch>
        <Route path="/studios">
          <Studios />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

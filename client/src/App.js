import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Login from "./screens/Login/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

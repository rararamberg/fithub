import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/signin">
            <h3>This is login</h3>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

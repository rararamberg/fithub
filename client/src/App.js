import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Login from "./screens/Login/Login";
import { useState } from "react";
import { loginUser } from "./services/auth";

function App() {
  // objects of data start as null
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

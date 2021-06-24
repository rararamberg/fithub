import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./screens/Login/Login";
import { useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import Register from "./screens/Register/Register";
import MainContainer from "./containers/MainContainer";

function App() {
  // objects of data start as null
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route>
            <MainContainer path="/" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

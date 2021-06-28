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
import Landing from "./screens/Landing/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // objects of data start as null
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  // may need eyes on this..
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      // use history here?
      if (!userData) {
        history.push("/");
      } else if (!userData.has_studio) {
        history.push("/my-studio/create-studio")
      }
      else {
        history.push("/my-studio");
      }
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    if (!userData.has_studio) {
      history.push("/my-studio/create-studio")
    } else {
      history.push("/my-studio");
    }
  };
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/my-studio/create-studio");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

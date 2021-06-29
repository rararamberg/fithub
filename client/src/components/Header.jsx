import { Link } from "react-router-dom";
import "./Header.css";
import Button from "react-bootstrap/Button";

function Header(props) {
  const { currentUser, handleLogout } = props;

  const navAccess = () => {
    if (!currentUser) {
      return (
        <>
          <Link to="/studios">Studios</Link>
          <Link to="/signin">
            <Button variant="outline-primary" id="sign-in">
              Sign In
            </Button>
          </Link>
        </>
      );
    } else if (currentUser.has_studio) {
      return (
        <>
          <Link to="/my-studio">
            <p>Hello, {currentUser.first_name}</p>
          </Link>
          <Button variant="outline-danger" onClick={handleLogout}>
            Sign Out
          </Button>
        </>
      );
    } else {
      return (
        <>
          <p>Hello, {currentUser.first_name}</p>
          <Button variant="outline-danger" onClick={handleLogout}>
            Sign Out
          </Button>
        </>
      );
    }
  };
  return (
    <div className="header-container">
      <header className="fithub-header">
        {currentUser ? (
          <h1>
            Fit<span>Hub</span>
          </h1>
        ) : (
          <Link to="/">
            <h1>
              Fit<span>Hub</span>
            </h1>
          </Link>
        )}
        <nav>{navAccess()}</nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;

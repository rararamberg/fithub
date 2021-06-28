import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser, handleLogout } = props;

  const navAccess = () => {
    if (!currentUser) {
      return (
        <>
          <Link to="/studios">Studios</Link>
          <Link to="/signin">Sign In</Link>
        </>
      )
    } else if (currentUser.has_studio) {
      return (
        <>
          <Link to='/my-studio'>
          <p>Hello, {currentUser.first_name}</p>
          </Link>
          <button onClick={handleLogout}>Sign Out</button>
        </>
      )
    } else {
      return (
        <>
          <p>Hello, {currentUser.first_name}</p>
          <button onClick={handleLogout}>Sign Out</button>
        </>
      )
    }
  }
  return (
    <div>
      <header>
        {currentUser ? (
          <h1>FitHub</h1>
        ) : (
          <Link to="/">
            <h1>FitHub</h1>
          </Link>    
        )}
        <nav>
          {navAccess()}
        </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;

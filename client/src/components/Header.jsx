import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to="/">
          <h1>FitHub</h1>
        </Link>
        <nav>
          <Link to="/studios">Studios</Link>
          {currentUser ? (
            <>
              <p>Hello, {currentUser.first_name}</p>
              <button onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;

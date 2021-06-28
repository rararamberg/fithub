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
          {currentUser ? (
            <>
              <Link to='/my-studio'>
              <p>Hello, {currentUser.first_name}</p>
              </Link>
              <button onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
              <>
                <Link to="/studios">Studios</Link>
                <Link to="/signin">Sign In</Link>
                </>
          )}
        </nav>
      </header>
      <hr />
    </div>
  );
}

export default Header;

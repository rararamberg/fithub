import { Link } from "react-router-dom";

function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1>FitHub</h1>
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
      <hr />
    </header>
  );
}

export default Header;

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>FitHub</h1>
      <nav>
        <Link to="/studios">Studios</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
      <hr />
    </header>
  );
}

export default Header;

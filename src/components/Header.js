import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>
      <h1>Bookmark Organize</h1>
    </header>
  );
}

export default Header;

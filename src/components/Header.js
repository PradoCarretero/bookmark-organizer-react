import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>Bookmark Organize</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <p>Trabajo</p>
      </nav>
    </header>
  );
}

export default Header;

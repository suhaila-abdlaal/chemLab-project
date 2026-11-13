import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo"> ChemLab</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Experiments</li>
        <li>About</li>
      </ul>

    </nav>
  );
}

export default Navbar;
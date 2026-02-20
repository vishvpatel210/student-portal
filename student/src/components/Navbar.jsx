import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🎓 Student Portal</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

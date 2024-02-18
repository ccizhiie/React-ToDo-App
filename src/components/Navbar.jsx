import { Link } from 'react-router-dom';
import NavLink from './button/NavLink';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow py-3">
      <div className="container">
        <Link className="navbar-brand fs-4 fw-semibold " to={'/'}>
          Opon Notes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink />
        </div>
      </div>
    </nav>
  );
}

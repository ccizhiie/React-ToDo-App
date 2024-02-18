import { Link } from 'react-router-dom';

export default function NavLink() {
  return (
    <ul className="navbar-nav ms-auto align-items-center ">
      <li className="nav-item">
        <Link
          className={`nav-link ${location.pathname == '/' ? 'active' : ''}`}
          to={'/'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${
            location.pathname == '/arsip' ? 'active' : ''
          }`}
          to={'/arsip'}
        >
          Arsip
        </Link>
      </li>
      <li className="nav-item ">
        <Link to={'/addNote'} className="nav-link">
          <button className="btn btn-primary">Buat catatan</button>
        </Link>
      </li>
    </ul>
  );
}

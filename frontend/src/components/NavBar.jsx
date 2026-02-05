import { Link } from "react-router-dom";
import '../css/NavBar.css';
import logo from '../assets/HrshDev.svg';

function NavBar() {
    function resetHome() {
        // dispatch a custom event so Home can reload popular movies
        window.dispatchEvent(new Event('resetHome'));
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" onClick={resetHome} className="brand-link">
                    <img src={logo} alt="HrshDev logo" className="brand-logo" />
                    <span className="brand-title">Movie Portal</span>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link" onClick={resetHome}>Home</Link>
                <Link to="/genres" className="nav-link">Genres</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;
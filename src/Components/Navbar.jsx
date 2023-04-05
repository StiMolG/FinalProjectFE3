import { useContext } from "react";
import styles from "./Navbar.module.css";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
const Navbar = () => {

  const { changeTheme,
    state: { isDarkmode }
  } = useAppContext();
  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <NavLink to="/home" className={`navbar-brand ${styles.navbarBrand}`}>
            DH Odonto
          </NavLink>
          <NavLink className="collapse navbar-collapse justify-content-end" to="/home">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button
                  onClick={changeTheme}
                  className={`btn btn-light${styles.btnStyle
                    }`}
                >
                  ☀ 🌙{" "}
                </button>
        </div>
        {/* <div className="container">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className={`nav-item`}>
                <button
                  onClick={toggleTheme}
                  className={`btn btn-light${styles.btnStyle
                    }`}
                >
                  ☀ 🌙{" "}
                </button>
              </li>
            </ul>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;

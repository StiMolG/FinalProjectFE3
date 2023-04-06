import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
const Navbar = () => {

  const { changeTheme,
  } = useAppContext();
  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm navbar-light bg-light`}
        aria-label="Third navbar example"
      >
        <div className={`container ${styles.nav}`}>
          <div className={`${styles.imageLogo}`}>
            <NavLink to="/home" className={`navbar-brand ${styles.navbarBrand}`}>
              DH Odonto
            </NavLink>
          </div>
            <NavLink className={`collapse navbar-collapse justify-content-end ${styles.navlink}`} to="/home">Home</NavLink>
            <NavLink className={`${styles.navlink}`} to="/contact">Contáctanos</NavLink>
            <NavLink className={`${styles.navlink}`} to="/favs">Destacados</NavLink>
            <button
                    onClick={changeTheme}
                    className={`btn btn-light${styles.btnStyle} ${styles.navlink}`}
            >
                    ☀ 🌙{" "}
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import dropIcon from "../../public/drop-menu.png";
import aboutIcon from "../../public/about.svg";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles["dropdown-container"]}>
      {isOpen && (
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/"
          >
            termo
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/2"
          >
            dueto
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.links
            }
            to="/4"
          >
            quarteto
          </NavLink>
          <NavLink className={styles["links about-icon"]} to="/sobre">
            <img src={aboutIcon} />
          </NavLink>
        </nav>
      )}
      <button
        className={styles["dropdown-icon-button"]}
        onClick={toggleDropdown}
      >
        <img
          className={styles["dropdown-icon-img"]}
          src={dropIcon}
          alt="mostrar menu"
        />
      </button>
    </div>
  );
};

export default DropdownMenu;

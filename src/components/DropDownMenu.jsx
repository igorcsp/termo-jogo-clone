import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import dropIcon from "/drop-menu.png";
import aboutIcon from "/about.svg";
import statsIcon from "/stats.png";
import configIcon from "/config.png";
import styles from "./DropdownMenu.module.css";
import ReactModal from "react-modal";
import HowToPlayModal from "../modals/HowToPlayModal";
import ModalModel from "../modals/ModalModel";
import ConfigModal from "../modals/ConfigModal";
import StatsModal from "../modals/StatsModal";

ReactModal.setAppElement("#root");

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [title, setTitle] = useState("TERMO");
  const location = useLocation();

  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("TERMO");
        break;
      case "/2":
        setTitle("DUETO");
        break;
      case "/4":
        setTitle("QUARTETO");
        break;
      case "/sobre":
        setTitle("SOBRE");
        break;
      default:
        setTitle("TERMO");
    }
  }, [location.pathname]);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 100);
    } else {
      setIsOpen(true);
    }
  };

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const getModalContent = () => {
    switch (activeModal) {
      case "howToPlay":
        return <HowToPlayModal />;
      case "stats":
        return <StatsModal />;
      case "config":
        return <ConfigModal />;
      default:
        return null;
    }
  };

  return (
    <div className={styles["container"]}>
      {isOpen && (
        <nav
          className={`${styles.navroutes} ${
            isAnimating ? styles.closing : styles.open
          }`}
        >
          <div className={styles.routes}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.route
              }
              to="/"
            >
              termo
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.route
              }
              to="/2"
            >
              dueto
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.route
              }
              to="/4"
            >
              quarteto
            </NavLink>
          </div>
          <div>
            <NavLink className={styles["about-icon"]} to="/sobre">
              <img src={aboutIcon} alt="sobre" />
            </NavLink>
          </div>
        </nav>
      )}

      <div className={styles.menu}>
        <div>
          <button
            className={`${styles["dropdown-icon-button"]} ${
              styles["menu-btns"]
            } ${isOpen ? styles.open : ""}`}
            onClick={toggleDropdown}
          >
            <img className={styles["icon-imgs"]} src={dropIcon} alt="menu" />
          </button>
          <button
            className={styles["menu-btns"]}
            onClick={() => openModal("howToPlay")}
            aria-label="como jogar?"
          >
            ?
          </button>
        </div>
        <h1>{title}</h1>
        <div>
          <button
            className={styles["menu-btns"]}
            onClick={() => openModal("stats")}
          >
            <img
              className={styles["icon-imgs"]}
              src={statsIcon}
              alt="estatísticas"
            />
          </button>

          <button
            className={styles["menu-btns"]}
            onClick={() => openModal("config")}
          >
            <img
              className={styles["icon-imgs"]}
              src={configIcon}
              alt="configurações"
            />
          </button>
        </div>
      </div>

      <ModalModel isModalOpen={activeModal !== null} closeModal={closeModal}>
        {getModalContent()}
      </ModalModel>
    </div>
  );
};

export default DropdownMenu;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

import "./Header.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "header__link header__link--active"
      : "header__link";


  function closeMenu() {
    setIsMenuOpen(false);
  }


  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }


  return (
    <header className="header">

      <div className="header__container">

        {/* Logo texte */}

        <NavLink
          to="/"
          className="header__brand"
          aria-label="STMF - Retour à l'accueil"
          onClick={closeMenu}
        >
          STMF
        </NavLink>


        {/* Bouton hamburger */}

        <button
          type="button"
          className="header__menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={
            isMenuOpen
              ? "Fermer le menu"
              : "Ouvrir le menu"
          }
        >

          {isMenuOpen ? (
            <X
              size={28}
              strokeWidth={2}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={29}
              strokeWidth={2}
              aria-hidden="true"
            />
          )}

        </button>


        {/* Navigation */}

        <nav
          id="main-navigation"
          className={`header__nav ${
            isMenuOpen
              ? "header__nav--open"
              : ""
          }`}
          aria-label="Navigation principale"
        >

          <NavLink
            to="/"
            end
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Accueil
          </NavLink>


          <NavLink
            to="/en-savoir-plus"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            En savoir plus
          </NavLink>


          <NavLink
            to="/a-propos"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            À propos
          </NavLink>


          <NavLink
            to="/recrutement"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Recrutement
          </NavLink>


          <NavLink
            to="/contact"
            className={getNavLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

        </nav>

      </div>

    </header>
  );
}


export default Header;
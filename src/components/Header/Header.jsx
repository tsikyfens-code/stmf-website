import { NavLink } from "react-router";
import "./Header.css";

function Header() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "header__link header__link--active" : "header__link";

  return (
    <header className="header">
      <div className="header__container">

        {/* Logo texte STMF */}
        <NavLink
          to="/"
          className="header__brand"
          aria-label="STMF - Retour à l'accueil"
        >
          STMF
        </NavLink>

        {/* Navigation principale */}
        <nav
          className="header__nav"
          aria-label="Navigation principale"
        >
          <NavLink
            to="/"
            end
            className={getNavLinkClass}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/en-savoir-plus"
            className={getNavLinkClass}
          >
            En savoir plus
          </NavLink>

          <NavLink
            to="/a-propos"
            className={getNavLinkClass}
          >
            À propos
          </NavLink>

          <NavLink
            to="/recrutement"
            className={getNavLinkClass}
          >
            Recrutement
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavLinkClass}
          >
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;
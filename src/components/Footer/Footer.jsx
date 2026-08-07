import { Link } from "react-router";
import { Mail, MapPin } from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Présentation STMF */}
        <div className="footer__brand">
          <Link
            to="/"
            className="footer__logo"
            aria-label="STMF - Accueil"
          >
            STMF
          </Link>

          <p className="footer__description">
            Spécialiste de l'externalisation de la gestion locative
            à Madagascar. Notre expertise, votre sérénité.
          </p>
        </div>


        {/* Navigation */}
        <div className="footer__column">
          <h2 className="footer__title">
            Navigation
          </h2>

          <nav
            className="footer__links"
            aria-label="Navigation secondaire"
          >
            <Link to="/">
              Accueil
            </Link>

            <Link to="/en-savoir-plus">
              En savoir plus
            </Link>

            <Link to="/a-propos">
              À propos
            </Link>

            <Link to="/recrutement">
              Recrutement
            </Link>

            <Link to="/contact">
              Contact
            </Link>
          </nav>
        </div>


        {/* Services */}
        <div className="footer__column">
          <h2 className="footer__title">
            Nos services
          </h2>

          <div className="footer__services">
            <p>Sous-traitance comptable</p>

            <p>
              Sous-traitance administrative
            </p>

            <p>
              Relation clients
            </p>
          </div>
        </div>


        {/* Contact */}
        <div className="footer__column">
          <h2 className="footer__title">
            Contact
          </h2>

          <div className="footer__contact">

            <a
              href="mailto:stmfanilo@gmail.com"
              className="footer__contact-item"
            >
              <Mail
                size={18}
                aria-hidden="true"
              />

              <span>
                stmfanilo@gmail.com
              </span>
            </a>

            <div className="footer__contact-item">
              <MapPin
                size={18}
                aria-hidden="true"
              />

              <span>
                Madagascar
              </span>
            </div>

          </div>
        </div>

      </div>


      {/* Partie inférieure */}
      <div className="footer__bottom">

        <p>
          © STMF 2026 - Tous droits réservés.
        </p>

        <div className="footer__legal">
          <span>
            Mentions légales
          </span>

          <span aria-hidden="true">
            •
          </span>

          <span>
            Politique de confidentialité
          </span>
        </div>

      </div>


      {/* Décoration rouge */}
      <div
        className="footer__red-shape"
        aria-hidden="true"
      />

    </footer>
  );
}

export default Footer;
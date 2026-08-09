import { Link } from "react-router";

import {
  ArrowRight,
  Building2,
  UsersRound,
  Trophy,
} from "lucide-react";

import heroAPropos from "../../assets/images/a-propos/hero-a-propos.png";
import equipeAPropos from "../../assets/images/a-propos/equipe-a-propos.png";

import "./APropos.css";


function APropos() {
  return (
    <div className="a-propos">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="apropos-hero">

        <div className="apropos-hero__content">

          {/* Partie gauche */}

          <div className="apropos-hero__text">

            <h1 className="apropos-hero__title">
              STMF, votre partenaire
              <br />
              en externalisation comptable
              <br />
              et administrative
            </h1>


            <p className="apropos-hero__description">
              Depuis quelques années, STMF accompagne les
              administrateurs de biens français avec une équipe formée
              à la gestion locative, valorisant le professionnalisme,
              la confidentialité et une approche résolument humaine.
            </p>


            <div className="apropos-hero__actions">

              <Link
                to="/contact"
                className="apropos-button apropos-button--primary"
              >
                <span>Nous contacter</span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>


              <Link
                to="/en-savoir-plus"
                className="apropos-button apropos-button--secondary"
              >
                <span>Découvrir STMF</span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

            </div>


            <div
              className="apropos-hero__dots"
              aria-hidden="true"
            />

          </div>


          {/* Partie droite */}

          <div className="apropos-hero__visual">

            <img
              src={heroAPropos}
              alt="Équipe STMF collaborant autour d'un ordinateur"
              className="apropos-hero__image"
            />

            <div
              className="apropos-hero__white-curve"
              aria-hidden="true"
            />

            <div
              className="apropos-hero__red-curve"
              aria-hidden="true"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          L'ÉQUIPE
      ======================================== */}

      <section className="apropos-team">

        <div className="apropos-team__container">

          <div
            className="apropos-section-line"
            aria-hidden="true"
          />

          <h2 className="apropos-team__title">
            L'équipe derrière votre réussite.
          </h2>


          <p className="apropos-team__description">
            Des experts formés et engagés, sélectionnés pour leur
            rigueur et leur sens du service.
            <br />
            Chaque collaborateur maîtrise les spécificités de la
            gestion locative française pour
            <br />
            devenir un véritable prolongement de vos équipes.
          </p>


          <div className="apropos-team__image-wrapper">

            <img
              src={equipeAPropos}
              alt="Équipe STMF réunie dans ses bureaux"
              className="apropos-team__image"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          ÉVOLUTION DE STMF
      ======================================== */}

      <section className="apropos-history">

        <div className="apropos-history__container">

          <div
            className="apropos-section-line"
            aria-hidden="true"
          />

          <h2 className="apropos-history__title">
            L'évolution de STMF
          </h2>


          <p className="apropos-history__description">
            D'une petite structure fondée en 2023 à un partenaire
            de confiance des administrateurs de biens, STMF n'a cessé
            de grandir en professionnalisme et en fiabilité.
          </p>


          <div className="apropos-timeline">

            <TimelineCard
              icon={
                <Building2
                  size={31}
                  strokeWidth={1.8}
                />
              }
              period="2023"
              description={
                <>
                  Création de STMF
                  <br />
                  à Madagascar
                </>
              }
            />


            <div
              className="apropos-timeline__connector"
              aria-hidden="true"
            >
              <span />
            </div>


            <TimelineCard
              icon={
                <UsersRound
                  size={31}
                  strokeWidth={1.8}
                />
              }
              period="2024"
              description={
                <>
                  Accompagnement des premiers
                  <br />
                  administrateurs de biens français
                </>
              }
            />


            <div
              className="apropos-timeline__connector"
              aria-hidden="true"
            >
              <span />
            </div>


            <TimelineCard
              icon={
                <Trophy
                  size={31}
                  strokeWidth={1.8}
                />
              }
              period="Aujourd'hui"
              description={
                <>
                  Une équipe experte au service
                  <br />
                  de la continuité de votre gestion
                </>
              }
            />

          </div>

        </div>

      </section>

    </div>
  );
}


/* ========================================
   Élément de la timeline
======================================== */

function TimelineCard({
  icon,
  period,
  description,
}) {
  return (
    <article className="apropos-timeline-card">

      <div
        className="apropos-timeline-card__icon"
        aria-hidden="true"
      >
        {icon}
      </div>


      <h3 className="apropos-timeline-card__period">
        {period}
      </h3>


      <p className="apropos-timeline-card__description">
        {description}
      </p>

    </article>
  );
}


export default APropos;
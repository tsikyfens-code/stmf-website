import { Link } from "react-router";

import {
  ArrowRight,
  ChartNoAxesCombined,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import heroAccueil from "../../assets/images/accueil/hero-accueil.png";

import "./Accueil.css";


function Accueil() {
  return (
    <div className="accueil">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="accueil-hero">

        <div className="accueil-hero__content">

          {/* Partie gauche */}
          <div className="accueil-hero__text">

            <div className="accueil-hero__badge">
              <span
                className="accueil-hero__badge-dot"
                aria-hidden="true"
              />

              <span>
                Externalisation depuis Madagascar
              </span>
            </div>


            <h1 className="accueil-hero__title">
              Plus fiable et moins chère que l'IA :
              l'intelligence humaine et émotionnelle
            </h1>


            <p className="accueil-hero__description">
              STMF : une équipe d'experts de la gestion locative,
              formée pour répondre à tous vos besoins.
            </p>


            <div className="accueil-hero__actions">

              <Link
                to="/en-savoir-plus"
                className="accueil-button accueil-button--primary"
              >
                <span>
                  Découvrir STMF
                </span>

                <ArrowRight
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>


              <Link
                to="/contact"
                className="accueil-button accueil-button--secondary"
              >
                <span>
                  Nous contacter
                </span>

                <ArrowRight
                  size={21}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>

            </div>


            <div
              className="accueil-hero__dots"
              aria-hidden="true"
            />

          </div>


          {/* Partie droite */}
          <div className="accueil-hero__visual">

            <img
              src={heroAccueil}
              alt="Équipe STMF travaillant dans un bureau de gestion locative"
              className="accueil-hero__image"
            />

            <div
              className="accueil-hero__white-curve"
              aria-hidden="true"
            />

            <div
              className="accueil-hero__red-curve"
              aria-hidden="true"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          QUI SOMMES-NOUS ?
      ======================================== */}

      <section className="accueil-about">

        <div className="accueil-about__container">

          <div
            className="accueil-about__line"
            aria-hidden="true"
          />

          <p className="accueil-about__label">
            Qui sommes-nous ?
          </p>


          <h2 className="accueil-about__title">
            L'expertise locale au service des
            <br />
            professionnels de la gestion locative
          </h2>


          <p className="accueil-about__description">
            Depuis Madagascar, STMF accompagne les professionnels
            dans l'externalisation de leurs tâches administratives.
            Grâce à notre expertise locale, nous garantissons
            efficacité, fiabilité et confidentialité.
          </p>


          <div className="accueil-features">

            <FeatureCard
              icon={
                <ChartNoAxesCombined
                  size={42}
                  strokeWidth={1.8}
                />
              }
              title="Efficacité"
              description="Des processus optimisés pour un traitement rapide et rigoureux de vos tâches administratives."
            />


            <FeatureCard
              icon={
                <ShieldCheck
                  size={42}
                  strokeWidth={1.8}
                />
              }
              title="Fiabilité"
              description="Une équipe formée et engagée pour vous offrir un service de qualité, chaque jour."
            />


            <FeatureCard
              icon={
                <LockKeyhole
                  size={42}
                  strokeWidth={1.8}
                />
              }
              title="Confidentialité"
              description="La sécurité de vos données est notre priorité absolue, avec des standards élevés de protection."
            />

          </div>

        </div>

      </section>

    </div>
  );
}


/* ========================================
   Carte avantage
======================================== */

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <article className="accueil-feature">

      <div
        className="accueil-feature__icon"
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="accueil-feature__title">
        {title}
      </h3>

      <p className="accueil-feature__description">
        {description}
      </p>

      <div
        className="accueil-feature__line"
        aria-hidden="true"
      />

    </article>
  );
}


export default Accueil;
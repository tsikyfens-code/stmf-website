import { Link } from "react-router";

import {
  ArrowRight,
  Calculator,
  FolderOpen,
  Headphones,
  ShieldCheck,
  Zap,
  LockKeyhole,
} from "lucide-react";

import heroImage from "../../assets/images/en-savoir-plus/hero-en-savoir-plus.png";
import comptableImage from "../../assets/images/en-savoir-plus/sous-traitance-comptable.jpg";
import administratifImage from "../../assets/images/en-savoir-plus/sous-traitance-administrative.jpeg";
import relationClientsImage from "../../assets/images/en-savoir-plus/relation-clients.jpg";

import "./EnSavoirPlus.css";


function EnSavoirPlus() {
  return (
    <div className="en-savoir-plus">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="esp-hero">

        <div className="esp-hero__content">

          {/* Partie gauche */}

          <div className="esp-hero__text">

            <div className="esp-hero__badge">

              <span
                className="esp-hero__badge-dot"
                aria-hidden="true"
              />

              <span>
                Gestionnaires locatifs
              </span>

            </div>


            <h1 className="esp-hero__title">
              Découvrez comment les professionnels de
              votre secteur s’organisent
            </h1>


            <p className="esp-hero__description">
              Gestionnaires locatifs : découvrez comment les
              professionnels de votre secteur s'organisent pour
              assurer la qualité et la continuité de leur service
              de gestion immobilière.
            </p>


            <div className="esp-hero__actions">

              <Link
                to="/contact"
                className="esp-button esp-button--primary"
              >
                <span>Nous contacter</span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>


              <Link
                to="/a-propos"
                className="esp-button esp-button--secondary"
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
              className="esp-hero__dots"
              aria-hidden="true"
            />

          </div>


          {/* Partie droite */}

          <div className="esp-hero__visual">

            <img
              src={heroImage}
              alt="Collaboratrice STMF travaillant sur la gestion locative"
              className="esp-hero__image"
            />

            <div
              className="esp-hero__white-curve"
              aria-hidden="true"
            />

            <div
              className="esp-hero__red-curve"
              aria-hidden="true"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          SERVICES
      ======================================== */}

      <section className="esp-services">

        <div className="esp-services__container">

          <ServiceCard
            image={comptableImage}
            imageAlt="Traitement comptable avec calculatrice et documents"
            icon={
              <Calculator
                size={30}
                strokeWidth={1.8}
              />
            }
            title="1. Sous-traitance comptable"
            description="Gestion des banques, factures, appels de fonds, charges et indexation des loyers en toute rigueur."
            items={[
              "Rapprochements bancaires",
              "Factures & appels de fonds",
              "Charges & régularisations",
              "Indexation des loyers",
            ]}
          />


          <ServiceCard
            image={administratifImage}
            imageAlt="Gestion électronique des dossiers administratifs"
            icon={
              <FolderOpen
                size={30}
                strokeWidth={1.8}
              />
            }
            title="2. Sous-traitance administrative"
            description="Suivi complet des dossiers locataires, relances, comparatifs et gestion électronique documentaire."
            items={[
              "Relances & préavis",
              "Dossiers locataires",
              "Comparatifs entrées/sorties",
              "GED",
            ]}
            reverse
          />


          <ServiceCard
            image={relationClientsImage}
            imageAlt="Collaborateur STMF chargé de la relation clients"
            icon={
              <Headphones
                size={30}
                strokeWidth={1.8}
              />
            }
            title="3. Relation clients"
            description="Un accueil humain et réactif pour vos locataires et propriétaires, avec suivi des interventions."
            items={[
              "Accueil téléphonique",
              "Contacts locataires/propriétaires",
              "Suivi des entretiens",
              "Suivi des réparations",
            ]}
          />

        </div>

      </section>


      {/* ========================================
          ORGANISATION
      ======================================== */}

      <section className="esp-organisation">

        <div
          className="esp-organisation__line"
          aria-hidden="true"
        />

        <h2 className="esp-organisation__title">
          Une organisation fiable pour les gestionnaires locatifs
        </h2>


        <div className="esp-organisation__items">

          <OrganisationItem
            icon={
              <ShieldCheck
                size={39}
                strokeWidth={1.8}
              />
            }
            title="Rigueur"
            description="Des processus maîtrisés pour garantir exactitude et conformité."
          />


          <OrganisationItem
            icon={
              <Zap
                size={39}
                strokeWidth={1.8}
              />
            }
            title="Réactivité"
            description="Des équipes disponibles et agiles pour répondre vite."
          />


          <OrganisationItem
            icon={
              <LockKeyhole
                size={39}
                strokeWidth={1.8}
              />
            }
            title="Confidentialité"
            description="La sécurité des données et des échanges est notre priorité."
          />

        </div>

      </section>

    </div>
  );
}


/* ========================================
   Carte Service
======================================== */

function ServiceCard({
  image,
  imageAlt,
  icon,
  title,
  description,
  items,
  reverse = false,
}) {
  return (
    <article
      className={`esp-service-card ${
        reverse ? "esp-service-card--reverse" : ""
      }`}
    >

      <div className="esp-service-card__image-wrapper">

        <img
          src={image}
          alt={imageAlt}
          className="esp-service-card__image"
        />

      </div>


      <div className="esp-service-card__information">

        <div
          className="esp-service-card__icon"
          aria-hidden="true"
        >
          {icon}
        </div>


        <div className="esp-service-card__content">

          <h2 className="esp-service-card__title">
            {title}
          </h2>


          <p className="esp-service-card__description">
            {description}
          </p>


          <ul className="esp-service-card__list">

            {items.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </article>
  );
}


/* ========================================
   Élément organisation
======================================== */

function OrganisationItem({
  icon,
  title,
  description,
}) {
  return (
    <article className="esp-organisation-item">

      <div
        className="esp-organisation-item__icon"
        aria-hidden="true"
      >
        {icon}
      </div>


      <div className="esp-organisation-item__content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

      </div>

    </article>
  );
}


export default EnSavoirPlus;
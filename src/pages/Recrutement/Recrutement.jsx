import {
  ArrowRight,
  Mail,
  Send,
} from "lucide-react";

import Accordion from "../../components/Accordion/Accordion";

import jobs from "../../data/jobs";

import heroRecrutement from "../../assets/images/recrutement/hero-recrutement.png";

import "./Recrutement.css";


function Recrutement() {
  return (
    <div className="recrutement">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="recrutement-hero">

        <div className="recrutement-hero__content">

          {/* Texte */}

          <div className="recrutement-hero__text">

            <div className="recrutement-hero__badge">

              <span
                className="recrutement-hero__badge-dot"
                aria-hidden="true"
              />

              <span>
                CARRIÈRES
              </span>

            </div>


            <h1 className="recrutement-hero__title">
              Rejoignez
              <br />
              l’aventure STMF
            </h1>


            <div
              className="recrutement-hero__line"
              aria-hidden="true"
            />


            <p className="recrutement-hero__description">
              Chez STMF, nous croyons que notre réussite repose
              avant tout sur nos talents. Rejoignez une équipe
              engagée, rigoureuse et tournée vers le service
              de qualité.
            </p>


            <div
              className="recrutement-hero__dots"
              aria-hidden="true"
            />

          </div>


          {/* Photo */}

          <div className="recrutement-hero__visual">

            <img
              src={heroRecrutement}
              alt="Collaboratrice STMF travaillant dans les bureaux"
              className="recrutement-hero__image"
            />

            <div
              className="recrutement-hero__white-curve"
              aria-hidden="true"
            />

            <div
              className="recrutement-hero__red-curve"
              aria-hidden="true"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          OFFRES
      ======================================== */}

      <section className="recrutement-jobs">

        <div className="recrutement-jobs__container">

          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

      </section>


      {/* ========================================
          CANDIDATURE SPONTANÉE
      ======================================== */}

      <section className="recrutement-spontaneous">

        <div className="recrutement-spontaneous__container">

          <div className="recrutement-spontaneous__decoration">

            <div
              className="recrutement-spontaneous__icon"
              aria-hidden="true"
            >
              <Send
                size={39}
                strokeWidth={1.7}
              />
            </div>

            <div
              className="recrutement-spontaneous__dots"
              aria-hidden="true"
            />

          </div>


          <div className="recrutement-spontaneous__content">

            <h2>
              Aucun poste n’est ouvert pour le moment,
              <br />
              mais vous pouvez nous envoyer une candidature spontanée.
            </h2>


            <div className="recrutement-spontaneous__contact">

              <a
                href="mailto:stmfanilo@gmail.com"
                className="recrutement-spontaneous__email"
              >
                <Mail
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <span>
                  stmfanilo@gmail.com
                </span>
              </a>


              <span
                className="recrutement-spontaneous__separator"
                aria-hidden="true"
              />


              <a
                href="mailto:stmfanilo@gmail.com?subject=Candidature spontanée STMF"
                className="recrutement-spontaneous__button"
              >
                <span>
                  Candidature spontanée
                </span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


/* ========================================
   Carte d'une offre
======================================== */

function JobCard({
  job,
}) {
  const Icon = job.icon;


  return (
    <article className="recrutement-job">

      <div className="recrutement-job__image-wrapper">

        <img
          src={job.image}
          alt={job.imageAlt}
          className="recrutement-job__image"
        />

      </div>


      <div className="recrutement-job__information">

        <Accordion
          title={job.title}
          icon={
            <Icon
              strokeWidth={1.8}
            />
          }
          defaultOpen
        >

          <div className="recrutement-job__details">

            <p className="recrutement-job__description">
              {job.description}
            </p>


            <div
              className={`recrutement-job__status ${
                job.available
                  ? "recrutement-job__status--available"
                  : "recrutement-job__status--unavailable"
              }`}
            >

              <span
                className="recrutement-job__status-dot"
                aria-hidden="true"
              />

              <span>
                {job.available
                  ? "Offre disponible"
                  : "Cette offre n'est actuellement plus disponible."}
              </span>

            </div>

          </div>

        </Accordion>

      </div>

    </article>
  );
}


export default Recrutement;
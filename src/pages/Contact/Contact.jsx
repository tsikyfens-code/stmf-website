import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";

import heroContact from "../../assets/images/contact/hero-contact.png";

import "./Contact.css";


const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61573559982621";
const LINKEDIN_URL = "www.linkedin.com/in/stmf-fanilo-374832287";


function Contact() {
  const formRef = useRef(null);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);


  async function handleSubmit(event) {
    event.preventDefault();

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        type: "error",
        message:
          "Le formulaire n'est pas encore configuré. Veuillez nous contacter directement par email.",
      });

      return;
    }


    try {
      setIsSending(true);

      setFormStatus({
        type: "",
        message: "",
      });


      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey,
        }
      );


      formRef.current.reset();


      setFormStatus({
        type: "success",
        message:
          "Votre message a bien été envoyé. Merci de nous avoir contactés.",
      });
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi du formulaire :",
        error
      );


      setFormStatus({
        type: "error",
        message:
          "Une erreur est survenue lors de l'envoi. Vous pouvez également nous écrire directement à stmfanilo@gmail.com.",
      });
    } finally {
      setIsSending(false);
    }
  }


  return (
    <div className="contact-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="contact-hero">

        <div className="contact-hero__content">

          <div className="contact-hero__text">

            <div className="contact-hero__badge">

              <span
                className="contact-hero__badge-dot"
                aria-hidden="true"
              />

              <span>
                CONTACT
              </span>

            </div>


            <h1 className="contact-hero__title">
              Contactez
              <br />
              l’équipe STMF
            </h1>


            <p className="contact-hero__description">
              Nous sommes à votre écoute pour répondre
              à toutes vos questions concernant l'externalisation
              comptable, administrative et la relation clients.
              Une approche humaine, réactive et confidentielle.
            </p>


            <div
              className="contact-hero__dots"
              aria-hidden="true"
            />

          </div>


          <div className="contact-hero__visual">

            <img
              src={heroContact}
              alt="Collaboratrice STMF répondant à un client par téléphone"
              className="contact-hero__image"
            />

            <div
              className="contact-hero__white-curve"
              aria-hidden="true"
            />

            <div
              className="contact-hero__red-curve"
              aria-hidden="true"
            />

          </div>

        </div>

      </section>


      {/* ========================================
          INFORMATIONS
      ======================================== */}

      <section className="contact-info">

        <div className="contact-info__container">

          <ContactInfoCard
            icon={
              <Mail
                size={40}
                strokeWidth={1.7}
              />
            }
            title="Contact direct"
          >
            <p>
              Écrivez-nous par email à :
            </p>

            <a
              href="mailto:stmfanilo@gmail.com"
              className="contact-info-card__highlight"
            >
              stmfanilo@gmail.com
            </a>
          </ContactInfoCard>


          <ContactInfoCard
            icon={
              <MapPin
                size={40}
                strokeWidth={1.7}
              />
            }
            title="Localisation"
          >
            <p className="contact-info-card__highlight">
              Madagascar
            </p>

            <p>
              Nous accompagnons les professionnels
              de la gestion locative partout en France.
            </p>
          </ContactInfoCard>


          <ContactInfoCard
            icon={
              <Clock3
                size={40}
                strokeWidth={1.7}
              />
            }
            title="Réponse rapide"
          >
            <p>
              Nous nous engageons à vous répondre
              dans les meilleurs délais avec une
              approche personnalisée et confidentielle.
            </p>
          </ContactInfoCard>

        </div>

      </section>


      {/* ========================================
          RÉSEAUX SOCIAUX
      ======================================== */}

      <section className="contact-social">

        <div className="contact-social__container">

          <SocialCard
            type="facebook"
            title="Suivez-nous sur Facebook"
            description="Restez informés de nos actualités"
            url={FACEBOOK_URL}
          />


          <div
            className="contact-social__separator"
            aria-hidden="true"
          />


          <SocialCard
            type="linkedin"
            title="Suivez-nous sur LinkedIn"
            description="Connectez-vous avec notre équipe"
            url={LINKEDIN_URL}
          />

        </div>

      </section>


      {/* ========================================
          FORMULAIRE
      ======================================== */}

      <section className="contact-main">

        <div className="contact-main__container">

          {/* Pourquoi nous contacter ? */}

          <aside className="contact-reasons">

            <div
              className="contact-reasons__line"
              aria-hidden="true"
            />

            <h2>
              Pourquoi nous contacter ?
            </h2>


            <p>
              Discutons ensemble de vos besoins, obtenez des
              informations sur nos services ou demandez un devis
              personnalisé pour l'externalisation de vos tâches
              comptables, administratives ou de relation clients.
              Notre équipe est là pour vous accompagner.
            </p>


            <div
              className="contact-reasons__icons"
              aria-hidden="true"
            >

              <Mail
                size={58}
                strokeWidth={1.5}
              />

              <MessageSquare
                size={49}
                strokeWidth={1.5}
              />

              <Headphones
                size={58}
                strokeWidth={1.5}
              />

            </div>

          </aside>


          {/* Formulaire */}

          <div className="contact-form-wrapper">

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form__grid">

                <div className="contact-form__field">
                  <label htmlFor="contact-nom">
                    Nom *
                  </label>

                  <input
                    id="contact-nom"
                    name="nom"
                    type="text"
                    placeholder="Nom *"
                    autoComplete="family-name"
                    required
                  />
                </div>


                <div className="contact-form__field">
                  <label htmlFor="contact-prenom">
                    Prénom *
                  </label>

                  <input
                    id="contact-prenom"
                    name="prenom"
                    type="text"
                    placeholder="Prénom *"
                    autoComplete="given-name"
                    required
                  />
                </div>


                <div className="contact-form__field">
                  <label htmlFor="contact-email">
                    Email *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Email *"
                    autoComplete="email"
                    required
                  />
                </div>


                <div className="contact-form__field">
                  <label htmlFor="contact-telephone">
                    Téléphone *
                  </label>

                  <input
                    id="contact-telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Téléphone *"
                    autoComplete="tel"
                    required
                  />
                </div>


                <div className="contact-form__field">
                  <label htmlFor="contact-entreprise">
                    Entreprise
                  </label>

                  <input
                    id="contact-entreprise"
                    name="entreprise"
                    type="text"
                    placeholder="Entreprise"
                    autoComplete="organization"
                  />
                </div>


                <div className="contact-form__field">
                  <label htmlFor="contact-sujet">
                    Sujet *
                  </label>

                  <input
                    id="contact-sujet"
                    name="sujet"
                    type="text"
                    placeholder="Sujet *"
                    required
                  />
                </div>

              </div>


              <div className="contact-form__field contact-form__field--message">

                <label htmlFor="contact-message">
                  Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="7"
                  placeholder="Message *"
                  required
                />

              </div>


              <button
                type="submit"
                className="contact-form__submit"
                disabled={isSending}
              >

                <span>
                  {isSending
                    ? "Envoi en cours..."
                    : "Envoyer le message"}
                </span>

                <ArrowRight
                  size={24}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

              </button>


              {formStatus.message && (
                <p
                  className={`contact-form__status contact-form__status--${formStatus.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {formStatus.message}
                </p>
              )}

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}


/* ========================================
   Carte information
======================================== */

function ContactInfoCard({
  icon,
  title,
  children,
}) {
  return (
    <article className="contact-info-card">

      <div
        className="contact-info-card__icon"
        aria-hidden="true"
      >
        {icon}
      </div>

      <h2>
        {title}
      </h2>

      <div
        className="contact-info-card__line"
        aria-hidden="true"
      />

      <div className="contact-info-card__content">
        {children}
      </div>

    </article>
  );
}


/* ========================================
   Réseau social
======================================== */

function SocialCard({
  type,
  title,
  description,
  url,
}) {
  const content = (
    <>
      <span
        className={`contact-social-card__icon contact-social-card__icon--${type}`}
        aria-hidden="true"
      >
        {type === "facebook" ? "f" : "in"}
      </span>

      <span className="contact-social-card__text">

        <strong>
          {title}
        </strong>

        <span>
          {description}
        </span>

      </span>
    </>
  );


  if (!url) {
    return (
      <button
        type="button"
        className="contact-social-card contact-social-card--pending"
        title="Lien à renseigner ultérieurement"
        aria-label={`${title} - lien à renseigner ultérieurement`}
      >
        {content}
      </button>
    );
  }


  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-social-card"
    >
      {content}
    </a>
  );
}


export default Contact;
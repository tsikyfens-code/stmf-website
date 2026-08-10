import {
  Megaphone,
  UserRound,
  FolderOpen,
} from "lucide-react";

import marketingImage from "../assets/images/recrutement/marketing-digital.png";
import commercialImage from "../assets/images/recrutement/commercial-polyvalent.png";
import administratifImage from "../assets/images/recrutement/responsable-administratif.png";


const jobs = [
  {
    id: "marketing-digital",

    title: "Responsable Marketing Digital",

    description:
      "Pilotez la visibilité digitale de STMF, animez les supports de communication, valorisez notre image de marque et participez au développement de notre présence en ligne.",

    available: false,

    image: marketingImage,

    imageAlt:
      "Ordinateur affichant des données de marketing digital",

    icon: Megaphone,
  },

  {
    id: "commercial-polyvalent",

    title: "Commercial Polyvalent",

    description:
      "Contribuez au développement commercial de STMF, assurez le suivi des prospects et des clients, présentez nos services avec clarté et participez à la croissance de l’entreprise.",

    available: false,

    image: commercialImage,

    imageAlt:
      "Entretien professionnel pour un poste commercial",

    icon: UserRound,
  },

  {
    id: "responsable-administratif",

    title: "Responsable Administratif(ve)",

    description:
      "Organisez les dossiers administratifs, assurez le suivi documentaire, veillez à la conformité des processus et soutenez efficacement le fonctionnement quotidien des équipes.",

    available: false,

    image: administratifImage,

    imageAlt:
      "Classeurs et documents de gestion administrative",

    icon: FolderOpen,
  },
];


export default jobs;
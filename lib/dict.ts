export type Lang = "fr" | "en";

export type Moment = { time: string; title: string; body: string; image: string; alt: string };
export type Rule = { title: string; body: string };

export type Dict = {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { switchLabel: string; switchHref: string; switchLang: string; cta: string };
  hero: { title: string; lead: string };
  form: {
    label: string;
    placeholder: string;
    submit: string;
    sending: string;
    note: string;
    privacyLink: string;
    done: string;
    invalid: string;
    failed: string;
    closed: string;
  };
  film: { caption: string; soundOn: string; soundOff: string; play: string; pause: string; label: string };
  day: { title: string; moments: Moment[] };
  trust: { title: string; intro: string; rules: Rule[] };
  build: { title: string; body: string; instagram: string; github: string };
  footer: { privacy: string; legal: string; privacyHref: string; legalHref: string; rights: string };
};

export const fr: Dict = {
  lang: "fr",
  meta: {
    title: "Embreon, l’assistant IA dont l’écran se compose selon le moment",
    description:
      "Embreon prépare ton briefing le matin, s’efface quand tu travailles et te demande ton accord avant d’agir pour toi. Rejoins la liste d’attente.",
  },
  nav: { switchLabel: "English version", switchHref: "/en", switchLang: "EN", cta: "Rejoindre la liste" },
  hero: {
    title: "L’écran se compose selon le moment.",
    lead: "Embreon est un assistant IA personnel. Le matin, il prépare ton briefing. Quand tu travailles, il s’efface. Et avant d’agir pour toi, il te demande ton accord.",
  },
  form: {
    label: "Ton adresse e-mail",
    placeholder: "toi@exemple.fr",
    submit: "Rejoindre la liste d’attente",
    sending: "Inscription…",
    note: "Un e-mail au lancement, et c’est tout.",
    privacyLink: "Comment ton adresse est utilisée",
    done: "C’est noté. Tu seras prévenu dès que la première version sort.",
    invalid: "Cette adresse ne semble pas valide. Vérifie-la et réessaie.",
    failed: "L’inscription n’a pas pu être enregistrée. Réessaie dans un instant.",
    closed: "La liste d’attente ouvre dans quelques heures. Reviens un peu plus tard.",
  },
  film: {
    label: "Film de présentation d’Embreon",
    caption: "Concept en construction : l’interface est dessinée, le produit arrive épisode par épisode.",
    soundOn: "Activer le son",
    soundOff: "Couper le son",
    play: "Lire le film",
    pause: "Mettre en pause",
  },
  day: {
    title: "Une journée avec Embreon",
    moments: [
      {
        time: "08:12",
        title: "Le matin, il compose ton briefing.",
        body: "Agenda, mails à traiter, PR en attente, météo : Embreon assemble l’écran autour de ce qui compte aujourd’hui, et chaque carte dit pourquoi elle est là.",
        image: "/ecrans/matin.webp",
        alt: "Écran du matin : le noyau d’Embreon parle, avec quatre cartes : agenda, mails, code et météo, et le journal de la nuit.",
      },
      {
        time: "10:20",
        title: "Quand tu travailles, il s’efface.",
        body: "Il garde ton contexte sous les yeux, retient les notifications jusqu’à la fin de ton bloc et règle l’échec de CI en fond, sans rien pousser sans toi.",
        image: "/ecrans/deepwork.webp",
        alt: "Écran de concentration : bloc « Pipeline vocal », contexte du test qui échoue, agent de code au travail et sept notifications retenues.",
      },
      {
        time: "13:55",
        title: "Avant d’agir pour toi, il demande.",
        body: "Un mail à envoyer à l’extérieur ? Il te montre le brouillon, explique pourquoi il demande, puis te laisse 30 secondes pour annuler après ton accord.",
        image: "/ecrans/alerte.webp",
        alt: "Écran d’alerte : demande d’accord pour envoyer une réponse à un devis, et la revue de sprint qui commence dans cinq minutes.",
      },
    ],
  },
  trust: {
    title: "Tu gardes la main",
    intro: "Un assistant qui agit à ta place doit se laisser contrôler. Quatre règles, dès la première version.",
    rules: [
      { title: "Tout est écrit.", body: "Chaque action va dans un journal, avec l’heure et la raison." },
      { title: "Tu règles l’autonomie.", body: "Prudent, Équilibré ou Autonome : tu choisis ce qu’il fait seul." },
      { title: "Rien ne sort sans ton accord.", body: "Mails, messages, paiements : en mode Prudent, il demande toujours." },
      { title: "Ce qui s’annule s’annule.", body: "Les actions réversibles gardent leur bouton Annuler, directement dans le journal." },
    ],
  },
  build: {
    title: "Je le construis en public",
    body: "Je suis Alistair, développeur. Je construis Embreon épisode par épisode, et le code sera open source.",
    instagram: "Suivre sur Instagram",
    github: "Voir sur GitHub",
  },
  footer: {
    privacy: "Confidentialité",
    legal: "Mentions légales",
    privacyHref: "/confidentialite",
    legalHref: "/mentions-legales",
    rights: "© 2026 Embreon",
  },
};

export const en: Dict = {
  lang: "en",
  meta: {
    title: "Embreon, the AI assistant whose screen is composed for the moment",
    description:
      "Embreon prepares your morning briefing, steps back while you work and asks for your OK before acting for you. Join the waitlist.",
  },
  nav: { switchLabel: "Version française", switchHref: "/", switchLang: "FR", cta: "Join the waitlist" },
  hero: {
    title: "Your screen, composed for the moment.",
    lead: "Embreon is a personal AI assistant. In the morning, it prepares your briefing. While you work, it steps back. And before acting for you, it asks for your OK.",
  },
  form: {
    label: "Your email address",
    placeholder: "you@example.com",
    submit: "Join the waitlist",
    sending: "Joining…",
    note: "One email at launch, nothing else.",
    privacyLink: "How your address is used",
    done: "You’re on the list. You’ll hear from us when the first version ships.",
    invalid: "This address doesn’t look valid. Check it and try again.",
    failed: "Your signup couldn’t be saved. Try again in a moment.",
    closed: "The waitlist opens in a few hours. Check back a little later.",
  },
  film: {
    label: "Embreon introduction film",
    caption: "Work in progress: the interface is designed, the product is being built episode by episode.",
    soundOn: "Turn sound on",
    soundOff: "Turn sound off",
    play: "Play the film",
    pause: "Pause",
  },
  day: {
    title: "A day with Embreon",
    moments: [
      {
        time: "08:12",
        title: "In the morning, it composes your briefing.",
        body: "Calendar, emails to answer, pending pull requests, weather: Embreon builds the screen around what matters today, and every card says why it’s there.",
        image: "/ecrans/matin.webp",
        alt: "Morning screen: Embreon’s core speaks, with four cards for calendar, email, code and weather, and the overnight log.",
      },
      {
        time: "10:20",
        title: "While you work, it steps back.",
        body: "It keeps your context in view, holds notifications until your focus block ends and fixes the failing CI in the background, without pushing anything without you.",
        image: "/ecrans/deepwork.webp",
        alt: "Focus screen: the “Voice pipeline” block, the failing test, the coding agent at work and seven held notifications.",
      },
      {
        time: "13:55",
        title: "Before acting for you, it asks.",
        body: "An email going outside? It shows you the draft, explains why it’s asking, then gives you 30 seconds to undo after you approve.",
        image: "/ecrans/alerte.webp",
        alt: "Alert screen: an approval request to send a quote reply, and the sprint review starting in five minutes.",
      },
    ],
  },
  trust: {
    title: "You stay in control",
    intro: "An assistant that acts for you has to be easy to control. Four rules, from the first version.",
    rules: [
      { title: "Everything is logged.", body: "Every action goes into a log, with the time and the reason." },
      { title: "You set the autonomy.", body: "Careful, Balanced or Autonomous: you choose what it does on its own." },
      { title: "Nothing leaves without your OK.", body: "Emails, messages, payments: in Careful mode, it always asks." },
      { title: "What can be undone, can be undone.", body: "Reversible actions keep their Undo button, right in the log." },
    ],
  },
  build: {
    title: "Built in public",
    body: "I’m Alistair, a developer. I’m building Embreon episode by episode, and the code will be open source.",
    instagram: "Follow on Instagram",
    github: "See on GitHub",
  },
  footer: {
    privacy: "Privacy",
    legal: "Legal notice",
    privacyHref: "/en/privacy",
    legalHref: "/en/legal",
    rights: "© 2026 Embreon",
  },
};

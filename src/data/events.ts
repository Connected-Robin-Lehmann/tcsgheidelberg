export type EventType = 
  | "party" 
  | "sport" 
  | "tournament" 
  | "camp" 
  | "meeting" 
  | "training" 
  | "infrastructure" 
  | "food"
  | "match";

export interface ClubEvent {
  id: string;
  date: string;
  time: {
    de: string;
    en: string;
  };
  title: {
    de: string;
    en: string;
  };
  location: {
    de: string;
    en: string;
  };
  description: {
    de: string;
    en: string;
  };
  contact?: string;
  attachmentUrl?: string;
  attachmentLabel?: { de: string; en: string };
  linkUrl?: string;
  linkLabel?: { de: string; en: string };
  type: EventType;
}

export const upcomingEvents: ClubEvent[] = [
  {
    id: "sommercamp-2-2026",
    date: "07.09. - 11.09.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "2. Sommerferien Tenniscamp", en: "2nd Summer Tennis Camp" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Sommerferien Tenniscamp in Heidelberg", en: "Summer tennis camp in Heidelberg" },
    type: "camp",
  },
  {
    id: "traglufthallenaufbau-2026",
    date: "07.09. - 15.09.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Traglufthallenaufbau", en: "Inflatable Hall Setup" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Aufbau der Traglufthalle für die Wintersaison", en: "Setup of the inflatable hall for winter season" },
    type: "infrastructure",
  },
  {
    id: "mitgliederversammlung-2026",
    date: "13.09.2026",
    time: { de: "ab 17 Uhr", en: "from 5 PM" },
    title: { de: "Ordentliche Mitgliederversammlung 2026", en: "Ordinary Members' Meeting 2026" },
    location: { de: "Tennisanlage, Schwindstraße 9, Heidelberg", en: "Tennis Facility, Schwindstraße 9, Heidelberg" },
    description: { de: "Einladung zur ordentlichen Mitgliederversammlung 2026 mit Tagesordnung und Wahl des Versammlungsleiters.", en: "Invitation to the ordinary members' meeting 2026 with agenda and election of the meeting chair." },
    attachmentUrl: "/downloads/Einladung_Mitgliederversammlung_2026.pdf",
    attachmentLabel: { de: "Einladung herunterladen", en: "Download invitation" },
    type: "meeting",
  },
  {
    id: "anmeldung-wintertraining-2026",
    date: "bis 15.09.2026",
    time: { de: "Online-Anmeldung", en: "Online registration" },
    title: { de: "Anmeldung zum Wintertraining 2026/2027", en: "Winter Training Registration 2026/2027" },
    location: { de: "Sportision-Portal", en: "Sportision portal" },
    description: { de: "Anmeldung zum Wintertraining über das Online-Portal Sportision. Anmeldeschluss ist der 15.09.2026 – bei späterer Anmeldung kann kein Trainingsplatz garantiert werden, da das Wintertraining am 21.09.2026 beginnt.", en: "Register for winter training via the Sportision online portal. Registration deadline is 15.09.2026 – later registrations cannot be guaranteed a training slot, as winter training begins on 21.09.2026." },
    linkUrl: "https://www.sportision.de/club/kukaras-professional-tennis-1",
    linkLabel: { de: "Zur Anmeldung auf Sportision", en: "Register on Sportision" },
    type: "training",
  },
  {
    id: "wintertraining-beginn-2026",
    date: "21.09.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Beginn des Wintertrainings", en: "Start of Winter Training" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Start des regulären Wintertrainings", en: "Start of regular winter training" },
    type: "training",
  },
  {
    id: "doppelturnier-saisonabschluss-2026",
    date: "04.10.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Doppel-Turnier & Saison-Abschluss", en: "Doubles Tournament & Season Finale" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Doppel-Turnier zum Abschluss der Saison", en: "Doubles tournament to close the season" },
    type: "tournament",
  },
  {
    id: "putzete-herbst-2026",
    date: "Ende Oktober 2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Putzete", en: "Autumn Cleanup" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Herbst-Putzaktion auf der Anlage", en: "Autumn cleanup at the facility" },
    type: "infrastructure",
  },
  {
    id: "weihnachtsessen-2026",
    date: "20.11.2026",
    time: { de: "abends", en: "Evening" },
    title: { de: "Weihnachtsessen", en: "Christmas Dinner" },
    location: { de: "wird bekannt gegeben", en: "To be announced" },
    description: { de: "Gemeinsames Weihnachtsessen", en: "Joint Christmas dinner" },
    type: "food",
  },
  {
    id: "silvester-2026",
    date: "31.12.2026",
    time: { de: "abends", en: "Evening" },
    title: { de: "Silvester Party", en: "New Year's Eve Party" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Silvester Party auf der Anlage", en: "New Year's Eve party at the facility" },
    type: "party",
  },
];

export const eventTypeLabels: Record<EventType, { de: string; en: string }> = {
  party: { de: "Party", en: "Party" },
  sport: { de: "Sport", en: "Sport" },
  tournament: { de: "Turnier", en: "Tournament" },
  camp: { de: "Camp", en: "Camp" },
  meeting: { de: "Versammlung", en: "Meeting" },
  training: { de: "Training", en: "Training" },
  infrastructure: { de: "Infrastruktur", en: "Infrastructure" },
  food: { de: "Essen", en: "Food" },
  match: { de: "Punktspiel", en: "League Match" },
};

export const getEventTypeColor = (type: EventType): string => {
  switch (type) {
    case "party":
      return "bg-purple-100 text-purple-800";
    case "sport":
      return "bg-green-100 text-green-800";
    case "tournament":
      return "bg-tennis-yellow/20 text-tennis-black";
    case "camp":
      return "bg-blue-100 text-blue-800";
    case "meeting":
      return "bg-red-100 text-red-800";
    case "training":
      return "bg-orange-100 text-orange-800";
    case "infrastructure":
      return "bg-gray-100 text-gray-800";
    case "food":
      return "bg-amber-100 text-amber-800";
    case "match":
      return "bg-emerald-100 text-emerald-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getEventIcon = (type: EventType): string => {
  switch (type) {
    case "party":
      return "🎉";
    case "sport":
      return "🎾";
    case "tournament":
      return "🏆";
    case "camp":
      return "🏕️";
    case "meeting":
      return "📋";
    case "training":
      return "💪";
    case "infrastructure":
      return "🔧";
    case "food":
      return "🍽️";
    case "match":
      return "🏸";
    default:
      return "📅";
  }
};

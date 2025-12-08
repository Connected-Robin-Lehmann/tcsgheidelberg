export type EventType = 
  | "party" 
  | "sport" 
  | "tournament" 
  | "camp" 
  | "meeting" 
  | "training" 
  | "infrastructure" 
  | "food";

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
  type: EventType;
}

export const upcomingEvents: ClubEvent[] = [
  {
    id: "80s-90s-party-2025",
    date: "30.04.2025",
    time: { de: "20:00", en: "20:00" },
    title: { 
      de: "80er/90er Party zum Tanz in den Mai", 
      en: "80s/90s Party – Dance into May" 
    },
    location: { de: "Clubhaus", en: "Clubhouse" },
    description: { 
      de: "Zwecks Planung bitte per Email anmelden", 
      en: "Please register via email for planning purposes" 
    },
    contact: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
    type: "party",
  },
  {
    id: "meden-start-2025",
    date: "03.05.2025",
    time: { de: "ganztägig", en: "All day" },
    title: { 
      de: "Beginn der Medenrunde", 
      en: "Start of League Matches" 
    },
    location: { de: "Diverse Plätze", en: "Various Courts" },
    description: { 
      de: "Start der Mannschaftsspiele für die Saison 2025", 
      en: "Start of team matches for the 2025 season" 
    },
    type: "sport",
  },
  {
    id: "season-opening-2025",
    date: "04.05.2025",
    time: { de: "14:00", en: "14:00" },
    title: { 
      de: "Saisoneröffnung mit Blümchenturnier", 
      en: "Season Opening with Flower Tournament" 
    },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { 
      de: "Offizielle Eröffnung der Tennissaison mit traditionellem Turnier", 
      en: "Official opening of the tennis season with a traditional tournament" 
    },
    type: "tournament",
  },
  {
    id: "pentecost-camp-2025",
    date: "07.06. - 21.06.2025",
    time: { de: "ganztägig", en: "All day" },
    title: { 
      de: "Pfingstferien Tenniscamp", 
      en: "Pentecost Tennis Camp" 
    },
    location: { de: "Veli Lošinj, Kroatien", en: "Veli Lošinj, Croatia" },
    description: { 
      de: "Tenniscamp in traumhafter Kulisse an der kroatischen Küste", 
      en: "Tennis camp in a beautiful setting on the Croatian coast" 
    },
    type: "camp",
  },
  {
    id: "member-meeting-2025",
    date: "19.07.2025",
    time: { de: "17:00", en: "17:00" },
    title: { 
      de: "Mitgliederversammlung + Sommerfest", 
      en: "General Meeting + Summer Festival" 
    },
    location: { de: "Clubhaus & Terrasse", en: "Clubhouse & Terrace" },
    description: { 
      de: "Kombiniert mit Nuit Blanche - unser jährliches Vereinshighlight", 
      en: "Combined with Nuit Blanche – our annual club highlight" 
    },
    type: "meeting",
  },
  {
    id: "schwarz-gelb-cup-2025",
    date: "30.07. - 03.08.2025",
    time: { de: "ganztägig", en: "All day" },
    title: { 
      de: "Schwarz Gelb Cup 2025 (Jugend)", 
      en: "Schwarz Gelb Cup 2025 (Youth)" 
    },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { 
      de: "Powered by Engelhorn Sports - unser traditionelles Jugendturnier", 
      en: "Powered by Engelhorn Sports – our traditional youth tournament" 
    },
    type: "tournament",
  },
  {
    id: "summer-camp-1-2025",
    date: "04.08. - 08.08.2025",
    time: { de: "09:30 - 15:30", en: "09:30 - 15:30" },
    title: { 
      de: "1. Sommerferiencamp in Heidelberg", 
      en: "1st Summer Holiday Camp in Heidelberg" 
    },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { 
      de: "Tenniscamp für Kinder und Jugendliche in den Sommerferien", 
      en: "Tennis camp for children and youth during summer holidays" 
    },
    type: "camp",
  },
  {
    id: "summer-camp-2-2025",
    date: "08.09. - 12.09.2025",
    time: { de: "09:30 - 15:30", en: "09:30 - 15:30" },
    title: { 
      de: "2. Sommerferiencamp in Heidelberg", 
      en: "2nd Summer Holiday Camp in Heidelberg" 
    },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { 
      de: "Zweites Tenniscamp für Kinder und Jugendliche", 
      en: "Second tennis camp for children and youth" 
    },
    type: "camp",
  },
  {
    id: "hall-setup-2025",
    date: "07.09. - 15.09.2025",
    time: { de: "ganztägig", en: "All day" },
    title: { 
      de: "Traglufthallenaufbau", 
      en: "Inflatable Hall Setup" 
    },
    location: { de: "Plätze 7 & 8", en: "Courts 7 & 8" },
    description: { 
      de: "Aufbau der Traglufthalle für die Wintersaison", 
      en: "Setup of the inflatable hall for the winter season" 
    },
    type: "infrastructure",
  },
  {
    id: "winter-training-2025",
    date: "22.09.2025",
    time: { de: "ganztägig", en: "All day" },
    title: { 
      de: "Beginn Wintertraining", 
      en: "Start of Winter Training" 
    },
    location: { de: "Traglufthalle", en: "Inflatable Hall" },
    description: { 
      de: "Start des Trainingsbetriebs in der Traglufthalle", 
      en: "Start of training operations in the inflatable hall" 
    },
    type: "training",
  },
  {
    id: "season-closing-2025",
    date: "07.10.2025",
    time: { de: "14:00", en: "14:00" },
    title: { 
      de: "Saisonabschluss mit Doppel-Turnier", 
      en: "Season Closing with Doubles Tournament" 
    },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { 
      de: "Traditioneller Saisonabschluss mit Doppel-Turnier", 
      en: "Traditional season closing with doubles tournament" 
    },
    type: "tournament",
  },
  {
    id: "thanksgiving-2025",
    date: "21.11.2025",
    time: { de: "19:00", en: "19:00" },
    title: { 
      de: "Thanksgiving Pute-Essen", 
      en: "Thanksgiving Turkey Dinner" 
    },
    location: { de: "Clubhaus", en: "Clubhouse" },
    description: { 
      de: "Gemütliches Beisammensein mit traditionellem Thanksgiving-Essen", 
      en: "Cozy gathering with traditional Thanksgiving meal" 
    },
    type: "food",
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
    default:
      return "📅";
  }
};

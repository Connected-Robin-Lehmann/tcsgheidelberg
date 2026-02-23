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
  type: EventType;
}

export const upcomingEvents: ClubEvent[] = [
  // Badenliga Hallensaison 2026 – nur noch zukünftige Termine
  {
    id: "damen1-badenliga-feb-2026",
    date: "28.02.2026",
    time: { de: "17:00 Uhr", en: "5:00 PM" },
    title: { de: "Damen 1 Badenliga", en: "Women 1 Baden League" },
    location: { de: "Halle TC Wolfsberg Pforzheim", en: "TC Wolfsberg Pforzheim Indoor Court" },
    description: { de: "Punktspiel Hallensaison", en: "League match indoor season" },
    type: "match",
  },
  {
    id: "damen2-badenliga-feb-2026",
    date: "28.02.2026",
    time: { de: "18:00 Uhr", en: "6:00 PM" },
    title: { de: "Damen 2 Badenliga", en: "Women 2 Baden League" },
    location: { de: "Halle TC Plankstadt", en: "TC Plankstadt Indoor Court" },
    description: { de: "Punktspiel Hallensaison", en: "League match indoor season" },
    type: "match",
  },
  // Termine 2026
  {
    id: "ostercamp-2026",
    date: "07.04. - 10.04.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Osterferien Tenniscamp", en: "Easter Tennis Camp" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Tenniscamp für Kinder in den Osterferien", en: "Tennis camp for children during Easter holidays" },
    type: "camp",
  },
  {
    id: "season-opening-2026",
    date: "26.04.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Tag der offenen Tür & Saisoneröffnung", en: "Open Day & Season Opening" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Mit Blümchenturnier", en: "With flower tournament" },
    type: "tournament",
  },
  {
    id: "pfingstcamp-2026",
    date: "30.05. - 06.06.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Pfingstferien Tenniscamp", en: "Whitsun Tennis Camp" },
    location: { de: "Veli Lošinj, Kroatien", en: "Veli Lošinj, Croatia" },
    description: { de: "Tenniscamp in Veli Lošinj", en: "Tennis camp in Veli Lošinj" },
    type: "camp",
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

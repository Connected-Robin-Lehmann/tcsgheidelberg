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

// Event content is managed in Sanity (see src/hooks/useSanityContent.ts).

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

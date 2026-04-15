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
  {
    id: "lk-turnier-apr-2",
    date: "18.04. / 19.04.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "LK Turnier", en: "LK Tournament" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "LK Turnier, organisiert vom Förderverein", en: "LK Tournament, organized by the supporting association" },
    type: "tournament",
  },
  {
    id: "lk-turnier-apr-3",
    date: "25.04.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "LK Turnier", en: "LK Tournament" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "LK Turnier, organisiert vom Förderverein", en: "LK Tournament, organized by the supporting association" },
    type: "tournament",
  },
  {
    id: "season-opening-2026",
    date: "26.04.2026",
    time: { de: "ab 12 Uhr", en: "From 12 PM" },
    title: { de: "Tag der offenen Tür & Saisoneröffnung mit Blümchenturnier", en: "Open Day & Season Opening with Flower Tournament" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Tag der offenen Tür: 12–14 Uhr. Blümchenturnier: ab 14 Uhr. Anmeldung zum Blümchenturnier bei terezie.zuna-homsy@schwarzgelb-heidelberg.de", en: "Open Day: 12–2 PM. Flower Tournament: from 2 PM. Registration for the Flower Tournament at terezie.zuna-homsy@schwarzgelb-heidelberg.de" },
    type: "tournament",
  },
  {
    id: "medenrunde-beginn-2026",
    date: "06.05.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Beginn der Medenrunde", en: "Start of Meden League" },
    location: { de: "Verschiedene Orte", en: "Various locations" },
    description: { de: "Start der Medenrunde 2026", en: "Start of the 2026 Meden League season" },
    type: "match",
  },
  {
    id: "oberliga-herren-2026",
    date: "10.05. - 19.07.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Oberliga Herren", en: "Men's Oberliga" },
    location: { de: "Verschiedene Orte", en: "Various locations" },
    description: { de: "Spielsaison Oberliga Herren", en: "Men's Oberliga season" },
    type: "match",
  },
  {
    id: "badenliga-damen-2026",
    date: "28.06. - 20.07.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Spielsaison Badenliga Damen", en: "Women's Baden League Season" },
    location: { de: "Verschiedene Orte", en: "Various locations" },
    description: { de: "Spielsaison Badenliga Damen", en: "Women's Baden League season" },
    type: "match",
  },
  {
    id: "sommerfest-2026",
    date: "18.07.2026",
    time: { de: "abends", en: "Evening" },
    title: { de: "Sommerfest", en: "Summer Party" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Das legendäre Sommerfest", en: "The legendary summer party" },
    type: "party",
  },
  {
    id: "schwarz-gelb-cup-2026",
    date: "30.07. - 02.08.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Schwarz-Gelb-Cup", en: "Schwarz-Gelb Cup" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Schwarz-Gelb-Cup, organisiert vom Förderverein", en: "Schwarz-Gelb Cup, organized by the supporting association" },
    type: "tournament",
  },
  {
    id: "sommercamp-1-2026",
    date: "03.08. - 07.08.2026",
    time: { de: "ganztägig", en: "All day" },
    title: { de: "1. Sommerferien Tenniscamp", en: "1st Summer Tennis Camp" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Sommerferien Tenniscamp in Heidelberg", en: "Summer tennis camp in Heidelberg" },
    type: "camp",
  },
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
    time: { de: "ganztägig", en: "All day" },
    title: { de: "Mitgliederversammlung", en: "Members' Meeting" },
    location: { de: "Tennisanlage", en: "Tennis Facility" },
    description: { de: "Jährliche Mitgliederversammlung", en: "Annual members' meeting" },
    type: "meeting",
  },
  {
    id: "wintertraining-beginn-2026",
    date: "22.09.2026",
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

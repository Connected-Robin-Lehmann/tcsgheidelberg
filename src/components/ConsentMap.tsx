import { useState } from "react";
import { MapPin } from "lucide-react";

interface ConsentMapProps {
  src: string;
  title: string;
  lang?: "de" | "en";
}

/**
 * DSGVO-konformer Google-Maps-Embed (Two-Click-Lösung).
 * Lädt die Karte erst nach expliziter Einwilligung des Nutzers.
 */
const ConsentMap = ({ src, title, lang = "de" }: ConsentMapProps) => {
  const [consent, setConsent] = useState(false);

  const t =
    lang === "de"
      ? {
          heading: "Karte mit Google Maps anzeigen",
          body: "Beim Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an Google in den USA übertragen. Mit Klick auf den Button willigen Sie dieser Übertragung ein.",
          policy: "Datenschutzerklärung von Google",
          button: "Karte laden",
        }
      : {
          heading: "Show map with Google Maps",
          body: "Loading the map will transfer data (including your IP address) to Google in the USA. By clicking the button you consent to this transfer.",
          policy: "Google Privacy Policy",
          button: "Load map",
        };

  if (consent) {
    return (
      <iframe
        src={src}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
        title={title}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl p-8 min-h-[400px]">
      <MapPin className="h-10 w-10 text-tennis-black mb-4" />
      <h4 className="text-lg font-bold text-tennis-black mb-2">{t.heading}</h4>
      <p className="text-gray-700 max-w-md mb-4">{t.body}</p>
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 underline mb-6 hover:text-tennis-black"
      >
        {t.policy}
      </a>
      <button
        onClick={() => setConsent(true)}
        className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg"
      >
        {t.button}
      </button>
    </div>
  );
};

export default ConsentMap;
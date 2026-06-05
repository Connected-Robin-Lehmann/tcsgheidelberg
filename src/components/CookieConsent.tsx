import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "sg-cookie-consent-v1";

/**
 * Minimaler DSGVO-/TTDSG-konformer Cookie-Hinweis.
 * Die Seite setzt selbst keine nicht-essentiellen Cookies, aber Embeds
 * (Google Maps) benötigen eine Einwilligung. Dieses Banner informiert
 * darüber und speichert die Auswahl lokal.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // localStorage nicht verfügbar – Banner anzeigen
      setVisible(true);
    }
  }, []);

  const save = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl bg-tennis-black text-white rounded-2xl shadow-2xl border-2 border-tennis-yellow p-6 md:p-8">
        <h2 className="text-xl font-bold text-tennis-yellow mb-2">
          Datenschutz-Hinweis
        </h2>
        <p className="text-sm md:text-base text-gray-200 mb-4">
          Diese Website verwendet ausschließlich technisch notwendige Cookies.
          Für externe Inhalte (z. B. Google Maps) holen wir Ihre Einwilligung
          separat ein. Weitere Informationen finden Sie in unserer{" "}
          <Link
            to="/datenschutz"
            className="text-tennis-yellow underline hover:text-yellow-300"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3 justify-end">
          <button
            onClick={() => save("declined")}
            className="px-5 py-2 rounded-full font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-tennis-black transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => save("accepted")}
            className="px-5 py-2 rounded-full font-bold bg-tennis-yellow text-tennis-black hover:bg-yellow-400 transition-colors"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
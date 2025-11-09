import { LanguageRoute } from "@/utils/LanguageRoute";
import VeranstaltungenDE from "./Veranstaltungen.de";
import VeranstaltungenEN from "./Veranstaltungen.en";

const Veranstaltungen = () => {
  return <LanguageRoute de={VeranstaltungenDE} en={VeranstaltungenEN} />;
};

export default Veranstaltungen;

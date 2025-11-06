import { LanguageRoute } from "@/utils/LanguageRoute";
import AktuellesDE from "./Aktuelles.de";
import AktuellesEN from "./Aktuelles.en";

const Aktuelles = () => {
  return <LanguageRoute de={AktuellesDE} en={AktuellesEN} />;
};

export default Aktuelles;

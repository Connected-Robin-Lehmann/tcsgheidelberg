import { LanguageRoute } from "@/utils/LanguageRoute";
import ProjekteDE from "./Projekte.de";
import ProjekteEN from "./Projekte.en";

const Projekte = () => {
  return <LanguageRoute de={ProjekteDE} en={ProjekteEN} />;
};

export default Projekte;

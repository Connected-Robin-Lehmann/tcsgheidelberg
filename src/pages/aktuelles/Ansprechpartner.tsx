import { LanguageRoute } from "@/utils/LanguageRoute";
import AnsprechpartnerDE from "./Ansprechpartner.de";
import AnsprechpartnerEN from "./Ansprechpartner.en";

const Ansprechpartner = () => {
  return <LanguageRoute de={AnsprechpartnerDE} en={AnsprechpartnerEN} />;
};

export default Ansprechpartner;

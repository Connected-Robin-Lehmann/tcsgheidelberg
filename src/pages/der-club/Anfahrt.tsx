import { LanguageRoute } from "@/utils/LanguageRoute";
import AnfahrtDE from "./Anfahrt.de";
import AnfahrtEN from "./Anfahrt.en";

const Anfahrt = () => (
  <LanguageRoute de={AnfahrtDE} en={AnfahrtEN} />
);

export default Anfahrt;

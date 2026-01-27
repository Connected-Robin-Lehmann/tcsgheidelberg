import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import MannschaftsfuehrerDE from "./Mannschaftsfuehrer.de";
import MannschaftsfuehrerEN from "./Mannschaftsfuehrer.en";

const Mannschaftsfuehrer = () => {
  return <LanguageRoute de={MannschaftsfuehrerDE} en={MannschaftsfuehrerEN} />;
};

export default Mannschaftsfuehrer;

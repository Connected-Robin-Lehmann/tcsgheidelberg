import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import MannschaftenDE from "./Mannschaften.de";
import MannschaftenEN from "./Mannschaften.en";

const Mannschaften = () => {
  return <LanguageRoute de={MannschaftenDE} en={MannschaftenEN} />;
};

export default Mannschaften;

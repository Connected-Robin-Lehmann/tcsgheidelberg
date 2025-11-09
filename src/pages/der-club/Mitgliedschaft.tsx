import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import MitgliedschaftDE from "./Mitgliedschaft.de";
import MitgliedschaftEN from "./Mitgliedschaft.en";

const Mitgliedschaft = () => {
  return <LanguageRoute de={MitgliedschaftDE} en={MitgliedschaftEN} />;
};

export default Mitgliedschaft;

import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import FoerdervereinDE from "./Foerderverein.de";
import FoerdervereinEN from "./Foerderverein.en";

const Foerderverein = () => {
  return <LanguageRoute de={FoerdervereinDE} en={FoerdervereinEN} />;
};

export default Foerderverein;

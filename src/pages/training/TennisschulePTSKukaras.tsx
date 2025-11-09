import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import TennisschulePTSKukarasDE from "./TennisschulePTSKukaras.de";
import TennisschulePTSKukarasEN from "./TennisschulePTSKukaras.en";

const TennisschulePTSKukaras = () => {
  return (
    <LanguageRoute
      de={TennisschulePTSKukarasDE}
      en={TennisschulePTSKukarasEN}
    />
  );
};

export default TennisschulePTSKukaras;

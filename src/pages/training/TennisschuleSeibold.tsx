import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import TennisschuleSeiboldDE from "./TennisschuleSeibold.de";
import TennisschuleSeiboldEN from "./TennisschuleSeibold.en";

const TennisschuleSeibold = () => {
  return (
    <LanguageRoute de={TennisschuleSeiboldDE} en={TennisschuleSeiboldEN} />
  );
};

export default TennisschuleSeibold;

import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import SeniorenDE from "./Senioren.de";
import SeniorenEN from "./Senioren.en";

const Senioren = () => {
  return <LanguageRoute de={SeniorenDE} en={SeniorenEN} />;
};

export default Senioren;

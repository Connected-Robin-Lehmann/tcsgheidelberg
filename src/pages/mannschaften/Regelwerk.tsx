import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import RegelwerkDE from "./Regelwerk.de";
import RegelwerkEN from "./Regelwerk.en";

const Regelwerk = () => {
  return <LanguageRoute de={RegelwerkDE} en={RegelwerkEN} />;
};

export default Regelwerk;

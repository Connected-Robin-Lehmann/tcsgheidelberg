import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import JugendDE from "./Jugend.de";
import JugendEN from "./Jugend.en";

const Jugend = () => {
  return <LanguageRoute de={JugendDE} en={JugendEN} />;
};

export default Jugend;

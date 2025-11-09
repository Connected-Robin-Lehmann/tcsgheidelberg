import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import SatzungDE from "./Satzung.de";
import SatzungEN from "./Satzung.en";

const Satzung = () => {
  return <LanguageRoute de={SatzungDE} en={SatzungEN} />;
};

export default Satzung;

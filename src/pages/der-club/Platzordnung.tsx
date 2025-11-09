import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import PlatzordnungDE from "./Platzordnung.de";
import PlatzordnungEN from "./Platzordnung.en";

const Platzordnung = () => {
  return <LanguageRoute de={PlatzordnungDE} en={PlatzordnungEN} />;
};

export default Platzordnung;

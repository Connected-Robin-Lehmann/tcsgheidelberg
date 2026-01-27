import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import AktiveDE from "./Aktive.de";
import AktiveEN from "./Aktive.en";

const Aktive = () => {
  return <LanguageRoute de={AktiveDE} en={AktiveEN} />;
};

export default Aktive;

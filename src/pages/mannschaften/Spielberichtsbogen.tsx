import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import SpielberichtsbogenDE from "./Spielberichtsbogen.de";
import SpielberichtsbogenEN from "./Spielberichtsbogen.en";

const Spielberichtsbogen = () => {
  return <LanguageRoute de={SpielberichtsbogenDE} en={SpielberichtsbogenEN} />;
};

export default Spielberichtsbogen;

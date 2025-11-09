import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import BeitragsordnungDE from "./Beitragsordnung.de";
import BeitragsordnungEN from "./Beitragsordnung.en";

const Beitragsordnung = () => {
  return <LanguageRoute de={BeitragsordnungDE} en={BeitragsordnungEN} />;
};

export default Beitragsordnung;

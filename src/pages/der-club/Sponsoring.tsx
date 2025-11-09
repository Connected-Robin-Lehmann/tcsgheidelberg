import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import SponsoringDE from "./Sponsoring.de";
import SponsoringEN from "./Sponsoring.en";

const Sponsoring = () => {
  return <LanguageRoute de={SponsoringDE} en={SponsoringEN} />;
};

export default Sponsoring;

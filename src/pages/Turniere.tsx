import React from "react";
import { useTranslation } from "react-i18next";
import TurniereDE from "./Turniere.de";
import TurniereEN from "./Turniere.en";

const Turniere = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en" ? <TurniereEN /> : <TurniereDE />;
};

export default Turniere;

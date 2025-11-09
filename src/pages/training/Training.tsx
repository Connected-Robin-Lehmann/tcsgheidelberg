import React from "react";
import { LanguageRoute } from "@/utils/LanguageRoute";
import TrainingDE from "./Training.de";
import TrainingEN from "./Training.en";

const Training = () => {
  return <LanguageRoute de={TrainingDE} en={TrainingEN} />;
};

export default Training;

import { LanguageRoute } from "@/utils/LanguageRoute";
import FAQDE from "./FAQ.de";
import FAQEN from "./FAQ.en";

const FAQ = () => {
  return <LanguageRoute de={FAQDE} en={FAQEN} />;
};

export default FAQ;

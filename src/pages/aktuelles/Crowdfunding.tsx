import { LanguageRoute } from "@/utils/LanguageRoute";
import CrowdfundingDE from "./Crowdfunding.de";
import CrowdfundingEN from "./Crowdfunding.en";

const Crowdfunding = () => {
  return <LanguageRoute de={CrowdfundingDE} en={CrowdfundingEN} />;
};

export default Crowdfunding;

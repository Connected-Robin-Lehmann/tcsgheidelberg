import { LanguageRoute } from "@/utils/LanguageRoute";
import TiebreakingNewsDE from "./TiebreakingNews.de";
import TiebreakingNewsEN from "./TiebreakingNews.en";

const TiebreakingNews = () => {
  return <LanguageRoute de={TiebreakingNewsDE} en={TiebreakingNewsEN} />;
};

export default TiebreakingNews;

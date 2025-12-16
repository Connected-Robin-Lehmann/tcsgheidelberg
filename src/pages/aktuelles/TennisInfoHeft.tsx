import { LanguageRoute } from '@/utils/LanguageRoute';
import TennisInfoHeftDe from './TennisInfoHeft.de';
import TennisInfoHeftEn from './TennisInfoHeft.en';

const TennisInfoHeft = () => {
  return (
    <LanguageRoute
      de={TennisInfoHeftDe}
      en={TennisInfoHeftEn}
    />
  );
};

export default TennisInfoHeft;

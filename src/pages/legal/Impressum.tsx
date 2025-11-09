import { LanguageRoute } from '@/utils/LanguageRoute';
import ImpressumDE from './Impressum.de';
import ImpressumEN from './Impressum.en';

const Impressum = () => {
  return <LanguageRoute de={ImpressumDE} en={ImpressumEN} />;
};

export default Impressum;

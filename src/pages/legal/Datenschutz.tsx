import { LanguageRoute } from '@/utils/LanguageRoute';
import DatenschutzDE from './Datenschutz.de';
import DatenschutzEN from './Datenschutz.en';

const Datenschutz = () => {
  return <LanguageRoute de={DatenschutzDE} en={DatenschutzEN} />;
};

export default Datenschutz;

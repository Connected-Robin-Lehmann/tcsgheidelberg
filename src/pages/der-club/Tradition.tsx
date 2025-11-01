import { LanguageRoute } from '@/utils/LanguageRoute';
import TraditionDE from './Tradition.de';
import TraditionEN from './Tradition.en';

const Tradition = () => {
  return <LanguageRoute de={TraditionDE} en={TraditionEN} />;
};

export default Tradition;

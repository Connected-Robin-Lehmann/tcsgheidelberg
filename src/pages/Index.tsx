import { LanguageRoute } from '@/utils/LanguageRoute';
import IndexDE from './Index.de';
import IndexEN from './Index.en';

const Index = () => {
  return <LanguageRoute de={IndexDE} en={IndexEN} />;
};

export default Index;

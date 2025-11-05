import React from 'react';
import { LanguageRoute } from '@/utils/LanguageRoute';
import TennisplaetzeDE from './Tennisplaetze.de';
import TennisplaetzeEN from './Tennisplaetze.en';

const Tennisplaetze = () => {
  return <LanguageRoute de={TennisplaetzeDE} en={TennisplaetzeEN} />;
};

export default Tennisplaetze;

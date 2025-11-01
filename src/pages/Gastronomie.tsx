import React from 'react';
import { LanguageRoute } from '@/utils/LanguageRoute';
import GastronomieDE from './Gastronomie.de';
import GastronomieEN from './Gastronomie.en';

const Gastronomie = () => {
  return <LanguageRoute de={GastronomieDE} en={GastronomieEN} />;
};

export default Gastronomie;

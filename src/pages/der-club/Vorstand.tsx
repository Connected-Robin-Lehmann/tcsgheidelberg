import React from 'react';
import { LanguageRoute } from '@/utils/LanguageRoute';
import VorstandDE from './Vorstand.de';
import VorstandEN from './Vorstand.en';

const Vorstand = () => {
  return <LanguageRoute de={VorstandDE} en={VorstandEN} />;
};

export default Vorstand;

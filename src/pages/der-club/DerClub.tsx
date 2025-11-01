import React from 'react';
import { LanguageRoute } from '@/utils/LanguageRoute';
import DerClubDE from './DerClub.de';
import DerClubEN from './DerClub.en';

const DerClub = () => {
  return <LanguageRoute de={DerClubDE} en={DerClubEN} />;
};

export default DerClub;

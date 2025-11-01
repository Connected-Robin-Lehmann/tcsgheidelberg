import { useTranslation } from 'react-i18next';

interface LanguageRouteProps {
  de: React.ComponentType;
  en: React.ComponentType;
}

/**
 * Wrapper component that renders the correct language-specific page
 * based on the current i18n language setting
 */
export const LanguageRoute = ({ de: DeComponent, en: EnComponent }: LanguageRouteProps) => {
  const { i18n } = useTranslation();
  
  // Default to German if language is not explicitly English
  const Component = i18n.language === 'en' ? EnComponent : DeComponent;
  
  return <Component />;
};

import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const LoadingUnloadingPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'loading-unloading')!;
  return <ServicePageTemplate service={service} />;
};

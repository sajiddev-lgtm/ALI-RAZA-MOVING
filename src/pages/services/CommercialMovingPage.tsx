import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const CommercialMovingPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'commercial-moving')!;
  return <ServicePageTemplate service={service} />;
};

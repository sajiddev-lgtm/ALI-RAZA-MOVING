import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const ResidentialMovingPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'residential-moving')!;
  return <ServicePageTemplate service={service} />;
};

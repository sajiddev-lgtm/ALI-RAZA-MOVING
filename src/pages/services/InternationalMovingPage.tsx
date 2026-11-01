import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const InternationalMovingPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'international-moving')!;
  return <ServicePageTemplate service={service} />;
};

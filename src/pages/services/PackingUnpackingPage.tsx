import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const PackingUnpackingPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'packing-unpacking')!;
  return <ServicePageTemplate service={service} />;
};

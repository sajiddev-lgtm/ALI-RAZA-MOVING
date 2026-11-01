import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const OfficeRelocationPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'office-relocation')!;
  return <ServicePageTemplate service={service} />;
};

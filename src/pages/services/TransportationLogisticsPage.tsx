import React from 'react';
import { ServicePageTemplate } from '../../components/services/ServicePageTemplate';
import { SERVICES_CATALOG } from '../../data/servicesData';

export const TransportationLogisticsPage: React.FC = () => {
  const service = SERVICES_CATALOG.find((s) => s.slug === 'transportation-logistics')!;
  return <ServicePageTemplate service={service} />;
};

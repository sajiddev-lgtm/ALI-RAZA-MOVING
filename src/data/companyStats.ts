export interface CompanyStats {
  customerCount: number;
  timePeriod: string;
  label: string;
  rating: number;
  totalReviews: number;
  yearsExperience: number;
  verifiedClaimsNotice: string;
}

export const COMPANY_STATS: CompanyStats = {
  customerCount: 2067,
  timePeriod: 'Last 8 Months',
  label: '2,067+ Customers in the Last 8 Months',
  rating: 4.9,
  totalReviews: 3400,
  yearsExperience: 8,
  verifiedClaimsNotice:
    'Statistic monitored for official verification and periodic MOCIIP compliance updating. Configurable through the corporate admin dashboard.',
};

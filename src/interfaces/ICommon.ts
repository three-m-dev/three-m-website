export interface ICareerListing {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  department: string;
  employmentType: string;
  requirements: string[];
  qualifications: string[];
  startingAt: string;
  compensationType: string;
  benefits: string[];
  status: string;
  applicantCount: number;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
}

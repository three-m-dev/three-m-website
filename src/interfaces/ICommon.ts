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

export interface IAnswers {
  question: string;
  answer: string;
}

export interface IApplicant {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resumeRef: string;
  answers: IAnswers[];
}

export interface IApplication {
  id: string;
  careerListingId: string;
  careerListing: ICareerListing;
  status: string;
  source: string;
  applicant: IApplicant;
  submittedAt: string;
  processedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMessage {
  firstName: string;
  lastName: string;
  company: string;
  phoneNumber: string;
  email: string;
  body: string;
}

export interface IInquiry {
  id: string;
  status: string;
  company: string;
  message: IMessage;
  submittedAt: string;
}

export interface IInquiryDirectory {
  inquiries: IInquiry[];
  count: number;
}

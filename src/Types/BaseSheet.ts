export interface BaseSheetViewModel {
  Name: string;
  Position: string;
  Summary: string;
  Contacts: Array<ContactViewModel>;
  Experience: Array<ExperienceViewModel>;
  Education: Array<EducationViewModel>;
  Projects: Array<ProjectViewModel>;
}

export interface EducationViewModel {
  ID: number;
  From: Date | string;
  Until: Date | string;
  Location: string;
  Institution: string;
  Specialty: string;
  Subjects: string[];
}

export interface ExperienceViewModel {
  ID: number;
  From: Date | string;
  Until: Date | string | null;
  Company: string;
  Location: string;
  Position: string;
  Projects: Array<ExpirienceProjectViewModel>;
}

export interface ExpirienceProjectViewModel {
  ID: number;
  Name: string;
  Description: string;
  Technologies: string[];
}

export interface ProjectViewModel {
  ID: number;
  From: Date | string;
  Until: Date | string;
  Name: string;
  For: string;
  Description: string;
  Technologies: string[];
}

export interface ContactViewModel {
  ID: number;
  Value: string;
  Type: ContactType;
  Icon: string;
  Uri: string;
}

export enum ContactType {
  Mobile = "Mobile",
  Email = "Email",
  LinkedIn = "LinkedIn",
  GitHub = "GitHub"
}

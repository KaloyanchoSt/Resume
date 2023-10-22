import { ContactType, BaseSheetViewModel } from "@/Types/BaseSheet";

/**
 *
 * @returns
 */
export function getBaseSheetDetails(): Promise<BaseSheetViewModel> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Name: "Kaloyan Stefanov",
        Position: "Software Developer",
        Summary:
          "Software developer with thorough hands-on experience in participating in development of application architecture and design, testing, migration, bug fixing and mantaining, drafting functional and technical documentation.",
        Contacts: [
          { ID: 1, Type: ContactType.Mobile, Value: "0896487238", Icon: "mdi-phone", Uri: "tel" },
          { ID: 2, Type: ContactType.Email, Value: "kaloyanchost@gmail.com", Icon: "mdi-email", Uri: "mailto" },
          {
            ID: 3,
            Type: ContactType.LinkedIn,
            Value: "www.linkedin.com/in/kaloyan-stefanov-104566113/",
            Icon: "mdi-linkedin",
            Uri: "https"
          },
          {
            ID: 4,
            Type: ContactType.GitHub,
            Value: "https://github.com/KaloyanchoSt",
            Icon: "mdi-github",
            Uri: "http"
          },
        ],
        Experience: [
          {
            ID: 1,
            From: "01/2017",
            Until: "Present",
            Company: "Ada-soft",
            Position: "Software Developer",
            Location: "Sofia, Bulgaria",
            Projects: [
              {
                ID: 1,
                Name: "CRM",
                Description: "CRM:provides easy access to information from the desktop application EasyCheck, on the Web",
                Technologies: [
                  "Vue.js",
                  "JavaScript",
                  "TypeScript",
                  "CSS",
                  "HTML",
                  ".NET Core",
                  "SQL"
                ],
              },
              {
                ID: 2,
                Name: "CompanyList",
                Description: "CompanyList:search for a company by a unique identification code and return the data as XML",
                Technologies: [
                  "ASP.NET Core",
                  "CSS",
                  "HTML",
                  "SQL"
                ],
              },
              {
                ID: 3,
                Name: "Messaging service",
                Description: "Messaging service:the main function of the module is retrieving emails with the IMAP and POP3 protocols and sending emails with using SMTP. Additional features include scheduling cronjob checking database for waiting emails.Later used as Nuget for CRM",
                Technologies: [
                  ".NET",
                  "SQL"
                ],
              },
            ],
          },
        ],
        Education: [
          {
            ID: 1,
            From: "04/2016",
            Until: "12/2016",
            Institution: "Telerik Academy",
            Specialty: "Software Developer",
            Location: "Sofia, Bulgaria",
            Subjects: [
              "HTML",
              "CSS",
              "JavaScript",
              "C#",
              "Data Structures Algorithms",
              "Web Services",
              "Databases",
            ],
          },
          {
            ID: 2,
            From: "2008",
            Until: "2014",
            Institution: "University of National and World Economy",
            Specialty: "Statistics and Econometrics",
            Location: "Sofia, Bulgaria",
            Subjects: [
              "Mathematics",
              "Informatics",
              "Statistics",
              "Fundamentals of Algorithmization and Programming",
              "Internet Technologies",
              "Computer Networks and Telecommunications",
            ],
          },
          {
            ID: 3,
            From: "2003",
            Until: "2008",
            Institution: "National High School in Finance and Business",
            Specialty: "Management and Economics",
            Location: "Sofia, Bulgaria",
            Subjects: [
              "Participation in a training company on a Bulgarian-Austrian education project"
            ],
          },
        ],
        Projects: [{
          ID: 1,
          From: "04/2016",
          Until: "02/2017",
          Name: "Software Training",
          For: "Telerik Academy",
          Description: "https://github.com/KaloyanchoSt/Telerik-Academy-HW On this github, you can find all my homework and team projects from my training at Telerik Academy in April 2016–2017",
          Technologies: [
            "JavaScript",
            "CSS",
            "HTML",
            ".NET",
            "SQL"
          ],
        },
        {
          ID: 2,
          From: "01/2008",
          Until: "06/2008",
          Name: "Static webpage",
          For: "National High School in Finance and Business",
          Description: "Building and maintaining webpage containing the products and services for my high school training firm",
          Technologies: [
            "JavaScript",
            "CSS",
            "HTML",
            "Photoshop"
          ]
        },
        {
          ID: 3,
          From: "2006",
          Until: "2008",
          Name: "Static webpage",
          For: "Personal",
          Description: "Web page designed with Photoshop, implemented scripts for news feed and latest forum posts. Also includes redesigned and modified phpBB forum ",
          Technologies: [
            "JavaScript",
            "CSS",
            "HTML",
            "Photoshop",
            "SQL"
          ]
        }],
      });
    }, 2000)
  });
}

/**
 *
 * @returns
 */
export function getEmptyBaseSheetViewModel(): BaseSheetViewModel {
  return {
    Name: "",
    Summary: "",
    Position: "",
    Contacts: [],
    Experience: [],
    Education: [],
    Projects: [],
  };
}

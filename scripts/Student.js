export class Student {
  constructor(
    fullName,
    profName,
    emailAdresse = "studentemail@gmail.com",
    phoneNumber = "0676842067",
    studentID = "2002010",
  ) {
    this.fullName = fullName;
    this.profName = profName;
    this.emailAdresse = emailAdresse;
    this.phoneNumber = phoneNumber;
    this.studentID = studentID;
  }

  getGroupLink() {
    return "https://web.telegram.org/a/";
  }
}

export class Student {
  constructor(
    fullName,
    profName,
    emailAdresse = "studentemail@gmail.com",
    phoneNumber = "0676842067",
  ) {
    this.fullName = fullName;
    this.profName = profName;
    this.emailAdresse = emailAdresse;
    this.phoneNumber = phoneNumber;
  }

  get_group_adresse() {
    return "htttps://telegram.test.com";
  }
}

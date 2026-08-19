export class Student {
  constructor({
    full_name,
    name_prof,
    email_adresse = "studentemail@gmail.com",
    phone_number = "0676842067",
  } = {}) {
    this.full_name = full_name;
    this.name_prof = name_prof;
    this.email_adresse = email_adresse;
    this.phone_number = phone_number;
  }

  get_group_adresse() {
    return "htttps://telegram.test.com";
  }
}

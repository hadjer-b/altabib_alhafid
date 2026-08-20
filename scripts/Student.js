import { normalizeArbString } from "./search_engine.js";

export class Student {
  constructor(
    fullName,
    profName,
    emailAdresse = "studentemail@gmail.com",
    phoneNumber = "0676842067",
    studentID = "2002010",
  ) {
    this.fullName = this.fixQaaFontBug(fullName);
    this.profName = this.fixQaaFontBug(profName);
    this.emailAdresse = emailAdresse;
    this.phoneNumber = phoneNumber;
    this.studentID = studentID;
  }

  fixQaaFontBug(text) {
    if (!text) return "";
    return text.replace(/ڨ/g, "ڤ");
  }

  getGroupLink() {
    return "https://web.telegram.org/a/";
  }
}

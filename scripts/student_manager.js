import { fetchAndParseCSV } from "./csv_parser.js";
import { Student } from "./Student.js";
import { searchNameMatch } from "./search_engine.js";

export let studentInstances = [];

async function init() {
  const dict = await fetchAndParseCSV();
  console.log(dict);

  for (const [prof, studentList] of Object.entries(dict)) {
    for (const studentName of studentList) {
      studentInstances.push(new Student(studentName, prof));
    }
  }

  connectSearchEvents();
  // renderStudentList(studentInstances);
}

function connectSearchEvents() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = searchInput.value;
    const foundStudents = searchNameMatch(searchQuery, studentInstances);

    renderStudentList(foundStudents);
  });
}

function renderStudentList(studentList) {
  console.log(studentList);
  const nameContainer = document.getElementById("name-list-container");
  if (!nameContainer) return;

  let searchCardOuput = "";

  const searchNotFound = `<div class="name-card basic-card">
    <div class="student-info-container error-color">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <div class="info-content">
        <h3>الاسم المُدخل غير موجود</h3>
      </div>
    </div>
    <div class="student-info-container">
      <i class="fa-brands fa-telegram"></i>
      <div class="info-content">
        <a href="https://web.telegram.org/a/">اتصل بنا للحصول على المساعدة</a>
      </div>
    </div>
  </div>`;

  if (studentList.length === 0) {
    searchCardOuput = searchNotFound;
  } else {
    searchCardOuput = studentList
      .map(
        (s) => `
      <div class="name-card basic-card">
        <div class="name-container">
          <span class="masked-icon logo-profile"></span>
          <h3>${s.fullName}</h3>
        </div>
        <div class="student-info-container">
          <i class="fa-solid fa-id-card"></i>
          <div class="info-content">
            <h3>رقم التعريف الشخصي </h3>
            <h4>${s.studentID}</h4>
          </div>
        </div>
        <div class="student-info-container">
          <i class="fa-solid fa-chalkboard-user"></i>
          <div class="info-content">
            <h3>اسم الاستاذة </h3>
          <h4>${s.profName}</h4>
          </div>
        </div>
        <div class="student-info-container">
          <i id="telegram-logo" class="fa-brands fa-telegram"></i>
          <div class="info-content">
            <a href=${s.getGroupLink()}>رابط مجموعة الأستاذة</a>
          </div>
        </div>

        <div class="id-num-notice">
        <div class="student-info-container">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div class="info-content">
            <h4>يرجى الاحتفاظ برقم التعريف الشخصي</h4>
          </div>
        </div>
      </div>
      </div>
  `,
      )
      .join("");
  }

  nameContainer.innerHTML = searchCardOuput;
}

init();

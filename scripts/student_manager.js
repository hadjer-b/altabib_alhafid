import { fetchAndParseCSV } from "./csv_parser.js";
import { Student } from "./Student.js";

async function init() {
  const dict = await fetchAndParseCSV();
  console.log(dict);

  const studentInstances = [];
  for (const [prof, studentList] of Object.entries(dict)) {
    for (const studentName of studentList) {
      studentInstances.push(new Student(studentName, prof));
    }
  }

  renderStudentList(studentInstances);
}

function renderStudentList(studentList) {
  console.log(studentList);
  const nameContainer = document.getElementById("name-list-container");
  if (!nameContainer) return;

  const studentCard = studentList
    .map(
      (s) => `
        <div class="name-card basic-card">
          <h3>${s.fullName}</h3>
          <h2>${s.profName}</h2>
        </div>
  `,
    )
    .join("");
  nameContainer.innerHTML = studentCard;
}

init();

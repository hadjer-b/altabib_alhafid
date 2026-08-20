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

  // renderStudentList(studentInstances);
}

function renderStudentList(studentList) {
  console.log(studentList);
  const nameContainer = document.getElementById("name-list-container");
  if (!nameContainer) return;

  const studentCard = studentList
    .map(
      (s) => `
               <div class="name-card basic-card">
          <div class="name-container">
            <span class="masked-icon logo-profile"></span>
            <h4>${s.fullName} ${s.profName}</h4>
          </div>
          <button class="btn-primary shared-filter">More</button>
        </div>
  `,
    )
    .join("");
  nameContainer.innerHTML = studentCard;
}

init();

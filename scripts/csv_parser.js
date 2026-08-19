const filePath = "assets/sheets/prof_students_list.csv";

async function fetchAndParseCSV() {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const fileContent = await response.text();
    const parsedData = parseCSV(fileContent);
    return organizeParsedData(parsedData);
  } catch (error) {
    console.error("Failed to fetch CSV:", error);
  }
}

function parseCSV(text) {
  return text
    .split("\n")
    .filter((row) => row.trim())
    .map((row) => row.split(","));
}

function organizeParsedData(parsedData) {
  let prof_name = "";
  let student_prof_dict = {};
  console.log(parsedData);
  const rows = parsedData.slice(1);

  for (const parsedLine of rows) {
    const prof = parsedLine[0];
    const student = parsedLine[1];

    if (prof && prof.trim() !== "") {
      prof_name = prof;
    }

    if (!student_prof_dict[prof_name]) {
      student_prof_dict[prof_name] = [];
    }

    if (student) {
      student_prof_dict[prof_name].push(student);
    }
  }
}

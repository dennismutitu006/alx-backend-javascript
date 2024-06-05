interface Student {
  firstName: string,
  lastName: string,
  age: Number,
  location: string
}

const student1: Student = {
  firstName: "Dennis",
  lastName: "Wachira",
  age: 23,
  location: "Kenya"
}

const student2: Student = {
  firstName: "Claudia",
  lastName: "Muthoni",
  age: 18,
  location: "Kenya"
}

const studentsList: Array<Student> = [ student1, student2 ];

// Render a table and append rows using Vanilla JavaScript
const body = document.querySelector('body');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append each student to the table
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
body?.appendChild(table);

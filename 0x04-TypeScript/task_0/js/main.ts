// Interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
  
// Define two students
const student1: Student = {
  firstName: "John",
  lastName: "Kimani",
  age: 20,
  location: "New York"
};
  
const student2: Student = {
  firstName: "Jane",
  lastName: "Njeri",
  age: 22,
  location: "Los Angeles"
};
  
// Array containing the two students
const studentsList: Student[] = [student1, student2];
  
// Function to create a table and render the student information
function renderTable(students: Student[]) {
  const table = document.createElement("table");
    
  students.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
  
  document.body.appendChild(table);
}
  
  // Render the table with student information
  renderTable(studentsList);
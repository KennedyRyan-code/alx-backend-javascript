const fs = require('fs');

// Define function 'countStudents'

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    

    // Split the data into rows & remove empty lines
    const rows = data.split('\n').filter((row) => row);

    // find index of field & firstName in csv
    const headers = rows.shift().split(',');
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');

    // retrieve only the fields
    const fields = [...new set(rows.map((row) => row.split(',')[fieldIndex]))];

    console.log(`Number of students: ${rows.length}`);

    fields.forEach((field) => {
    // split rows & retrieve field
    const student = rows.filter((row) => row.split(',')[fieldIndex] === field);
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.map((student) => student.split(',')[firstNameIndex]).join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

export default function createIteratorObject(report) {
  let allEmployees = [];

  // Extracting all the employees from the report
  for (const employeesArray of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...employeesArray];
  }

  let index = 0;

  const iterator = {
    next: function () {
      return index < allEmployees.length
        ? { value: allEmployees[index++], done: false }
        : { done: true };
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };

  return iterator;
}

// Interface for Teacher
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Index signature allowing other attributes
}
   
  // Interface for Directors extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
// Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementation of the printTeacher function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedName = `${firstInitial}. ${lastName}`;
    return formattedName;
  };

  // Interface describing the constructor and methods of StudentClass
interface StudentInterface {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // StudentClass implementing StudentClassInterface
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student = new StudentClass('John', 'Doe');
  console.log(student.workOnHomework()); // Output: Currently working
  console.log(student.displayName()); // Output: John
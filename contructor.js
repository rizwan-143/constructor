// Task Details:
// Book naam ki ek class banao.

// Constructor me ye properties set karo:

// title (book ka naam)

// author (likhne wala)

// year (publish hone ka saal)

// Ek function getSummary() likho jo book ki details return kare.

// Class ka ek object banao aur uski details console pe print karo.

// Bonus Challenge: Ek aur method isOldBook() likho jo check kare ke book 20 saal purani hai ya nahi. Agar purani ho to "Ye ek purani kitaab hai" print kare, warna "Ye ek nayi kitaab hai" print kare.


//  class book{
//     constructor(bookName , bookAuthor , publishYear){
//         this.bookName = bookName,
//         this.bookAuthor = bookAuthor,
//         this.publishYear = publishYear
//     }
//     display(){
//         console.log(`this book name is ${this.bookName} the book author is ${this.bookAuthor} and the pulish year is ${this.publishYear}`);

//     }
//  }


//   const bookUrdu = new book("urdu" , "rizwan" , 2025);

//   bookUrdu.display();


// Task Details:
// Car naam ki ek class banao.

// Constructor ke andar ye properties set karo:

// brand (Car ka brand, jaise Toyota, Honda)

// model (Car ka model, jaise Civic, Corolla)

// year (Manufacturing year)

// mileage (Kitna chali hai, kilometers me)

// Ek method getDetails() likho jo car ki details return kare.

// Ek method checkOldCar() likho jo check kare ke car 10 saal purani hai ya nahi.

// Ek object banao aur uski details console pe print karo.

// 🚀 Bonus Challenge:
// Ek aur method drive(km) likho jo mileage ko update kare (jitne km chalai utne add ho jayein).


//  class Car {
//     constructor (carBrand, carModal, publishYear , carDistance){

//         this.carBrand = carBrand,
//         this.carModal = carModal,
//         this.publishYear = publishYear,
//         this.carDistance = carDistance

//     }


//     getDetails(){
//         console.log(`the car brand is ${this.carBrand} , car modal is ${this.carModal} , car manufacturing year is ${this.publishYear} , distance covered by car is ${this.carDistance}`);
        
//     }

//     checkOldCar() {
//         const currentYear = new Date().getFullYear();
//         return (currentYear - this.year >= 10) ? "Ye ek purani car hai." : "Ye ek nayi car hai.";
//     }

//  }



//  const car1 = new Car (" toyoa" , "civic" , 2002 , 150000);
//  car1.getDetails();
//  car1.checkOldCar();


// const currentDate = new Date().getFullYear();

// console.log(currentDate);


// const now = new Date();

// console.log(now.toDateString());  // Simple date format (Sat Mar 22 2025)
// console.log(now.toTimeString());  // Time format (14:30:00 GMT+0500)
// console.log(now.toLocaleDateString()); // Local format (3/22/2025)
// console.log(now.toLocaleTimeString()); // Local time (2:30:00 PM)
// console.log(now.toISOString());   // ISO format (2025-03-22T09:30:00.000Z)
// console.log(now.toUTCString());   // UTC format (Sat, 22 Mar 2025 09:30:00 GMT)



// Task: Student Management System
// Requirements:
// Ek Student constructor function banayein jismein har student ke liye yeh properties hon:

// name (student ka naam)

// age (student ki umar)

// grade (student ka grade, jaise "A", "B", "C", etc.)

// rollNumber (student ka unique roll number)

// Har student object mein ek method displayDetails add karein jo student ki details ko console par display kare.

// Ek array studentsList banayein jismein multiple student objects store karein.

// Ek function addStudent banayein jo ek naya student object create karke use studentsList array mein add kare.

// Ek function findStudentByRollNumber banayein jo ek specific roll number ke hisab se student ko dhundhe aur uski details display kare.

// Ek function updateStudentGrade banayein jo kisi student ka grade update kare based on roll number.

// Ek function displayAllStudents banayein jo studentsList mein sare students ki details display kare.''


function Students(studentName, studentAge , studentGrade , studentRollNo){

    this.studentName = studentName, 
    this.studentAge = studentAge, 
    this.studentGrade = studentGrade,
    this.studentRollNo = studentRollNo
}


Students.prototype.displayDetails = function(){
    console.log(`student name : ${this.studentName} , student age : ${this.studentAge} , student grade : ${this.studentGrade} , student rollno : ${this.studentRollNo}`);
    
}


let studentsList = [];


Students.prototype.addStudent = function(studentName , studentAge, studentGrade , studentRollNo){
    let newStudent = new Students(studentName , studentAge , studentGrade , studentRollNo);
    studentsList.push(newStudent);
    console.log(`student ${this.studentName} added`);
    
}


function findStudentByRollNo(studentRollNo){
    let student = studentsList.find( student => student.studentRollNo === studentRollNo );
    if(student){
        console.log("student found with roll no " , studentRollNo);
        student1.displayDetails();
        
    }else{
        console.log("student not found with roll no " , studentRollNo);
        
    }
}

const student1 = new  Students ("rizwan " , 23 , "A" , 220516);
// student1.displayDetails();
student1.addStudent();
findStudentByRollNo(220518);











// student1.displayDetails();

// const studetn2 = new Students("khan" , 22 , "B" , 220454);

// studetn2.displayDetails();



// // Student constructor function
// function Student(name, age, grade, rollNumber) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//     this.rollNumber = rollNumber;

//     // Method to display student details
//     this.displayDetails = function() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Roll Number: ${this.rollNumber}`);
//     };
// }

// // Array to store all students
// let studentsList = [];

// // Function to add a new student
// function addStudent(name, age, grade, rollNumber) {
//     const newStudent = new Student(name, age, grade, rollNumber);
//     studentsList.push(newStudent);
//     console.log(`Student ${name} added successfully!`);
// }

// // Function to find a student by roll number
// function findStudentByRollNumber(rollNumber) {
//     const student = studentsList.find(student => student.rollNumber === rollNumber);
//     if (student) {
//         console.log("Student found:");
//         student.displayDetails();
//     } else {
//         console.log(`Student with roll number ${rollNumber} not found.`);
//     }
// }

// // Function to update a student's grade
// function updateStudentGrade(rollNumber, newGrade) {
//     const student = studentsList.find(student => student.rollNumber === rollNumber);
//     if (student) {
//         student.grade = newGrade;
//         console.log(`Grade updated for student ${student.name}. New grade: ${newGrade}`);
//     } else {
//         console.log(`Student with roll number ${rollNumber} not found.`);
//     }
// }

// // Function to display all students
// function displayAllStudents() {
//     console.log("List of all students:");
//     studentsList.forEach(student => student.displayDetails());
// }

// // Test the functions
// addStudent("Ali", 20, "A", 101);
// addStudent("Bilal", 22, "B", 102);
// addStudent("Chaudhry", 21, "C", 103);

// displayAllStudents();

// findStudentByRollNumber(102);

// updateStudentGrade(102, "A+");
// findStudentByRollNumber(102);







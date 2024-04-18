const utme2024Students = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    score: 85,
    regNumber: "STU001",
    state: "California",
    city: "Los Angeles",
    gender: "Male",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    score: 92,
    regNumber: "STU002",
    state: "New York",
    city: "New York City",
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    email: "michaeljohnson@example.com",
    score: 78,
    regNumber: "STU003",
    state: "Texas",
    city: "Houston",
    gender: "Male",
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    email: "emilybrown@example.com",
    score: 88,
    regNumber: "STU004",
    state: "Florida",
    city: "Miami",
    gender: "Female",
  },
  {
    firstName: "William",
    lastName: "Martinez",
    email: "williammartinez@example.com",
    score: 79,
    regNumber: "STU005",
    state: "California",
    city: "San Francisco",
    gender: "Male",
  },
  {
    firstName: "Emma",
    lastName: "Taylor",
    email: "emmataylor@example.com",
    score: 95,
    regNumber: "STU006",
    state: "Illinois",
    city: "Chicago",
    gender: "Female",
  },
  {
    firstName: "Alexander",
    lastName: "Anderson",
    email: "alexanderanderson@example.com",
    score: 82,
    regNumber: "STU007",
    state: "Texas",
    city: "Dallas",
    gender: "Male",
  },
  {
    firstName: "Olivia",
    lastName: "Wilson",
    email: "oliviawilson@example.com",
    score: 90,
    regNumber: "STU008",
    state: "Florida",
    city: "Orlando",
    gender: "Female",
  },
  {
    firstName: "Daniel",
    lastName: "Thomas",
    email: "danielthomas@example.com",
    score: 85,
    regNumber: "STU009",
    state: "California",
    city: "San Diego",
    gender: "Male",
  },
  {
    firstName: "Sophia",
    lastName: "Garcia",
    email: "sophiagarcia@example.com",
    score: 91,
    regNumber: "STU010",
    state: "New York",
    city: "Buffalo",
    gender: "Female",
  },
  {
    firstName: "Matthew",
    lastName: "Rodriguez",
    email: "matthewrodriguez@example.com",
    score: 84,
    regNumber: "STU011",
    state: "Texas",
    city: "Austin",
    gender: "Male",
  },
  {
    firstName: "Ava",
    lastName: "Hernandez",
    email: "avahernandez@example.com",
    score: 93,
    regNumber: "STU012",
    state: "Florida",
    city: "Tampa",
    gender: "Female",
  },
  {
    firstName: "Ethan",
    lastName: "Lopez",
    email: "ethanlopez@example.com",
    score: 87,
    regNumber: "STU013",
    state: "California",
    city: "Sacramento",
    gender: "Male",
  },
  {
    firstName: "Mia",
    lastName: "Perez",
    email: "miaperez@example.com",
    score: 89,
    regNumber: "STU014",
    state: "New York",
    city: "Rochester",
    gender: "Female",
  },
  {
    firstName: "James",
    lastName: "Gonzalez",
    email: "jamesgonzalez@example.com",
    score: 81,
    regNumber: "STU015",
    state: "Texas",
    city: "San Antonio",
    gender: "Male",
  },
];

const studentFromCalifornia = utme2024Students.filter(
  (students) => students.state === "California"
);

console.log(studentFromCalifornia);

const femaleStudents = utme2024Students.filter(
  (students) => students.gender === "Female"
);

console.log(femaleStudents);

const allStudents = utme2024Students.map((students) => ({
  firstName: students.firstName,
  score: students.score,
}));

console.log(allStudents)

const totalScore = utme2024Students.reduce((acc, students) => acc + students.score, 0);
const averageScore = totalScore / utme2024Students.length;


console.log(averageScore)
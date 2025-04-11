class getSubjectsStatistics extends students{
    constructor(name, avarage){
        this.name = name;
        this.avarage = avarage;
    }
    getinfo(){
        console.log(`name:${this.name},avarage: ${this.avarage}`);
    }
}
class getHighAchievers extends students{
    constructor(students,gradeThreshold){
        this.students = students;
        this.gradeThreshold = gradeThreshold;
    }
    getinfo(){
         if avarage > gradeThreshold;
        console.log(`name:${this.name}`);
    }
}
class getHighAchievers extends students{
    constructor(students,gradeThreshold){
        this.students = students;
        this.gradeThreshold = gradeThreshold;
    }
    getinfo(){
         if avarage > gradeThreshold; && if avarage[i+1] >  gradeThreshold[i+1];
        console.log(`name:${this.name}`);
    }
}
const students = [
    {
      firstName: "George",
      lastName: "Smith",
      grades: {
        math: 85,
        history: 92,
        physics: 78,
      },
    },
    {
      firstName: "Anna",
      lastName: "Johnson",
      grades: {
        math: 91,
        history: 84,
        physics: 90,
      },
    },
    {
      firstName: "Nick",
      lastName: "Williams",
      grades: {
        math: 72,
        history: 81,
        physics: 65,
      },
    },
    {
      firstName: "Mary",
      lastName: "Brown",
      grades: {
        math: 95,
        history: 88,
        physics: 93,
      },
    },
    {
      firstName: "David",
      lastName: "Miller",
      grades: {
        math: 78,
        history: 85,
        physics: 71,
      },
    },
    {
      firstName: "Emma",
      lastName: "Davis",
      grades: {
        math: 89,
        history: 92,
        physics: 84,
      },
    },
    {
      firstName: "Michael",
      lastName: "Wilson",
      grades: {
        math: 62,
        history: 71,
        physics: 68,
      },
    },
    {
      firstName: "Olivia",
      lastName: "Taylor",
      grades: {
        math: 93,
        history: 89,
        physics: 91,
      },
    },
    {
      firstName: "James",
      lastName: "Anderson",
      grades: {
        math: 75,
        history: 80,
        physics: 73,
      },
    },
    {
      firstName: "Sophia",
      lastName: "Thomas",
      grades: {
        math: 88,
        history: 91,
        physics: 86,
      },
    },
    {
      firstName: "William",
      lastName: "Jackson",
      grades: {
        math: 77,
        history: 68,
        physics: 74,
      },
    },
    {
      firstName: "Ava",
      lastName: "White",
      grades: {
        math: 83,
        history: 87,
        physics: 79,
      },
    },
    {
      firstName: "Benjamin",
      lastName: "Harris",
      grades: {
        math: 97,
        history: 94,
        physics: 95,
      },
    },
    {
      firstName: "Charlotte",
      lastName: "Martin",
      grades: {
        math: 84,
        history: 81,
        physics: 88,
      },
    },
    {
      firstName: "Daniel",
      lastName: "Thompson",
      grades: {
        math: 76,
        history: 73,
        physics: 82,
      },
    },
  ];
  
  function getSubjectsStatistics(students) {
    // თქვენი კოდი აქ
  }
  
  function getHighAchievers(students, gradeThreshold) {
    // თქვენი კოდი აქ
  }
  
  function getMultiAchivers(students, threshold) {
    // თქვენი კოდი აქ
  }
  
  // ტესტები
  console.log(getSubjectsStatistics(students));
  
  console.log(getHighAchievers(students, 85));
  
  console.log(getMultiAchivers(students, 80));
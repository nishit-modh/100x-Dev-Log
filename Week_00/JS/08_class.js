class Student {
  constructor(rollNo, name, marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.marks = marks;
  }
  speaks(language) {
    console.log(`${this.name} speaks ${language}`);
  }
  static species() {
    console.log("Human");
  }
}

const stu12 = new Student(12, "Mike", 68);
console.log(stu12);
stu12.speaks("German");

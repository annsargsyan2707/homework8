class UniversityMember {
  constructor(name, age, role, energy = 24) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.energy = 24;
  }
  info() {
    return `${this.name}  ${this.age}  is a ${this.role} with ${this.energy} energy. `;
  }
}
class Teacher extends UniversityMember {
  constructor(name, age, role = "Teacher") {
    super(name, age, "Teacher");
  }
}
class Student extends UniversityMember {
  constructor(name, age) {
    super(name, age, "Student");
  }
}
class University {
  constructor() {
    this.teachers = [];
    this.students = [];
  }
  addMember(member) {
    if (member instanceof Teacher) {
      this.teachers.push(member);
    } else this.students = [...this.students, member];
  }
  removeMember(member) {
    if (member instanceof Teacher) {
      let target = this.teachers.indexOf(member);
      if (target !== -1) this.teachers.splice(target, 1);
    } else {
      let target = this.students.indexOf(member);
      if (target !== -1) this.students.splice(target, 1);
    }
  }
  startLesson() {
    this.students.forEach((student) => {
      student.energy -= 2;
    });
    this.teachers.forEach((teacher) => {
      teacher.energy -= 5;
    });
  }
}

let univer = new University();
const teacher = new Teacher("Hayk", 35);
const student = new Student("Jon", 20);
univer.addMember(teacher);
console.log(univer.teachers);
console.log(teacher.info());
univer.addMember(student);
console.log(student.info());
//univer.removeMember(teacher);
univer.startLesson();
console.log(teacher.info());
console.log(univer.teachers);

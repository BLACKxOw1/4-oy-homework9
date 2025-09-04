

// //                                Constructor1

// function Animal(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
// }

// Animal.prototype.info = function () {
//   return `Nomi: ${this.name}, Tezligi: ${this.speed} km/soat, Umr chegarasi: ${this.limitAge} yil`;
// };

// const sher = new Animal("Sher", 80, 20);
// const tulki = new Animal("Tulki", 60, 15);

// console.log(sher.info());
// console.log(tulki.info());


// //                                Constructor2

// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
// }

// Student.prototype.leftYears = function () {
//   let result = this.years - this.course
//   return `Hozirgi o'qiyotgan kursi: ${this.course}  Necha yil qolgan: ${result}`;
// };

// const student1 = new Student("Alisher", 1, 6, 'Harvard Medical School');
// const student2 = new Student("Samir", 3, 4, 'SAMDTU');

// console.log(student1.leftYears());
// console.log(student2.leftYears());


// //                                Constructor3

// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;
// }

// Person.prototype.getBirthYear = function () {
//   let result = this.currentYear - this.age
//   return `${this.name} ning tug'ilgan yili ${result}`;
// };

// const person1 = new Person("Alisher", 34, 2025);
// const person2 = new Person("Samir", 16, 2025);

// console.log(person1.getBirthYear());
// console.log(person2.getBirthYear());


// //                                Constructor4

// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
// }

// Employee.prototype.increaseSalary = function (percent) {
//   this.salary = this.salary + (this.salary * percent / 100);
//   return `${this.name} ning protcentga oshish natijasida hosil bo'lgan oyligi: ${this.salary}`;
// };


// const person1 = new Employee("Alisher", 5000, 'Dasturchi');
// const person2 = new Employee("Samir", 2400, 'Doctor');

// console.log(person1.increaseSalary(5));
// console.log(person2.increaseSalary(15));


// //                                Constructor5

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.getArea = function () {
//   let result = this.width * this.height
//   return `To'rtburchak yuzasi: ${result}`;
// };

// Rectangle.prototype.getPerimetr = function () {
//   let result = (this.width + this.height) * 2
//   return `To'rtburchak perimetri: ${result}`;
// };

// const a = new Rectangle(7, 5);

// console.log(a.getArea());
// console.log(a.getPerimetr());
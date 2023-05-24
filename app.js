'use strict';

let lastId = 1000;
const tax = 0.075;
const arrayEmp = [];


function RandSalary(level) {
    let salary
    salary = MinSalary(level) + LessThan500();

    //calculate the net salary
    salary = Math.floor(salary - tax * salary);
    return salary;
}


function LessThan500() {
    //generat random numnber less than 500
    return Math.floor((Math.random() * 500) + 1);
}


function MinSalary(level) {
    //return minimum salary
    if (level == "Senior") return 1500;
    else if (level == "MidSenior") return 1000;
    return 500;
}




function Employee(fullName, department, level, img) {

    this.id = "0",
        this.fullName = fullName,
        this.department = department,
        this.level = level,
        this.image = img,
        this.salary = RandSalary(level),
        this.uniqueId = function () {
            this.id = lastId++;
        },
        this.RandSalary = function () {

            this.salary = MinSalary(this.level) + LessThan500();

            //calculate the net salary
            this.salary = Math.floor(this.salary - tax * this.salary);
        };
    this.RandSalary();
    this.uniqueId();
    arrayEmp.push(this);
}

let Ghazi = new Employee("Ghazi Samer", "Administration", "Senior", "/");
let Lana = new Employee("Lana Ali", "Finance", "Senior");
let Tamara = new Employee("Tamara Ayoub", "Administration", "Senior", "/");
let Safi = new Employee("Safi Walid", "Development", "MidSenior", "/");
let Rana = new Employee("Rana Saleh", "Development", "junior", "/");
let Hadi = new Employee("Hadi Ahmad", "Finance", "MidSenior", "/");
console.log(arrayEmp);
Employee.prototype.renderEmployee = function () {
    document.write(`<p> Employee Name: ${this.fullName} </p>`);
    document.write(`<p> Department: ${this.department}</p>`)
    document.write(`<p> Employee salary: ${this.salary}</p><br></br>`)
}

for (let i = 0; i < arrayEmp.length; i++) {
    arrayEmp[i].renderEmployee();
}

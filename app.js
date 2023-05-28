'use strict';

let lastId = 1000;
const tax = 0.075;
const arrayAdmin = [];
const Marketing = [];
const Development = [];
const Finance = [];




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

    this.id = 1000,
        this.fullName = fullName,
        this.department = department,
        this.level = level,
        this.image = img,
        this.salary = 1000,
        this.uniqueId = function () {
            this.id = lastId++;
        },

        this.RandSalary = function () {
            this.salary = MinSalary(this.level) + LessThan500();

            //calculate the net salary
            this.salary = Math.floor(this.salary - tax * this.salary);
        }

    this.uniqueId();
    this.RandSalary();


    if (department == "Administration") arrayAdmin.push(this);
    if (department == "Finance") Finance.push(this);
    if (department == "Development") Development.push(this);
    if (department == "Marketing") Marketing.push(this);

}

let Ghazi = new Employee("Ghazi Samer", "Administration", "Senior", "assets/Ghazi.png");
let Tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.png");
let Lana = new Employee("Lana Ali", "Finance", "Senior", "assets/Lana.png");
let Hadi = new Employee("Hadi Ahmad", "Finance", "MidSenior", "assets/Hadi.png");
let Safi = new Employee("Safi Walid", "Development", "MidSenior", "assets/Safi.png");
let Omar = new Employee("Omar Zaid", "Development", "Senior", "assets/Omar.png");
let Rana = new Employee("Rana Saleh", "Development", "junior", "assets/Rana.png");
const section = document.getElementById("section");


RenderEmployee(arrayAdmin, "Administration");
RenderEmployee(Marketing, "Marketing");
RenderEmployee(Finance, "Finance");
RenderEmployee(Development, "Development");




function RenderEmployee(arr, name) {

    const sectionName = document.createElement("h1");
    sectionName.classList.add("sectionText")
    sectionName.textContent = ` ${name}`;
    section.appendChild(sectionName);
    const cardList = document.createElement("div");
    arr.forEach(elm => {

        const newCard = document.createElement("div");
        const image = document.createElement("img");
        const newtext1 = document.createElement("h1");
        const newtext2 = document.createElement("h1");
        const newtext3 = document.createElement("h1");

        //class add
        cardList.classList.add('card-list');
        newCard.classList.add('card');
        //class add

        image.setAttribute('src', `${elm.image}`)
        newtext1.textContent = `Name: ${elm.fullName} - ID: ${elm.id}`;
        newtext2.textContent = `Department: ${elm.department} - Level: ${elm.level}`;
        newtext3.textContent = `${elm.salary} $`;


        ///appending time ^_^   ////
        newCard.appendChild(image);
        newCard.appendChild(newtext1);
        newCard.appendChild(newtext2);
        newCard.appendChild(newtext3);
        cardList.appendChild(newCard);
        ///appending time ^_^   ////

    });
    section.appendChild(cardList);
}


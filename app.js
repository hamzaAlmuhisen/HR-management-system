'use strict';

//to kick out the first id 
let globalId = Math.floor(Math.random() * (1000)) + 1000;
//to kick out the first id 


const avgSalary = [{
    level: "Senior",
    min: 1500,
    max: 2000,
},
{
    level: "MidSenior",
    min: 1000,
    max: 1500,
},
{
    level: "Junior",
    min: 500,
    max: 1000
}
];
const tax = 0.075;

function less500() {
    return Math.floor((Math.random() * 500) + 1);
}

let Ghazi = {
    id: "1000",
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "MidSenior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();

    }
}

let Lana = {
    id: "1001",
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "MidSenior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();
    }
}

let Tamara = {
    id: "1002",
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "MidSenior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();
    }
}

let Safi = {
    id: "1003",
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    image: "",
    salary: 1000,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "MidSenior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();
    }
}

let Omar = {
    id: "1004",
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    image: "",
    salary: 1500,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "MidSenior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();
    }
}

let Rana = {
    id: "1005",
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    image: "",
    salary: 500,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "MidSenior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();
    }
}

let Hadi = {
    id: "1006",
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    image: "",
    salary: 1000,
    uniqueId: function () {
        globalId++;
        this.id =  globalId;
    },
    RandSalary: function () {
        if (this.level == "Senior") this.salary = avgSalary[0].min + less500();
        else if (this.level == "Mid-Senior") this.salary = avgSalary[1].min + less500();
        else this.salary = avgSalary[2].min + less500();
    }
}


const arrayEmp = [Ghazi, Lana, Tamara, Safi, Omar, Rana, Hadi]


for(let i=0; i<4;i++){
    

    arrayEmp.forEach(emp => {

        console.log(emp.id)
        emp.uniqueId();
    })

    console.log("new id for users (maxmum unique id can be hold 10000 user)")

}


function randerEmployees(arrEmp) {
    let text = "";

    arrEmp.forEach(emp => {
        emp.uniqueId();
        emp.RandSalary();
        text = text + `
     <tr>
        <td>
            <h2>Employee Name: ${emp.fullName}</h2>
            <h2>Employee salary: ${emp.salary - tax * emp.salary} $</h2>
        </td>
    </tr>
        `;
    });

    return `
    <table class="mt-76">
    <thead>
     <tr> </tr>
    </thead>
    <tbody>
    ${text}
    </tbody>
    </table>`
}


document.write(randerEmployees(arrayEmp));

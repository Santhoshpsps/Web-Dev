const name = "Santhosh";
const age = 23;

const hello = `My name is ${name} and i'm ${age} years old`;
const lorem = "   fly me   to   the moon  ";

// console.log(hello);
filteredData = lorem.split(" ");
arr = filteredData.filter((n) => n);

// console.log(arr.length);

let fact = 1;
let n = 5;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}

// console.log(fact);

const logs = [
  {
    id: 1,
    type: "INFO",
    desc: "INFO :: Application starting in App Server AP02",
    logpath: "/mnt/abc/app.log",
    trace: true,
  },
  {
    id: 2,
    type: "WARN",
    desc: "WARN :: System Capacity at 80% ",
    logpath: "/mnt/abc/app.log",
    trace: true,
  },
  {
    id: 3,
    type: "ERR",
    desc: "ERR :: Application could not start in server AP02",
    logpath: "/mnt/abc/app.log",
    trace: false,
  },
];

console.table(logs);

const no = Math.random() * 10;

console.log(no);

for (let i of logs) {
  console.log(`:: ${i.desc}`);
}

//forEach, map ,Filter

logs.forEach(function (n) {
  console.log(n);
});

//Above is similar to this
logs.forEach((n) => console.log(n));

const newlogs = logs.filter((n) => n.trace === true).map((n) => n.desc);

console.table(newlogs);

//OOPS

// function Person(fName, lName, dob) {
//   (this.fname = fName), (this.lname = lName), (this.dOb = new Date(dob));
// }
class Person {
  constructor(fName, lName, dob) {
    this.fname = fName;
    this.lname = lName;
    this.dOb = new Date(dob);
  }

  getFullYear() {
    console.log(this.dOb.getFullYear().toString());
  }

  getFullName() {
    console.log(`${this.fname} ${this.lname}`);
  }
}

//Instantiate Object

const person1 = new Person("Santhosh", "PSP", "06-04-2000");
const person2 = new Person("Harish", "PSP", new Date("4-2-2005").toString());

// const { fname, lname, dOb } = person1;

// console.log(fname, lname, dOb);
console.log(person1.dOb);
console.log(person2);

person2.getFullName();
person2.getFullYear();

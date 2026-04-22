let newStu = {
  rollNo: 21,
  name: "Mark",
  marks: 87,
};

let stuExp = JSON.stringify(newStu)
console.log(stuExp)
let stuJSON = JSON.parse(stuExp)
console.log(stuJSON["name"]) 
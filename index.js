// Part One: Refactoring Old Code
let cellData = [];
let objArray = [];
let headers = [];

const data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let myData = data.split("\n");

// Part Two: Expanding Functionality
for (let i = 0; i < myData.length; i++) {
  let columns = myData[i];
  let cells = columns.split(",");
  cellData.push(cells);

}

for (let i = 0; i < cellData[0].length; ) {
  headers = cellData[i];
  break;

}

// Part 3 Transforming Data
for (let i = 1; i < myData.length; i++){
  let myLoop = (cellData[i]);
  let temp = [];
  let item = {};
  
  for (let i = 0; i < myLoop.length; i++) {
    const values = myLoop;
    item[headers[i].toLowerCase()] = values[i];
    temp.push(item);

  }

  const mergedItem = Object.assign({}, ...temp);
  temp = [];
  item = {};
  objArray.push(mergedItem);

}

// Part 4: Sorting and Manipulating Data 
objArray.pop();
objArray.splice(1, 0, {id: '48', name: "Barry", occupation: "Runner", age: "25"});
objArray.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});
let average = 0;
let averageNum = 0;

for (const user of objArray) {
   num = Number(user.id);
   average += num;
   averageNum+=1;

}

let averageAge = average / averageNum;

// Part 5: Full Circle
let csv = "";

for (key in objArray) {
  let stringOutput = objArray[key];
  let heading = Object.keys(stringOutput); 
  let upper = heading[key];

  if (upper !== undefined) {
  let first = upper[0].toUpperCase() + upper.slice(1);
  csv += `${first},`;

  }
}


let csvString = csv.slice( 0, -1);
let finalString = csvString.replace("d", "D"); 

for (let i = 0; i < objArray.length; i++) {
  let currentName = (objArray[i]);

  let personID = currentName.id;
  let name = currentName.name; 
  let occupation = currentName.occupation; 
  let age = currentName.age; 

  finalString = finalString += `\\n${personID},${name},${occupation},${age},`;

}

let output = finalString.slice(0, -1); 

console.log(cellData);
console.log(objArray);
console.log(`${averageAge} years old.`);
console.log(output);
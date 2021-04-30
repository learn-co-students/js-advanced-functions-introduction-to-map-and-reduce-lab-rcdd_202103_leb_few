// Your code here

let sourceArray = [1, 2, 3, -9]

function mapToNegativize(sourceArray){
  const result = sourceArray.map(x => x*(-1));
  return result;
}

mapToNegativize(sourceArray)

let arr2 = ["paul", "gurney", "vladimir", "jessica", "chani"]

function mapToNoChange(arr2){
  const result = arr2.map(x => x);
  return result;
}
mapToNoChange(arr2)

let arr3 = [1, 2, 3, -9]
function mapToDouble(arr3){
  const result = arr3.map(x => x*2);
  return result;
}

mapToDouble(arr3)

////////////////////////////////////////

let arr4 = [1, 2, 3, -9]
function mapToSquare(arr4){
  const result = arr4.map(x =>x*x);
  return result;
}

mapToSquare(arr4)

//////////////////////////////////////

// let a = [1,2,3];
// //const reducer = (accumulator, currentValue) => accumulator + currentValue;

// function reduceToTotal(a,accumulator, currentValue){
//   const result = a.reduce((accumulator, currentValue) => accumulator + currentValue);
//   return result;
// }

// reduceToTotal(a)

let a = [1,2,3];

function reduceToTotal(a,startPoint=0){
  let result=0;
  for (let i=0; i<a.length; i++){
    result += a[i];
  }
  return result+startPoint;
}

reduceToTotal(a)
reduceToTotal(a,100)


/////////////////////////////////////

let b=[1, 2, true, "razmatazz"];

// function reduceToAllTrue(b){
//   let r=true;
//   for(let j=0; j<b.length; j++){
//     if(!b[j]){
//     r=false; 
//     }
//     else{
//       r=true;
//     }
// }
//   return r;
// }
// reduceToAllTrue(b)

function reduceToAllTrue(b){
  let r=true;
  for(let j=0; j<b.length; j++){
    if(!b[j]){
     r=false; 
    }
 
}
  return r;
}


reduceToAllTrue(b)


let b2=[1, 2, true, "razmatazz", false];
reduceToAllTrue(b2)


/////////////////////////////////////////

function reduceToAnyTrue(b){
  let r=false;
  for (let k=0; k<b.length; k++){
    if(b[k]===true){
      r=true;
    }
  }
  return r;
}


let b3=[ false, null, null, null, true];
reduceToAnyTrue(b3)

let b4=[ false, null, null, null];
reduceToAnyTrue(b4)




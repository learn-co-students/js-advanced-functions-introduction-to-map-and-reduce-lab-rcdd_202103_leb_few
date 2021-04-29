// Your code here
let sourceArray = [];

function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(-1 * sourceArray[i])
      }
      return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i])
      }
      return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(2 * sourceArray[i])
      }
      return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i] **2)
      }
      return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
let total = startingPoint;
   for (let i = 0; i < sourceArray.length; i++){
     total += sourceArray[i];
   }
   return total;
 }


 function reduceToAllTrue(sourceArray) {
 	let flag = true
 	for (let i = 0; i < sourceArray.length; i++) {
 		if (sourceArray[i]) {
 			flag = true
 		} else {
 			return false
 		}
 	}
 	return flag
 }


 function reduceToAnyTrue(sourceArray) {
 	let flag = false
 	for (let i = 0; i < sourceArray.length; i++) {
 		if (!sourceArray[i]) {
 			flag = false
 		} else {
 			return true
 		}
 	}
 	return flag
 }

// Your code here
function mapToNegativize(sourceArray){
  for(let i = 0; i<sourceArray.length; i++){
    sourceArray[i] = sourceArray[i]*(-1);
  }
  return sourceArray;
}
function mapToNoChange(sourceArray){
  for(let i = 0; i<sourceArray.length; i++){
    sourceArray[i] = sourceArray[i];
  }
  return sourceArray;
}
function mapToDouble(sourceArray){
  for(let i = 0; i<sourceArray.length; i++){
    sourceArray[i] = sourceArray[i]*2;
  }
  return sourceArray;
}
function mapToSquare(sourceArray){
  for(let i = 0; i<sourceArray.length; i++){
    sourceArray[i] = sourceArray[i]*sourceArray[i];
  }
  return sourceArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
  let sum = startingPoint;
  for (let i=0;i<sourceArray.length;i++){
    sum += sourceArray[i];
  }
  return sum;
}
function reduceToAllTrue(array){

    const reducer = function(accumulator, currentValue){
        if(!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return array.reduce(reducer, true)
}
function reduceToAnyTrue(array){

    const reducer = function(accumulator, currentValue){
        if(!!accumulator == true){
            return true;
        } else {
            return !!currentValue;
        }
    }
    return array.reduce(reducer, false)
}

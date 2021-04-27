
 function mapToNegativize(sourceArray){
   return sourceArray.map((x) => -x)
 }
 
 function mapToNoChange(sourceArray){
   return sourceArray.map((x) => x)
 }
function mapToDouble(sourceArray){
  return sourceArray.map((x)=> x*2)
}

function mapToSquare(sourceArray){
  return sourceArray.map((x)=> x**2)
}

function reduceToTotal(sourceArray, startingPoint=0){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return sourceArray.reduce(reducer,startingPoint);
}
 function reduceToAllTrue(sourceArray){
    const reducer = (accumulator, currentValue) => accumulator && Boolean(currentValue,true);
  return sourceArray.reduce(reducer);
 }
 function reduceToAnyTrue(sourceArray){
    const reducer = (accumulator, currentValue) => accumulator || Boolean(currentValue,true);
  return sourceArray.reduce(reducer);
 }
 
 
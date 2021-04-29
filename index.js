// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(function (n){return n *(-1);});
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  return sourceArray.map(function (n){return n *(2);});
}

function mapToSquare(sourceArray){
  return sourceArray.map(function (n){return n**(2);});
}

function reduceToTotal(sourceArray, startingPoint=0){
  return sourceArray.reduce(function(total, n){return total+n}, 0) + startingPoint;
}

function reduceToAllTrue(sourceArray){
  return sourceArray.reduce(function(acc, current){return acc && Boolean(current)});
}

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce(function(acc, current){return acc || Boolean(current)});
}

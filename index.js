// Your code here
function mapToNegativize(arr) {
  arr = [1, 2, 3, -9]
  const newArr = arr.map(function(index) {
    return index * -1;
  })
  return newArr;
}
mapToNegativize(newArr);


function mapToNoChange (dune) {
  dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
  const newDune = dune.map(function(index) {
    return index;
  })
  return newDune;
}
mapToNoChange(newDune);


 function mapToDouble(num) {
   num = [1, 2, 3, -9]
   const double = num.map(function(index) {
     return index * 2;
   })
   return double;
 }
mapToDouble(double);

  function mapToSquare(num) {
    num = [1, 2, 3, -9]
    const square = num.map(function(i) {
      return i * i;
    })
    return square;
  }

  mapToSquare(square);



function reduceToTotal(sourceArray, startingPoint=0) {
  sourceArray = [1,2,3]
  const num = sourceArray.reduce(function(acc, cur) {
    return acc + cur;
  }, startingPoint);
  return num;
  }
 reduceToTotal(num);

function reduceToAllTrue(sourceArray) {
  const reduceValue = sourceArray.reduce(function(acc, cur) {
  if (!!acc == true && !!cur == true) {
    return true
  }else {
    return false;
  }
  })
  return reduceValue;
}



 function reduceToAnyTrue(sourceArray) {
   const reduceTrue = sourceArray.reduce(function(acc, cur) {
     if (!!acc == true && !!cur == true) {
       return true;
     } else {
       return !!cur
     }
   })
   return reduceTrue;
 }

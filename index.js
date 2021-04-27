// function map(sourceArray, func){
//   return sourceArray.map(func);
// }
// const sourceArray= [1,2,3,4];
// const mapToNegativize=
//   sourceArray.map(function(item){
//     return item * -1;
//   });
// console.log (mapToNegative);

function mapToNegativize(sourceArray){
  return sourceArray.map(function(item){
    return item*-1;
  });
}
function mapToNoChange(sourceArray){
 return sourceArray.map(function(item){
    return item;
  });
}


function mapToDouble(sourceArray){
return sourceArray.map(function(item){
    return item * 2;
  });
}
function mapToSquare(sourceArray){
return sourceArray.map(function(item){
    return item * item;
  });
}
function reduceToTotal(sourceArray, startingPoint=0){
  return sourceArray.reduce(function(result,item){
    return result+item;
  }, startingPoint);
}

function reduceToAllTrue(sourceArray){
  return sourceArray.reduce(function(item, result){
    if (!!item==true && !!result==true){
     return true; 
    }
    else{
      return false;
    }
  });
}

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce(function(item,result){
    if (result===true){
      return true;
    }else{
      return false;
    }
  });
}
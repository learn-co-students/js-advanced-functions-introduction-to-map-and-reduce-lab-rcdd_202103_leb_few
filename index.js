// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(item => {
    item *= -1;
    return item;
  });
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(item => {
    return item;
  });
}

function mapToDouble(sourceArray) {
  return sourceArray.map(item => {
    item *= 2;
    return item;
  });
}

function mapToSquare(sourceArray) {
  return sourceArray.map(item => {
    item *= item;
    return item;
  });
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((total,item) => {
    total += item;
    return total;
  },startingPoint);
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((total,item) => {
    total *= item;
    if(total !== 0) {
      return true;
    }
    else {
      return false;
    }
  });
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((total,item) => {
    total += item;
    if(total !== 0) {
      return true;
    }
    else {
      return false;
    }
  });
}

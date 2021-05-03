// Your code here

function mapToNegativize(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i] * -1 ) // Unique work
  }
  return r
}

function mapToNoChange(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i]) // Unique work
  }
  return r
}

function mapToDouble(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(2 * sourceArray[i]) // Unique work
  }
  return r
}

function mapToSquare(sourceArray) {
  let r = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    r.push(sourceArray[i] * sourceArray[i]) // Unique work
  }
  return r
}


function reduceToTotal(sourceArray, startingPoint){
  let total = 0
  if (startingPoint !== undefined){
    total = startingPoint
  }
  for(let num of sourceArray){
   total = total + num
  }
  return total
}

function  reduceToAllTrue(sourceArray){
  let value = true
  for(let item of sourceArray){
    if (item === false){
        value = false
    }
  }
  return value
}

function  reduceToAnyTrue(sourceArray){
  let value = false
  for(let item of sourceArray){
    if (item === true){
        value = true
    }
  }
  return value
}

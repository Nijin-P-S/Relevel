let multiply = (array) =>{
    return array.reduce(function (accumulator, element) {return accumulator * element},1);
}

let array = [2,3,4,5,6,7,8];

console.log(multiply(array));
let secondSmallestNum = (array) =>{
    let firstSmallest = array[0];
    let secondSmallest = Number.MAX_VALUE;

    array.forEach(element => {
        if(element < firstSmallest){
            secondSmallest = firstSmallest;
            firstSmallest = element;
        }    
        else if(element !== firstSmallest && element < secondSmallest){
            secondSmallest = element;
        }
    });

    return secondSmallest;
}


let array = [1, 34, 2, 22, 13, 78];
let secondSmallest = secondSmallestNum(array);

console.log(`The second smallest number in array : ${array} is ${secondSmallest}`);

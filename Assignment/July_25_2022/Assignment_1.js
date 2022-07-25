let sum = (array, size)=>{
    if(size === 0){
        return 0;
    }

    return array[size-1] + sum(array, size-1);
}

let array= [1,2,3,4,5,6,7,8,9,10];

console.log(sum(array, array.length));
let sort = (array) =>{
    let temp;
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-i-1; j++){
            if(array[j] > array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

let array = [5,4,3,2,1,0];

sort(array);

console.log(array);
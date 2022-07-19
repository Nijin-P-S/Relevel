const mul = function mulPrevNext(array){
    let prev = 1;
    for(let i = 0 ; i<array.length; i++){
        if(i == 0){
            prev = array[i];
            array[i]*= array[i+1];
        }
        else if(i==array.length-1){
            array[i] *= prev;
        }
        else{
            let temp = array[i];
            array[i] = prev*array[i+1];
            prev = temp;
        }
    }
}

const array = [];
array.push(2,3,4,5,6);
mul(array);
console.log(array);
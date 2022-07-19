const movPosToStart = function move(array){
    let left = 0;
    let right = array.length-1;
    
    while(left < right){
        if(array[left]<0 && array[right]>0){
            let temp = array[left];
            array[left++] = array[right];
            array[right--] = temp;
        }
        else if(array[right] == 0)
        {
            let temp = array[0];
            array[0] = 0;
            array[right] = temp;
        }
        else if(array[left] >= 0){
            left++;
        }
        else if(array[right]<0)
            right--;
        
    }
}


const array = [];
array.push(-1, 2, 3, -6, -7, 10, 0, -3);
movPosToStart(array);
console.log(array);
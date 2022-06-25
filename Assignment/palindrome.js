function findReverse(num){
    let reverse = 0;
    
    while(num>0){
        reverse = reverse*10+(num%10);
        num = parseInt(num/10);
    }

    return reverse;
}

function checkPalindrome(num){
    let reverse = findReverse(num);

    if(num === reverse)
        return true;
    return false;
}


for(let i=1; i<50; i++){
    if(checkPalindrome(i))
        console.log(i);
}
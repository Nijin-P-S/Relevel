function findSmallest(num1, num2, num3){
    let smallest = 0;

    while(num1!=0 && num2!=0 && num3!=0 ){
        num1--;
        num2--;
        num3--;
        smallest++;
    }
    return smallest;
}

console.log(findSmallest(12, 1, 2));
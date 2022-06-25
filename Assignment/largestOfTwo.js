function compare(num1, num2){
    if(num1 > num2)
        return (num1+" is greater than "+num2);
    else if(num1 < num2)
        return (num1+" is smaller than "+num2);
    else if(num1 === num2)
        return (num1+" and "+num2+" are equal.");
}

console.log(compare(2, 11));
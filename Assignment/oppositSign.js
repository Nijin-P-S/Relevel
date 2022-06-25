function getSign(num){
    if(num == 0)
        return "Zero";
    else if(num > 0)
        return "Positive";
    else if(num < 0)
        return "Negative";
}

function checkSign(num1, num2){
    signOfnum1 = getSign(num1);
    signOfnum2 = getSign(num2);

    if(signOfnum1 === signOfnum2)
        return "Both are having same sign";
    if(signOfnum1 != signOfnum2)
        return "Both are having opposite sign";
}


console.log(checkSign(1,0));
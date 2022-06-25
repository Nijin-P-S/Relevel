function calculate(num1, operator, num2){

    switch(operator){
        case '+' : return num1+num2;
                
        case '-' : return num1-num2;
        
        case '/' : if(num2 == 0)
                        return "Division by zero not allowed";
                    else
                        return num1/num2;
            
        case '*' : return num1*num2;
                
        case '%' : return num1%num2;
                    
        default  : return "No such operation allowed";
                
    }

}


let num1 = 5;
let num2 = 3;
let operator = '/';

console.log(calculate(num1, operator, num2));

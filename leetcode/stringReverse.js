//Solution using arrow function
const reverse = s => {
    if(!s|| s.length<2 || typeof s != 'string')
        return "Not a string to reverse";
    
    let str = s.split('');
    for(let i=0; i< str.length/2; i++){
        let temp = str[i];
        str[i] = str[str.length-i-1];
        str[str.length-i-1] = temp;
    }

    return str.join('');
}

//Solution using inbuilt functions
const reverse2 = str => str.split('').reverse().join('');

//Solution using spreadOperator
const reverse3 = str => [...str].reverse().join('');

console.log(reverse3("hello"));
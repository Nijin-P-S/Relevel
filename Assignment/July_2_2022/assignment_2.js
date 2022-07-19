let magicSquareCheck = (twoDArray) => {
    let sum;

    // Row check
    for(let i=0; i<twoDArray.length; i++){
        let currRowSum = 0;
        for(let j=0; j<twoDArray[0].length; j++){
            currRowSum+= twoDArray[i][j];
        }
        if(sum === undefined)
            sum = currRowSum;
        else{
            if(sum !== currRowSum)
                return false;
        }
    }

    // Column check
    for(let i=0; i<twoDArray[0].length; i++){
        let currColSum = 0;
        for(let j=0; j<twoDArray.length; j++){
            currColSum+=twoDArray[j][i];
        }

        if(currColSum !== sum)
            return false;
    }

    // Diagonal Check
    let diagonal1 = 0;

    for(let i=0; i<twoDArray.length; i++){
        diagonal1+= twoDArray[i][i];
    }
    
    if(diagonal1 !== sum)
        return false;

    let diagonal2 = 0;   
    for(let i=0,j=twoDArray.length-1; i<twoDArray.length, j>=0; i++, j--){
        diagonal2+=twoDArray[i][j];
    }

    if(diagonal2 !== sum)
        return false;

    return true;
}

let array = [
    [2 , 2, 2],
    [2 , 2, 2],
    [2 , 1, 3]
];

console.log(magicSquareCheck(array));
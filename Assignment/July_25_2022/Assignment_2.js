let isPalindrome = (string) => {
    if(string === undefined)   
        return false;
    let left = 0;
    let right = string.length-1;

    while(left<right){
        if(string[left] != string[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let string = 'malayalam';

console.log(isPalindrome(string));
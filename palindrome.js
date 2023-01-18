// palindrome  (abcba)

function validPalindrome(name) {

    // get the total length of the words 
    let len = name.length;

    // Use for loop to divide the words into 2 half 
    for (let i = 0; i < len / 2; i++) {

        // validate the first and last characters are the same  
        if (name[i] !== name[len - 1 - i]) {
            return console.log("not palindrome")
        }
    }
    return console.log("palindrome")
}
validPalindrome("madam")

// 2. 

/*
function palindrome(string) {
    let length = string.length;

    for (let i = 0; i < length / 2; i++) {

        if (string[i] !== string[length - 1 - i]){
            return console.log("not palindrome")
        }
    }
    return console.log("palindrome")
}
palindrome("anna") */
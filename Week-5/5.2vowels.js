function vowelCount(str){
    const vowelMap = new Map();
    let vowels = "aeiou";
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (vowels.includes(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar.charCodeAt())) {
                vowelMap.set(lowerCaseChar.charCodeAt(), vowelMap.get(lowerCaseChar.charCodeAt()) + 1);
            } else {
                vowelMap.set(lowerCaseChar.charCodeAt(), 1);

            }
        }
    }
    return vowelMap;
}

console.log(vowelCount("aeiouuuu"));




// END ------------------------------------------------------------------------------------------------------------------------------------------------------------------





// function isVowel(char) {
//     return "aeiou".includes(char);// true if char is vowel
// }
// function vowelCount(str){
//     const vowelMap = new Map();
//     for (let char of str) {
//         let lowerCaseChar = char.toLowerCase()
//         if (isVowel(lowerCaseChar)) {
//             // console.log("im in first if");
//             if (vowelMap.has(lowerCaseChar)) {
//                 // console.log("im in if");
//                 vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//                 console.log(vowelMap.get(lowerCaseChar));
//             } else {
//                 // console.log("im in else");
//                 vowelMap.set(lowerCaseChar, 1);
//             }
//         }
//     }
//     return vowelMap;
// }

// console.log(vowelCount("My name is Saurabh"));




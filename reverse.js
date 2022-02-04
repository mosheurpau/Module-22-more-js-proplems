function reverseString(text) {
    let reverse = '';
    for (const element of text) {
        reverse = element + reverse;
    }
    return reverse;
}
const myString = 'Mosheur Rahman';
const output = reverseString(myString);
console.log(output);
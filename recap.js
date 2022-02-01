// Find Largest Number
function largestElement(number) {
    let max = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

const numbers = [12, 43, 5, 23, 55, 3, 7];
const largeNumber = largestElement(numbers);
console.log('large Number', largeNumber);

// Find minimum Number
function minElement(number) {
    let min = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

const numbers2 = [12, 43, 5, 23, 55, 3, 7];
const minNumber2 = minElement(numbers2);
console.log('Minimum Number', minNumber2);

// Find Even Number
function evenElement(number) {
    let even = [];
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element % 2 == 0) {
            even.push(element);
        }
    }
    return even;

}

const numbers3 = [12, 43, 5, 84, 53, 44, 5, 22, 55, 3, 7];
const evenNumber3 = evenElement(numbers3);
console.log('Even Number', evenNumber3);

// Find Odd Number
function oddElement(number) {
    let odd = [];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 != 0) {
            odd.push(element);
        }
    }
    return odd;

}

const numbers4 = [12, 43, 5, 84, 53, 44, 5, 22, 55, 3, 7];
const oddNumber4 = oddElement(numbers4);
console.log('Odd Number', oddNumber4);
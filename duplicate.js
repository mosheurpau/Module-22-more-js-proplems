const names = ['abul', 'babul', 'cabule', 'dabul', 'gabul', 'abul', 'habul', 'abul, dabul', 'sabul'];

function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);

const numbers = [2, 3, 5, 2, 5, 7, 8, 65, 87, 4, 3];
const uniqueNumber = removeDuplicate(numbers);
console.log('Remove Dupliccate Number:', uniqueNumber);
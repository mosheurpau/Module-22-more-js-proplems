function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(65, 34);
console.log(firstTotal);

function multiply(num1, num2) {
    const mult = num1 * num2;
    return mult;
}
const Totalmultiply = multiply(12, 3);
console.log(Totalmultiply);

function woodCalculator(chaiQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;
    const chairWoodQuantity = chaiQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perbedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(3, 1, 2);
console.log(firstOption);
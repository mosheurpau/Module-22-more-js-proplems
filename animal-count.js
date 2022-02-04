function animalCount(miles) {
    const animalDensityFirst10Mile = 10;
    const animalDensitySecond10Mile = 50;
    const animalDensityRestMile = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Mile;
        return count;
    }
    else if (miles <= 20) {
        const firstDensAnimals = 10 * animalDensityFirst10Mile;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Mile;
        const totalAnimals = firstDensAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDensAnimals = 10 * animalDensityFirst10Mile;
        const secondDenseAnimals = 10 * animalDensitySecond10Mile;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMile;
        const totalAnimals = firstDensAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);
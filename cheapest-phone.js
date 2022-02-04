const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton f2', price: 25000, camera: 10, storage: 22 },
    { name: 'Xaime s5', price: 15000, camera: 10, storage: 12 },
    { name: 'sony 5y', price: 35000, camera: 10, storage: 8 },
    { name: 'HTC t4', price: 32000, camera: 10, storage: 16 },
    { name: 'Oppo s4', price: 65000, camera: 10, storage: 54 }
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);
/* {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((r) => r.json()) // JSON -> JS objesi
    .then((user) => {
      console.log(user.name); // "Leanne Graham"
      console.log(user.email); // "Sincere@april.biz"
    });
} */

const car = {
  brand: "BMW",
  model: "X5",
  year: 2024,
  color: "red",
  price: 100000,
  isElectric: false,
  isHybrid: true,
  isGasoline: true,
  isDiesel: false,
};
const jsonCar = JSON.stringify(car);
console.log("JSON string:", jsonCar);

const objCar = JSON.parse(jsonCar);
console.log("Tekrar obje:", objCar);

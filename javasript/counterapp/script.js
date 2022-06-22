// console.log("the script is connected");
// myAge = 20;
// console.log(myAge);
// let myAge = 20;
// let humanDogRatio = 7;
// let myDogAge = myAge / humanDogRatio;
// console.log(myDogAge);
// let count = 50;

// count = count + 50;
// console.log(count);
// count = count - 75;
// console.log(count);
// count = count + 45;
// console.log(count);
// function increment() {
//   console.log("the button was clicked");
// }
// function full() {
//   console.log(42);
// }
// full();
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function sum() {
//   let total = lap1 + lap2 + lap3;
//   console.log(total);
// }
// sum();
// let lapsCompleted = 0;
// function incremen() {
//   lapsCompleted = lapsCompleted + 1;
// }
// incremen();
// incremen();
// incremen();
// incremen();
// console.log(lapsCompleted);
let count = 0;
let countEl = document.getElementById("count");
function increment() {
  // count = count + 1; same as below
  count += 1;
  countEl.textContent = count;
}

let savi = document.getElementById("sv-el");
function save() {
  let numbDash = count + "-" + " ";
  alert(count);
  // savi.innerText = `previous entries:${numbDash}`; same as below
  savi.textContent += numbDash;
  count = 0;
  countEl.textContent = count;
}

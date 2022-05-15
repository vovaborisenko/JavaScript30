"use strict";
const dogs = [
    { name: "Snickers", age: 2 },
    { name: "Hugo", age: 8 },
];
const greenColor = "rgb(186, 218, 85)";
const p = document.querySelector("p");
function makeGreen() {
    if (p) {
        p.style.color = greenColor;
        p.style.fontSize = "50px";
    }
}
// clearing
console.clear();
// Regular
console.log("hello!!");
// Interpolated
console.log("Hello I am a %s string", "smiles");
// Styled
console.log("%c I am styled string ", "font-size: 36px; color: gold; background: black;");
// warning!
console.warn("Oh no!");
// Error :|
console.error("Error :|");
// Info
console.info("Some info string");
// Testing
console.assert((p === null || p === void 0 ? void 0 : p.style.color) === greenColor, "That isn't green! Click on it!");
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});
// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
});
console.table(dogs);

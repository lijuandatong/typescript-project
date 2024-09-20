"use strict";
let count = 208899888;
let course = "typescript";
let is_pulished = true;
let level;
let numbers = [1, 2, 3];
numbers.forEach(n => n.toString);
let user = [1, 'lijuan'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculate(income, taxYear = 2020) {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 1.3;
}
calculate(10000, 2023);
let employee = {
    id: 1,
    name: 'lijuan',
    retire: (date) => {
        console.log(date);
    }
};
let employer = { id: 1, name: 'lijuan', retire: (date) => { console.log(date); } };
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let Quantity = 100;
function greet(name) {
    if (name)
        console.log(name);
    else
        console.log('hello');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById('phone');
phone.value;
//# sourceMappingURL=index.js.map
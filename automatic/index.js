console.log("Hello from another file");

let sums = ["120 000.50", "146,99", 256, 19.80];

let result = sums.map(value => {
    value = String(value).replace(',', '.');
    // debugger;
    value = value.replace(' ', '');
    return value;
});

console.log(result);

console.log(result.map(value => value * 2))
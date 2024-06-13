const sum = (a, b) => a + b;
const mul = (a, b) => a * b;

// module.exports = sum;

let obj = {
    sum: sum,
    mul: mul
}

module.exports = obj;

// export sum as object and module.exports is already object
// require() -> a built in function to include external modules that exist in separete files 
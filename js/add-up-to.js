function addUpTo(n) {
    return addUpToImplFormula(n);
}

function addUpToImplFormula(n) {
    return n * (n + 1) / 2;
}

function addUpToImplLoop(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = Date.now();
console.log(addUpToImplLoop(1000000000));
let t2 = Date.now();

console.log(`Time Elapsed: ${(t2 - t1)} mseconds.`);

t1 = Date.now();
console.log(addUpToImplFormula(1000000000));
t2 = Date.now();

console.log(`Time Elapsed: ${(t2 - t1)} mseconds.`);

module.exports = addUpTo;
const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0 ) return "ERROR";

    let small = Math.min(a, b);
    let large = Math.max(a, b);

    let result = 0;

    for (i = small; i <= large; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

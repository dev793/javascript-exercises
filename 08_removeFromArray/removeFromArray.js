const removeFromArray = function(arr, ...removeValues) {

    removeValues.forEach((value) => {
        while (arr.includes(value)) {
            arr.splice(arr.indexOf(value), 1);
        }
    })

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

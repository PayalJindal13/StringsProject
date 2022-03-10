module.exports = function arrayToString(arr){
    // returning string from aa valid array
    if(arr){
        // check for empty array
        if (arr.length === 0) return ' ';
        // string conversion
        return arr.join(' ')+'.';
    }
    // undefined, null case
    return undefined;
}

/**
 * Format a number into a rupiah-formatted string
 * 
 * Syntax:
 * 
 *  rupiahFormatter.formatToString(nominal);
 * 
 * Example:
 * 
 *  rupiahFormatter.formatToString(1000.45); // returns 'Rp1.000,45'
 * 
 * @param {number} nominal the number we want to convert into a rupiah-formatted string
 * @param {string} prefix the default value is 'Rp'
 * @param {string} suffix the default value is ',00'
 * @returns {string} the rupiah-formatted number
 */
 function formatToString(nominal, prefix='Rp', suffix=',00'){
    let reversedNominal=nominal.toString().split('.');
    let reversedIntegerPart=reversedNominal[0].toString().split('').reverse().join('');
    for(let i=3;i<reversedIntegerPart.length;i=i+4)
    {
        reversedIntegerPart=insertPeriod(reversedIntegerPart,i);
    }
    reversedIntegerPart=reversedIntegerPart.split('').reverse().join('');
    if(reversedNominal[1]){
        if (reversedNominal[1].length===1){
            reversedNominal[1]+='0';
        }
        suffix=','+reversedNominal[1].substring(0,2);
    }
    return prefix+reversedIntegerPart+suffix;
}

/**
 * Insert a period/full stop sign '.' in a certain position in a string.
 * @param {string} str String we want to insert a period/full stop sign in. 
 * @param {number} index Index of a period/full stop in the string.
 * @returns {string} The string after a period/full stop sign has been inserted.
 */
function insertPeriod(str, index) {
    return str.substring(0, index) + '.' + str.substring(index);
}

/**
 * Convert a string og rupiah format into number.
 * 
 * Syntax:
 * 
 *  rupiahFormatter.formatToNumber(rupiahFormatted);
 * 
 * Example:
 * 
 *  rupiahFormatter.formatToNumber('Rp1000,45'); // returns 1000.45
 * 
 * @param {string} nominal This is a string with rupiah format. 
 * @returns {number} the value of the rupiah format in number type.
 */
function formatToNumber(nominal){
    nominal=nominal.split(',');
    fractionalPart=nominal[1]?Number('0.'+nominal[1]):0.00;
    integerPart=Number(nominal[0].replace(/[^0-9]/g,''));
    return integerPart+fractionalPart;;
}

module.exports={
    formatToString,
    formatToNumber
}
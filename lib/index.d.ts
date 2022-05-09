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
export declare function formatToString(nominal: number, prefix?: string, suffix?: string): string;
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
export declare function formatToNumber(nominal: string): number;
//# sourceMappingURL=index.d.ts.map
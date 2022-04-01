/**
 * Octal Literal    Decimal Number
 * 1                    1
 * 2                    2
 * 3                    3
 * 4                    4
 * 5                    5
 * 6                    6
 * 7                    7
 * 10                   8
 * 11                   9
 * 12                   10
 * 13                   11
 * 14                   12
 * 15                   13
 * 16                   14
 * 17                   15
 * 20                   16
 * 21                   17
 * 22                   18
 * 23                   19
 * 24                   20
 * 25                   21
 * 26                   22
 * 27                   23
 * 30                   24 
 * 31                   25
 */

/**
 * Octal literal 
 * Any number start with 0 is consider as octal literal
 * octal literal are numbers which start with 0 and end with digit in between 0-7. 
 * Above are the list of first 25 octal literals 
 */
 
var a = 051;
console.log(a); // 41

/**
 * In the below example as last digit is 8, which is out of range javascript consider it at decimal number and will return 58

var b = 058;
console.log(b); // 58

*/

/**
 * Below example is in strict mode, Javscript will return error 
 * SyntaxError: Decimals with leading zeros are not allowed in strict mode.
 
'use strict'; //should be on top of the file.
var b = 058;
console.log(b); // 58 
  
 */

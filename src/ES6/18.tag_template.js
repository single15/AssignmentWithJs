
/**
 * Tagged Templates
 */

 let person = 'John';
 let age = 28;
 
 function myTag(literal, ...args){
     let str0 = literal[0];
     let str1 = literal[1];
     let str2 = literal[2];
 
     let ageStr;
 
     if(args[1] > 60) {
         ageStr = 'old';
     } else {
         ageStr = 'younge';
     }
 
     return `${str0}${args[0]}${str1}${ageStr}${str2}`;
 
 }
 
 let output = myTag`That ${person} is a ${age}.`;
 
 console.log(output);
/**
 * Template literals are literals delimited with backtick (`) characters, 
 * allowing for multi-line strings, for string interpolation with embedded expressions, a
 * nd for special constructs called tagged templates. 
 */

function backticks(mobile, price) {
    return `Here we present ${mobile} with it's price Rs.${price}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id rutrum orci. 
        Fusce ante risus, vestibulum et tellus maximus, aliquam posuere lorem. Praesent quis dictum ante. 
        Morbi semper mi ipsum, quis semper libero blandit pulvinar. Suspendisse quis mauris ultrices, 
        tristique risus nec, scelerisque nulla. Nam quis vehicula nisi. Suspendisse turpis dui, 
        luctus vitae nibh ut, dignissim imperdiet ligula.
    `;
}

const str = backticks('Oneplus 10 pro', 45000);

console.log(str);
console.log('-----------------------------------------------------');

/**
 * Nesting Template
 * 
*/

let header = true;
let message = `The description of this depends on ${header ? 'header' : 'nothing'}.`;

console.log(message);

/**
 * Created by chalosalvador on 12/1/21
 */

const buttons = document.getElementsByTagName( 'button' );

console.log( 'BUTTONS =>', buttons );

console.log( 'BUTTONS[0]', buttons[ 0 ] );
console.log( 'BUTTONS[1]', buttons[ 1 ] );
console.log( 'BUTTONS[2]', buttons[ 2 ] );
console.log( 'CANTIDAD DE BOTONES', buttons.length );


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    sayHello(i);
  });
}

function sayHello( position ) {
  alert( `Hello ${position}` );
}

const numbers = ['one', 'two', 'three', 'four', 'five'];
console.log( 'numbers', numbers );
numbers.forEach( function( number, pos ) {
  console.log( number, pos );
} );

const numbersPositions = numbers.map(function( number, pos ) {
  return `${number} ${pos}`;
});
console.log( 'numbersPositions', numbersPositions );

const filteredNumbers = numbers.filter(function( number ) {
  return number.length <= 3;
});
console.log( 'filteredNumbers', filteredNumbers );

const copiedNumbers = numbers.copyWithin(2, 3);
console.log( 'copiedNumbers', copiedNumbers );

const filledNumbers = numbers.fill('new', 2);
console.log( 'filledNumbers', filledNumbers );

const newNumbers = [];
numbers.forEach( function( number, pos ) {
  newNumbers.push(`${number} ${pos}`);
} );

newNumbers.push('new element');
newNumbers.pop();
newNumbers.pop();
newNumbers.pop();
console.log( 'newNumbers', newNumbers );

// VAR
// variables are hoisted (declarations are moved to the top of the code)
// Can be redeclared
// Can be reassigned
// Function scope
console.log( 'a', a );
var a = 1;
console.log( 'a', a );

var a = 3;
console.log( 'a', a );

a = 4;
console.log( 'a', a );

var b = 1;
function printA() {
  console.log( 'a from a function', a );
  var b = 5;
  console.log( 'b', b ); // b, 5

  if(b === 5) {
    b = 10;
    console.log( 'b from if', b );
  }

  console.log( 'b outside if', b );

  b = 20;
}
printA();
console.log( 'b', b ); // ReferenceError



// LET
// Variables are NOT hoisted (cannot use variable before declaring it)
// Can be reassigned
// Cannot be redeclared
// Block scoped

// console.log( 'c', c ); // ReferenceError
let c;
c = 1;
console.log( 'c', c );

// Can be reassigned
c = 2;
console.log( 'c', c );

// Cannot be redeclared
// let c = 3; // SyntaxError: Identifier 'c' has already been declared
console.log( 'c', c );

function printC() {
  console.log( 'c from a function', c );
  let d = 6;
  // let d = 7; // ERROR
  console.log( 'd', d );

  if(d === 6) {
    let d = 9; // NO ERROR
    console.log( 'd', d );
  }

  console.log( 'd', d );

}
printC();

console.log( 'd', d );

// CONST
// Variables are NOT hoisted (cannot use variable before declaring it)
// MUST be assigned on declaration
// Cannot be redeclared
// Cannot be reassigned

// console.log( 'e', e ); // ReferenceError
const e = 1;
console.log( 'e', e );
// const e = 2; // SyntaxError: Identifier 'e' has already been declared
// e = 2; // TypeError: Assignment to constant variable.

function printE() {
  console.log( 'e', e );
  const f = 3;

  // const f = 6;

  if(f === 3) {
    const f = 10;
    console.log( 'f', f );
  }

  console.log( 'f', f );
}

printE();

// console.log( 'f', f ); // ReferenceError: f is not defined


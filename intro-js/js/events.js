/**
 * Created by chalosalvador on 21/1/21
 */

const eventsDiv = document.querySelector( '#events' );

eventsDiv.addEventListener( 'mousedown', () => {
  eventsDiv.innerHTML = 'mousedown';
} );

eventsDiv.addEventListener( 'mouseup', () => {
  eventsDiv.innerHTML = 'mouseup';
} );

eventsDiv.addEventListener( 'mouseover', () => {
  eventsDiv.innerHTML = 'mouseover';
  eventsDiv.style.backgroundColor = 'red';
} );

eventsDiv.addEventListener( 'mouseout', () => {
  eventsDiv.innerHTML = 'mouseout';
  eventsDiv.style.backgroundColor = 'blue';
} );

eventsDiv.addEventListener( 'mousemove', ( event ) => {
  eventsDiv.innerHTML = `se movio a X: ${ event.pageX } Y: ${ event.pageY }`;
  // console.log( 'event', event );

} );


document.getElementById( 'inputText' ).addEventListener( 'keydown', ( event ) => {
  console.log( 'keydown', event );
} );

document.getElementById( 'inputText' ).addEventListener( 'keyup', ( e ) => {
  console.log( 'keyup', e.target.id );
} );

document.getElementById( 'inputText' ).addEventListener( 'keypress', ( e ) => {
  console.log( 'keypress', e );
} );

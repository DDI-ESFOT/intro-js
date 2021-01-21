/**
 * Created by chalosalvador on 21/1/21
 */
// AJAX => Asynchronous JavaScript And XML
async function getData() {
  const response = await fetch( 'https://my.api.mockaroo.com/people-avatar.json?key=d269c0a0' );
  const people = await response.json();
  console.log( 'dataJSON', people );

  let cards = '';
  people.forEach( ( person ) => {
    console.log( 'person', person );
    cards += `<div class='col'>
    <div class='card mb-3' style='max-width: 540px;'>
      <div class='row g-0'>
        <div class='col-md-4'>
          <img src='${ person.avatar }' class='img-fluid' alt='${ person.first_name } ${ person.last_name }'>
        </div>
        <div class='col-md-8'>
          <div class='card-body'>
            <h5 class='card-title'>${ person.first_name } ${ person.last_name }</h5>
            <p class='card-text'>${ person.gender
      ? person.gender
      : 'no definido' }</p>
            <p class='card-text'><small class='text-muted'>${ person.email }</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  } );
  document.querySelector( '#async-list-wrapper' ).innerHTML = cards;

}

getData();

// fetch( 'https://my.api.mockaroo.com/people-avatar.json?key=d269c0a0' )
//   .then( ( response ) => {
//     return response.json();
//   } )
//   .then( ( people ) => {
//     console.log( 'dataJSON', people );
//
//     let cards = '';
//     people.forEach( ( person ) => {
//       cards += `<div class='col'>
//     <div class='card mb-3' style='max-width: 540px;'>
//       <div class='row g-0'>
//         <div class='col-md-4'>
//           <img src='${ person.avatar }' class='img-fluid' alt='${ person.first_name } ${ person.last_name }'>
//         </div>
//         <div class='col-md-8'>
//           <div class='card-body'>
//             <h5 class='card-title'>${ person.first_name } ${ person.last_name }</h5>
//             <p class='card-text'>${ person.gender
//         ? person.gender
//         : 'no definido' }</p>
//             <p class='card-text'><small class='text-muted'>${ person.email }</small></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>`;
//     } );
//     document.querySelector( '#async-list-wrapper' ).innerHTML = cards;
//   } );

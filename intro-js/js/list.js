/**
 * Created by chalosalvador on 21/1/21
 */


const people = [
  {
    'id': 1,
    'first_name': 'Nicko',
    'last_name': 'Baford',
    'email': 'nbaford0@psu.edu',
    'gender': 'Male',
    'avatar': 'https://robohash.org/etaliquamrem.jpg?size=150x150&set=set1'
  }, {
    'id': 2,
    'first_name': 'Timmy',
    'last_name': 'Falkus',
    'email': 'tfalkus1@ucoz.ru',
    'gender': 'Female',
    'avatar': 'https://robohash.org/quiaestvoluptatem.jpg?size=150x150&set=set1'
  }, {
    'id': 3,
    'first_name': 'Kelly',
    'last_name': 'Stener',
    'email': 'kstener2@sourceforge.net',
    'gender': null,
    'avatar': 'https://robohash.org/cumautquo.jpg?size=150x150&set=set1'
  }, {
    'id': 4,
    'first_name': 'Sutherland',
    'last_name': 'Blackesland',
    'email': 'sblackesland3@examiner.com',
    'gender': 'Male',
    'avatar': 'https://robohash.org/etestrem.jpg?size=150x150&set=set1'
  }, {
    'id': 5,
    'first_name': 'Susana',
    'last_name': 'Horrigan',
    'email': 'shorrigan4@rambler.ru',
    'gender': 'Female',
    'avatar': 'https://robohash.org/eumliberoreiciendis.jpg?size=150x150&set=set1'
  }, {
    'id': 6,
    'first_name': 'Anna',
    'last_name': 'Sinderland',
    'email': 'asinderland5@meetup.com',
    'gender': null,
    'avatar': 'https://robohash.org/doloresvoluptatumin.jpg?size=150x150&set=set1'
  }, {
    'id': 7,
    'first_name': 'Dusty',
    'last_name': 'Pierri',
    'email': 'dpierri6@reuters.com',
    'gender': 'Female',
    'avatar': 'https://robohash.org/quiaitaqueodit.jpg?size=150x150&set=set1'
  }, {
    'id': 8,
    'first_name': 'Edgar',
    'last_name': 'Lambrecht',
    'email': 'elambrecht7@un.org',
    'gender': 'Male',
    'avatar': 'https://robohash.org/mollitiavoluptatemnon.jpg?size=150x150&set=set1'
  }, {
    'id': 9,
    'first_name': 'Niki',
    'last_name': 'Ricciardi',
    'email': 'nricciardi8@princeton.edu',
    'gender': null,
    'avatar': 'https://robohash.org/officiasintet.jpg?size=150x150&set=set1'
  }, {
    'id': 10,
    'first_name': 'Sandy',
    'last_name': 'Elloy',
    'email': 'selloy9@constantcontact.com',
    'gender': null,
    'avatar': 'https://robohash.org/nondignissimosquos.jpg?size=150x150&set=set1'
  }
];

// const ul = document.createElement( 'ul' );
// people.forEach( ( p ) => {
//   const li = document.createElement( 'li' );
//   li.textContent = `${ p.first_name } ${ p.last_name }`;
//   ul.append( li );
// } );
// document.querySelector('#list-wrapper').append( ul );

/**
 * COMPONENTE MAS COMPLETO
 */

let cards = '';
people.forEach( ( person ) => {
   cards +=`<div class="col">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${person.avatar}" class='img-fluid' alt='${person.first_name} ${person.last_name}'>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${person.first_name} ${person.last_name}</h5>
            <p class="card-text">${person.gender}</p>
            <p class="card-text"><small class="text-muted">${person.email}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>`;

} );

document.querySelector('#list-wrapper').innerHTML = cards;




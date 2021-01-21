/**
 * Created by chalosalvador on 19/1/21
 */
const myCar = {};
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log( 'myCar', myCar );

const myCar1 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  isNew: true,
  engine: {
    power: 100,
    acceleration: 200,
  },
  cities: [ 'Quito', 'Guayaquil', 'Cuenca', 'Ambato' ],
  owners: [
    {
      name: 'Carlos',
      lastname: 'Sanchez'
    },
    {
      name: 'Maria',
      lastname: 'Chiriboga'
    },
    {
      name: 'Carla',
      lastname: 'Suarez'
    }
  ],
  printOwners: function() {
    this.owners.forEach( ( {
      lastname,
      name
    } ) => {
      // console.log( 'Dueño: ' +  owner.name + ' ' + owner.lastname );
      console.log( `Dueño: ${ name } ${ lastname }` );
    } );
  },
  // printCities() {
  //   this.cities.forEach( ( city ) => console.log( 'city', city ) );
  // }
  printCities() {
    this.cities.forEach( ( city ) => console.log( 'city', city ) );
  }
};

console.log( 'myCar1', myCar1 );
console.log( 'myCar1 year', myCar1.year );
console.log( 'myCar1 acceleration', myCar1.engine.acceleration );
console.log( 'myCar1 acceleration', myCar1[ 'engine' ][ 'acceleration' ] );
console.log( 'myCar1 first owner', `${ myCar1.owners[ 0 ].name } ${ myCar1.owners[ 0 ].lastname }` );

let prop = 'make';

console.log( 'myCar', prop, myCar1[ prop ] );

prop = 'year';
console.log( 'myCar', prop, myCar1[ 'prop' ] );

// myCar1.cities.forEach( function( city ) {
//   console.log( 'city', city );
// } );

myCar1.printCities();
myCar1.printOwners();

// Itera sobre cada una de las propiedades del objeto
for( prop in myCar1 ) {
  console.log( 'prop', prop );
}

// Devuelve un arreglo con todas las propiedades del objeto
const keys = Object.keys( myCar1 );
console.log( 'keys', keys );


console.log( '############ DELETE ############' );

// console.log( 'myCar1', JSON.stringify(myCar1, null, 2 ) );
// delete myCar1.make;
// console.log( 'myCar1', JSON.stringify(myCar1) );


// #########################################################

const divInfo = document.querySelector( '#info' );
divInfo.innerHTML = `<p><strong>Marca: </strong> ${ myCar1.make }</p>`;
divInfo.innerHTML += `<p><strong>Modelo: </strong>${ myCar1.model }</p>`;
divInfo.innerHTML += `<p><strong>Año: </strong>${ myCar1.year }</p>`;
let isNewText = myCar1.isNew
  ? 'Si'
  : 'No';
divInfo.innerHTML += `<p><strong>Nuevo?: </strong>${ isNewText }</p>`;
divInfo.innerHTML += `<p><strong>Motor:</strong></p>`;
divInfo.innerHTML += `<ul>`;
divInfo.innerHTML += `<li><strong>Poder:</strong> ${myCar1.engine.power}</li>`;
divInfo.innerHTML += `<li><strong>Aceleración:</strong> ${myCar1.engine.acceleration}</li>`;
divInfo.innerHTML += `</ul>`;


const cars = [
  myCar1,
  {
    make: 'Chevrolet',
    model: 'Aveo',
    year: 2010,
    isNew: false,
    engine: {
      power: 50,
      acceleration: 80,
    },
    cities: [ 'Quito', 'Guayaquil' ],
    owners: [
      {
        name: 'Alfredo',
        lastname: 'Borja'
      },
    ],
    printOwners: function() {
      this.owners.forEach( ( {
        lastname,
        name
      } ) => {
        // console.log( 'Dueño: ' +  owner.name + ' ' + owner.lastname );
        console.log( `Dueño: ${ name } ${ lastname }` );
      } );
    },
    printCities() {
      this.cities.forEach( ( city ) => console.log( 'city', city ) );
    }
  }
];

cars.forEach((car, position) => {
  divInfo.innerHTML += `<p><strong>Auto #${position+1}</strong></p>`;
  divInfo.innerHTML += `<p><strong>Marca: </strong> ${ car.make }</p>`;
  divInfo.innerHTML += `<p><strong>Modelo: </strong>${ car.model }</p>`;
  divInfo.innerHTML += `<p><strong>Año: </strong>${ car.year }</p>`;
  let isNewText = car.isNew
    ? 'Si'
    : 'No';
  divInfo.innerHTML += `<p><strong>Nuevo?: </strong>${ isNewText }</p>`;
  divInfo.innerHTML += `<p><strong>Motor:</strong></p>`;
  divInfo.innerHTML += `<ul>`;
  divInfo.innerHTML += `<li><strong>Poder:</strong> ${car.engine.power}</li>`;
  divInfo.innerHTML += `<li><strong>Aceleración:</strong> ${car.engine.acceleration}</li>`;
  divInfo.innerHTML += `</ul>`;
});

const jsonDiv = document.querySelector('#json');
jsonDiv.innerHTML = JSON.stringify(cars, null, 2);








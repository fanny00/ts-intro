/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor (
        public nombre: string,
        public dirección: string
    ) {}
}

class Heroe extends PersonaNormal {
    
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) {
            super( nombreReal, 'New York, USA');
        }

    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    // constructor( alterEgo: string ) {
    //   this.alterEgo = alterEgo
    // }

    // imprimirNombre(){
    //     return this.alterEgo + ' ' + this.nombreReal;
    // }
}

const ironman = new Heroe('Iroman',45,'Tony');

console.log(ironman);
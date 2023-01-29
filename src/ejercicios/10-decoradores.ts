/*
    ===== Código de TypeScript =====
*/
function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New property";
        hello = "override";
    };
}

@classDecorator
class MiSuperCalse {
    public miPropiedad: string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperCalse);

const miClase = new MiSuperCalse();

console.log( miClase.miPropiedad);
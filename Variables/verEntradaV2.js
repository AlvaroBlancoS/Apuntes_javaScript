let nombre;
let apellidos;
/**
 * 
 * @param {*} mensaje 
 * @returns 
 * Devuelve el valor de cualquier dato en
 * resolve.
 */
function entrada(mensaje) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(mensaje, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
/**
 * Siempre es importante que la clave await esté dentro de la función de
 * async
 */
async function main() {
    nombre = await entrada("¿Cómo te llamas? ");
    apellidos = await entrada("¿Cuá son tus apellidos? ");
    console.log("Tu nombre completo es " + nombre+" "+apellidos);
}

main(); // Necesario para ejecutar la función principal
//dada una cadena de texto, darle la vuela e invertir el orden, sin usar metodos propios del lenguaje
//invertir(hola) devuelve 'olah'

//Funcion con paramero texto
// crear variable para guardar la cadena invertida
// Bucle que recorra el string y guarde los caracteres en al variable

let invertida = [];
let texto = "popeye"
function invierte(palabras) {
    let invertido = ''
    for (const letra of palabras) {
        invertido = letra + invertido;
        console.log(invertido)
    }
}

invierte(texto);
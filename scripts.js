
const form = document.querySelector(".form-fale-conosco")
const mask = document.querySelector("#mascara-form")


function cliqueiNoBotao(){
    form.style.left = "50%"
    mask.style.display = "block"
}

function cliqueiFora(){
    form.style.left = "-140px"
    mask.style.display = "none"
}

/* EVENTOS

    -tudo que acontece é um evento
        -hover
    -eventos predeterminados
        -on'x'
            -onclick
            -onmouseenter
            -onmouseout
            -TUDO NO HTML, NA ABERTURA DA TAG
    -puxa função quando ocorre o evento
        -onclick="função()"
            -inicia a function 'função()'
*/


/* Estudos

    3 jeitos de criar variavel
        espaço de memoria reservado para guardar uma info

        -var   / antigo (n usar)
            -pobre

        -let   / variavel (alteravel)
            -caso necessário

        -const / constante (n alteravel)
            -principal

    o que guardar
        -texto  ('X')
        -numero ( X )
*/

//const numero1 = 100
//const numero2 = 300
//const numeroTotal = numero1 + numero2
//
//console.log(numeroTotal)
// apareceu 400


/* Estudos

    Funções
        -Trecho de código que só é executado quando é chamado

*/

/* const abacate = "Oi, sou um abacate"
const pera = "Oi, sou uma pera"
const numero1 = 100
const numero2 = 200

    function soma() {
        const somatoria = numero1 + numero2
        console.log(somatoria)
    }

console.log(pera)

soma() */



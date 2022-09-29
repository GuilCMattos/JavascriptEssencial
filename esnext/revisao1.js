// let e const
let teste = 'teste'
const feito = 'feito'

// Template String
console.log(`${feito} o ${teste}`)

// Destructuring
const {name: n, age} = {name: 'Guilherme', age: 18}
console.log(n, age)

// Arrow Function
const soma = (a,b) => a + b 
console.log(soma(2,3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)

// Default Param
function log(text = 'Node') { 
    console.log(text)
}

log()
log('Sou mais forte')

// ESB: Object.values/Object.entries

const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// operador ... rest(juntar)/spread(espalhar)

const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

function falarDepoisDe(segundos, frase) { 
    return new Promise((resolve, reject) => { 

        setTimeout(()=> { 
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal')
.then(frase => frase.concat('!!!'))
.then(outraFrase => console.log(outraFrase))
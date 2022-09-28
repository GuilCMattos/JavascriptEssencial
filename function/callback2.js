const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notaBaixas = []
for(let i in notas) { 
    if(notas[i] < 7) { 
        notaBaixas.push(notas[i])
    }
}

console.log(notaBaixas.join(', '))

notaBaixas = notas.filter(nota => { 
    return nota < 7
}).join(' - ')

console.log(notaBaixas)
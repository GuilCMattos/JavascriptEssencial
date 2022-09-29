const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.5, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

const todosBolsitas = (resultado, bolsista) =>  resultado && bolsista 

console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas))

const todosBolsitas2 = (resultado, bolsista) =>  resultado || bolsista 

console.log(alunos.map(a => a.bolsista).reduce(todosBolsitas2))
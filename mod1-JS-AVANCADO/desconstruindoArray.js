let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Gomes',
    empresa: 'LA Soluções',
    cargo: 'programador'
}

// console.log(pessoa.nome)
// console.log(pessoa.cargo)

const { nome:namePessoa , cargo, empresa} = pessoa

// console.log(namePessoa);
// console.log(cargo);

//desconstruindo array

let nomes = ['Matheus', 'Gomes', 'LA Soluções', 'programador']
let {0:Matheus, 1:Gomes } = nomes;

//console.log(Gomes);

let [primeiroNome] = nomes;

console.log(primeiroNome)
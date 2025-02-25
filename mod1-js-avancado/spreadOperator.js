//Spread operator

let primeiros = [1, 2, 3];

let numeros = [...primeiros, 4, 5, 10];

//console.log(numeros)]

let pessoa = {
    nome: "Matheus",
    idade: 45,
    cargo: "RH"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "São Paulo",
}

//console.log(novaPessoa);

function novoUsuario(info){
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2023"
    }
   console.log(data);
}

//novoUsuario({nome: 'jose', sobrenome: 'silva', idade: 45});

function sorteador(...numeros){
    console.log(numeros)

    const numeroGerado = Math.random() * numeros.length;
    const numeroInteiro = Math.floor(numeroGerado);
    console.log(numeroInteiro)
    console.log(parseInt(numeroGerado))
}

sorteador(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
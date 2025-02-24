// MAP = percorer um array e fazer algo com cada item

let lista = ["Marheus", "jose", "Maria"];

lista.map((item, index) => {
    //console.log(`Item: ${item} - Index: ${index}`);
})


//Reduce = reduzir o array a um unico valor

let numeros = [5,3,2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    //console.log(`Acumulador: ${acumulador} - Numero: ${numero} - Indice: ${indice}`);
})


//find = encontrar um item no array

let listagem = [5,3,"jose",2,"matheus"];

let busca = listagem.find((item) => {
    if(item === "jose"){
        //console.log("Encontrado");
    }
})

//console.log(busca);

//filter = filtrar um array

let palavras = ["jose", "maria", "matheus", "bil"];

let resultado = palavras.filter((item)=>{
    return item.length <= 4;
})

//console.log(resultado);

let nomes = ["jose", "maria", "matheus", "bil"];
//console.log(nomes.includes("jose")); //true

let verificar = "Ariel"
console.log(nomes.startsWith("Ari")); //true
console.log(nomes.endsWith("el")); //true
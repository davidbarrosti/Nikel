//const nome = "David Barros";
//let nome2 = "";
let pessoaDefault = {
    nome: "David Barros",
    idade: "34",
    trabalho:"Dev"
}
let nomes =["David Santos" , "Miguel Gostoso", "Manu Linda"];

let pessoaListaVazia = [];

let pessoas = [
    {
        nome: "David Barros",
        idade: "34",
        trabalho:"Dev"
    },
    {
        nome: "Adriano Coutinho",
        idade: "23",
        trabalho:"Dev Front"
    },
];

function alterarNome() {
    nome2="Miguel Arcanjo"
    console.log("Valor Alterado");
    console.log("nome2");
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor Alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("trabalho:");
    console.log(pessoa.trabalho);
    
}

function adicionarPessoa (pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((item)=> {
        console.log("Nome:");
        console.log(item.nome);
    
        console.log("Idade:");
        console.log(item.idade);
    
        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome:"Murilo Chatonildo",
    idade: "34",
    trabalho: "Mamazico"
});

console.log(pessoas);

//recebeEalteraNome("Murilo Santos");
//recebeEalteraNome("Maria Clara");

//alterarNome();
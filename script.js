// pratica guiada concatenação 
/*
const imprimiStringNomeCor = (nome, cor) => {
    const string = 'A cor favorita de ' + nome + ' é ' + cor + '.'
    console.log(string)
}

const nomePessoa = prompt('Qual é o seu nome?')
const corPessoa = prompt('Qual a sua cor favorita?')

imprimiStringNomeCor(nomePessoa, corPessoa)
*/

// pratica guiada template string
/*
const imprimiStringNomeCor = (nome, cor) => {
    const string = `A cor favorita de ${nome} é ${cor}.`

    console.log(string)
}

const nomePessoa = prompt('Qual é o seu nome?')
const corPessoa = prompt('Qual a sua cor favorita?')

imprimiStringNomeCor(nomePessoa, corPessoa)
*/

// pratica guiada substituindo string
/*
const imprimiStringNomeCor = (nome, cor, citacao) => {
   // const string = `A cor favorita de ${nome} é ${cor} a citação favorita é "${citacao}".`
    const string = `Nome: ${nome}
Cor favorita: ${cor}`
    console.log(string)
}

const nomePessoa = prompt('Qual é o seu nome?')
const corPessoa = prompt('Qual a sua cor favorita?')
//const citacaoPessoa = prompt('Qual a sua citação preferida?')

imprimiStringNomeCor(nomePessoa, corPessoa)
*/

//pratica guiada 3

/* const imprimiStringNomeCor = (nome, cor, citacao) => {
    // const string = `A cor favorita de ${nome} é ${cor} a citação favorita é "${citacao}".`
    //const nomeMaiusculo = nome.toUpperCase() 
    const string = `Nome: ${nome.toUpperCase()}
 Cor favorita: ${cor}`
    const incluirA = nome.includes("a")

      console.log(string)
      console.log(nome.length)
      console.log(incluirA)
  }
 
 const nomePessoa = prompt('Qual é o seu nome?')
 const corPessoa = prompt('Qual a sua cor favorita?')
 //const citacaoPessoa = prompt('Qual a sua citação preferida?')
 
 imprimiStringNomeCor(nomePessoa, corPessoa) */

 // exercicio aula

 const nomeEmail = (nome, email) => {
    const dadosCadastrados = `O e-mail "${email}" foi cadastrado com sucesso.
    Boas vindas, ${nome}`
    console.log(dadosCadastrados)
    console.log("Quantidade de caracteres do nome", nome.length)
    // substitui o texto inteiro r por x
    const substuirFrase = dadosCadastrados.replaceAll("r", "x")
    console.log(substuirFrase)
    // verifica se o email tem @
    const verificaEmail = email.includes("@")
    console.log("O email enviado tem @?", verificaEmail)

 }
    //janela pro usuario digitar os dados
 const inserirNome = prompt("Digite seu nome")
 const inserirEmail = prompt("digite seu email")
    // chamada da função
 nomeEmail(inserirNome, inserirEmail)
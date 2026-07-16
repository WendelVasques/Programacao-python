/*
 let numero1 = window.prompt("Digite um número: ");
let numero2 = Number(numero1);

alert(`O nuero que você digitou elevado a 2 é: ${numero1 ** 3}`);
*/
// -------------------------------------- cod02------------
/*
let nome = prompt("Digite seu nome");
alert(`Olá, ${nome}, Seja bem vindo!`);

let anoNasc = prompt(`${nome} Em que ano você nasceu?`);
let anoNascimento = Number(anoNasc);


alert(`em 2040 você terá ${(2040 - anoNascimento)}`);
*/

// -------------------------------------- cod03------------

/*
let salario = prompt("Qual seu salário?")
let salarioAtual = Number(salario)
let aumentosalario = salarioAtual * 1.15
alert(`Seu novo sálario será ${aumentosalario}`)
*/
// -------------------------------------- cod04------------

/*
let produto = prompt("Qual valor do produto?");
let valorproduto = Number(produto)
let desconto = valorproduto * 0.93

alert(`O valor do produto com 7% de desconto fica R$ ${desconto}`)
*/
// -------------------------------------- cod05------------

/*
let salario = Number(prompt("Qual seu salário?"))
let valeTrans = salario * 0.06
let saude = salario * 0.03
let salarioFinal = salario - valeTrans - saude

alert(`Salário = R$ ${salario.toFixed(2)} - Desc Vale-Transporte = R$ ${valeTrans.toFixed(2)} - Desc Saúde = R$ ${saude.toFixed(2)} - Salário Final = R$ ${salarioFinal.toFixed(2)}`);
*/

/*alert(`Seu saláro é R$ ${salario}`)
alert(`Vale-Transporte = ${valeTrans}`);
alert(`Saúde = ${saude}`);
alert(`Salário Líquido = ${salarioFinal}`)
*/
// -------------------------------------- cod06------------

/*
let salario = Number(prompt("Qual seu salário?"))

alert(`Seu salário liquido é R$ ${salario.toFixed(2)}`)
*/
// -------------------------------------- cod011------------
/*
let numero1 = Number(prompt("Digie um valor: "));
let numero2 = Number(prompt("Digite outro valor:"));

//alert (`${numero1}`)

if (numero1 > numero2) {
    alert (`${numero1}`);
}  else {
    alert (`${numero2}`);
}
*/

// -------------------------------------- cod011------------
/* Construa uma página onde o usuário digitará quatro notas escolares e o programa irá 
calcular a média e, caso seja menor que 6, exibirá na tela: “Aluno Reprovado”. Caso 
seja maior ou igual a 6 exibirá na tela: “Aluno Aprovado”.


let nota1 = Number(prompt("Digite sua nota: "));
let nota2 = Number(prompt("Digite sua nota: "));
let nota3 = Number(prompt("Digite sua nota: "));
let nota4 = Number(prompt("Digite sua nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

alert(media);
*/
// -------------------------------------- cod012------------

/*Construa um programa/página onde o usuário irá digitar a sua idade e, caso a idade 
seja maior ou igual a 18, terá como resposta “Maior de Idade”. Caso contrário, “Menor 
de Idade”


let idade = Number(prompt("Digite sua idade: "));

if (idade >= 18) {
    alert ("Maior de idade!")
}    else {
    alert ("Você ainda é menor de idade!")
}
*/
// -------------------------------------- cod013------------

/* Construa uma página onde o usuário digitará um número e o programa dirá se este 
número é par ou ímpar.


let numero1 = prompt("Digite um numero: ");
//resultado = numero1 %= 0;

if (numero1 % 2 === 0){
    alert ("Numero é Par");
}   else { 
    alert ("O número é Impar");
}
*/
// -------------------------------------- cod014------------

/* Construa uma página onde o usuário digitará quatro notas escolares e o programa irá 
calcular a média e, caso seja menor que 6, exibirá na tela: “Aluno Reprovado”. Caso 
seja maior ou igual a 6 exibirá na tela: “Aluno Aprovado”.


let nota1 = Number(prompt("Digite um número: ").replace(",","."));
let nota2 = Number(prompt("Digite um número: ").replace(",","."));
let nota3 = Number(prompt("Digite um número: ").replace(",","."));
let nota4 = Number(prompt("Digite um número: ").replace(",","."));

media = (nota1 + nota2 + nota3 + nota4) /4;

if (media >= 6){
    alert(`Sua nota é ${media}, Aprovado!`)
} else{
    alert(`Sua nota é ${media}, você está Reprovado!`)
}
*/
// -------------------------------------- cod01?------------
/*
let num1 = Number = prompt("Digite sua primeira nota");
let num2 = Number = prompt("Digite sua segunda nota");
let num3 = Number = prompt("Digite sua terceira nota");
let num4 = Number = prompt("Digite sua quarta nota");

let Aprovado = "Aluno aprovado"
let reprovado = "Aluno reprovado"
let soma = (num1 + num2 + num3 + num4) /4
if (soma <= 4)
{
    alert(reprovado);
} else{
    alert(Aprovado);
};
*/
// -------------------------------------- aula 05 -- cod01------------
/*
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digie o segundo número: "));
let operador = prompt("Digite qual operação quer fazer: ");
let resultado;

switch (operador) {
    case "+":
     resultado = num1 + num2; 
     break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    }

    alert (`O resultado é ${resultado}`)
    */
// ------------------------------ aula 05 -------- cod02------------
/*  
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
let num3 = Number(prompt("Digite um terceiro número: "));

if (num1 > num2 && num1 > num3) {
    alert (`O primeiro, número ${num1} é o maior`);
} else if (num2 > num1 && num2 > num3) {
    alert (`O segundo, número ${num2} é o maior`); 
} else {
    alert (`O terceiro, número ${num3} é o maior número`);
}
*/
// ------------------------------ aula 05 -------- cod03------------
/*
Algritmos para fazer um calculo IMC:

1 - perguntar o peso da pessoa
2 - perguntar a altura da pessoa
3 - calcular a fórmula IMC do peso / altura²
4 - criar extrutura condicional para saber em que nivel de IMC está
5 = mostrar o resultado do IMC


let peso = Number(prompt("Qual é seu peso? ").replace(",","."));
let altura = Number(prompt("Qual é sua altura? ").replace(",","."));
let soma = peso / (altura * altura);
 soma = soma.toFixed(2)

if (soma < 18.5) {
    alert (`Abaixo do peso, IMC = ${soma}`);
} else if (soma >= 18.5 && soma < 24.9) {
    alert (`Peso ideal, IMC = ${soma}`);
} else if (soma >= 25.0 && soma <= 29.9) {
    alert (`Sobrepeso, IMC ${soma}`);
} else {
    alert (`Obesidade, IMC = ${soma}`);
}
*/
 // ------------------------------ aula 06 -------- cod00------------
// Crie um cóigo que peça um número e conte a tábuada de 1 até 10

let contador = 1;
let num = Number(130);
let resultado = num * contador;
while (contador < 11) {
   console.log (`${num} x ${contador} = ${num * contador}`);
   contador++
}
# functions_js
Projecto create for program Philips Full Stack developer from Digital innovatio One

# Funções

Neste repositório você encontrará a atividade prática proposta pelo curso "Funções" do Basecamp de Javascript que ministrado por Stephany Nusch.

# Functions
In this repository you will find the practical activity proposed by the Javascript Basecamp course "Fnctions" taught by Stephany Nusch.

## Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

## Activity 1: Passed Students

1. Create a function that receives the `students` array and a number that will represent the final average;
2. Go through the array and populate a new auxiliary array with only students whose grades are greater than or equal to the final average;
3. Use the "object destructuring" technique to manipulate the desired properties of each student. 

## Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```
## Activity 2: This

Given the `calcAge` function, use the call and apply methods to change the value of `this`. Create your own objects for this activity!

```js
function calculateAge(years) {
return `In ${years} years, ${this.name} will have ${
this.age + years
} years old.`;
}
```
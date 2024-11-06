// Declara um array com valores de 1 a 5.
const numbers = [1, 2, 3, 4, 5];

// Declara uma função que retorna true se o número for ímpar.
const isOdd = (x) => x % 2 !== 0;

// Filtra os números ímpares de numbers usando a função isOdd e armazena o resultado em output.
const output = numbers.filter(isOdd);

// Exibe o array output no console.
console.log(output);

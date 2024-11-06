// Declara um array constante chamado numbers.
const numbers = [1, 2, 3, 4, 5];

// Declara uma constante chamada output, aplicando uma função arrow que multiplica cada elemento do array numbers por 2.
const output = numbers.map((x) => {
    return x * 2
});

// Exibe o array output, foi modificado, antes era numbers.
console.log(output);

// É criado um array constante chamado numeros com valores de 1 a 5.
const numeros = [1, 2, 3, 4, 5];

// Declaração deuma função chamada calcularDobro que recebe um número como parâmetro e retorna seu dobro.
function calcularDobro(numero) {
  return numero * 2;
}

// Aplica a função calcularDobro a cada elemento do array numeros individualmente e armazena o resultado em um novo array(numerosDobro).
const numerosDobro = numeros.map(calcularDobro);

// Exibe o array numerosDobro.
console.log(numerosDobro);

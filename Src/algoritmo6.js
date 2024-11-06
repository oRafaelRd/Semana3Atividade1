// Solicita e armazena um valor informado pelo usuario.
const input = prompt();

// Converte a entrada input para um número inteiro e armazena o valor na constante value.
const value = parseInt(input);

// Cria um array com o comprimento do input e preenche os espaços vazios com um valor nulo.
const array = new Array(value).fill(null);

// Cria um array chamado values com comprimento de input, preenchido com valores sequenciais de 1 até o valor de input.
let values = new Array(value)
  .fill(null)                  // Preenche cada posição com null como valor inicial.
  .map((currentValue, index) => index + 1); // Substitui cada posição pelo índice + 1.

console.log(values); // Exibe o array values no console.

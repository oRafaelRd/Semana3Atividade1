// Declara um array chamado users com objetos que representam pessoas com nomes e idades.
const users = [
    { firstName: "john", lastName: "colben", age: 26 },
    { firstName: "jimmy", lastName: "fred", age: 75 },
    { firstName: "sam", lastName: "boston", age: 50 },
    { firstName: "ronald", lastName: "bristh", age: 26 },
  ];
  
  // Cria um novo array contendo apenas o nome completo de cada pessoa.
  const output = users.map((x) => x.firstName + " " + x.lastName);
  
  // Exibe o array output no console.
  console.log(output);
  
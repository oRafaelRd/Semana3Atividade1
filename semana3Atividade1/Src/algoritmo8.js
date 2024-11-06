// Declara um array com objetos representando pessoas com nome e idade.
const users = [
    { firstName: "john", lastName: "colben", age: 26 },
    { firstName: "jimmy", lastName: "fred", age: 75 },
    { firstName: "sam", lastName: "boston", age: 50 },
    { firstName: "ronald", lastName: "bristh", age: 26 },
  ];
  
  // Filtra os usuários com idade menor que 30 e mapeia para um array contendo apenas o primeiro nome.
  const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
  
  // Exibe o array output no console.
  console.log(output);
  
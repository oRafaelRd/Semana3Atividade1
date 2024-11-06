// Declara um array com objetos representando estudantes com nome e idade.
let estudantes = [
    { nome: "João", idade: 15 },
    { nome: "Maria", idade: 20 },
    { nome: "Felipe", idade: 22 },
    { nome: "Pedro", idade: 12 },
    { nome: "Joana", idade: 18 },
  ];
  
  // Faz a filtragem no array estudantes para incluir apenas os alunos com 18 anos ou mais e armazena o resultado em details.
  const details = estudantes.filter((x) => x.idade >= 18);
  
  // Mostra a quantidade de elementos dentro do array details.
  console.log(details.length);
  
// Declara um array chamado students com objetos que representam estudantes com nome e a média deles.
let students = [
    { name: "Smith", average: 80 },
    { name: "Jenny", average: 69 },
    { name: "John", average: 35 },
    { name: "Tiger", average: 55 },
  ];
  
  // Mapeia o array students e adciona + 20 nas notas dos alunos com média abaixo de 60.
  const output = students
    .map((student) => {
      if (student.average < 60) {
        student.average += 20;
      }
      return student;
    })
    .filter((student) => student.average > 60);
  
  // Exibe o array no console.
  console.log(output);
  
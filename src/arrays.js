// Criando o array de objetos (alunos)
const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Ana", nota: 5 },
    { nome: "Carlos", nota: 6 },
    { nome: "Maria", nota: 7 },
    { nome: "Eduardo", nota: 4 }
];

  // Função que retorna alunos com nota >= 6
    const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

  // Chamando a função e exibindo os aprovados
    console.log(filtrarAprovados(alunos));
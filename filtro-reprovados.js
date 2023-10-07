const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [ 7, 4.5, 8, 7.5];

// Filter deve retornar true ou false
// Como o primeiro parametro (nome, index) nome não está sendo usado, pode ser substituído por underline
const reprovados = alunos.filter((_, index) => {
    return medias[index] < 7;
});
console.log(`Alunos reprovados: ${reprovados}`);
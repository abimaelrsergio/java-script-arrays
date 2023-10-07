const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const alunosMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (alunosMedias[0].includes(aluno)) {
        // Desestruturando a lista:
        const [alunos, medias] = alunosMedias;
        
        const index = alunos.indexOf(aluno);
        const media = medias[index];
        console.log(`
        
        A média do aluno '${aluno}', é '${media}'
        
        `);
    } else {
        console.log('Aluno não encontrado');
    }
}

exibeNomeENota('João');

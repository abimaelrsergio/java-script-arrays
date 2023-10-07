const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const alunosMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (alunosMedias[0].includes(aluno)) {
        const index = alunosMedias[0].indexOf(aluno);
        const media = alunosMedias[1][index];
        console.log(`
        
        A média do aluno '${aluno}', é '${media}'
        
        `);
    } else {
        console.log('Aluno não encontrado');
    }
}

exibeNomeENota('João');

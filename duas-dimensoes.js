const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// Array de duas dimensões:
const alunosMedias = [alunos, medias];

console.log(alunosMedias);

console.log(`Aluno da posicao 1 é ${alunosMedias[0][1]}. \nE sua média foi ${alunosMedias[1][1]}`)

/*
[
     [ 'João', 'Juliana', 'Caio', 'Ana' ], 
     [ 10,      8,         7.5,    9 ] 
]
*/

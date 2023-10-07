const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
const sala1 = alunos.slice(0, alunos.length / 2);
console.log(sala1);
console.log(`Sala 01 = ${sala1.length}`);
const sala2 = alunos.slice(alunos.length / 2);
console.log(sala2);
console.log(`Sala 02 = ${sala2.length}`);

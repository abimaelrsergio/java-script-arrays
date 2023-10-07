const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;
// Com forEach dá para obter o indice
notas.forEach((nota, indice) => {
    somaNotas += nota;
    console.log(indice);
});
const media = somaNotas / notas.length;

console.log(`a média é: ${media}`);
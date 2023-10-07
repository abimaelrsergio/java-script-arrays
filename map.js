const notas = [10, 9.5, 8, 7, 6]

// é possível ter dois vamores no map: (nota, indice) => {}, veja que pode ter indice
const novasNotas = notas.map((nota) => {
    const novaNota = nota + 1;
    return novaNota > 10 ? 10 : novaNota;
});
console.log(novasNotas);
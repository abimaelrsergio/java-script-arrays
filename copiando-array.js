const notas = [7, 7, 8, 9];

// Desse jeito, o array original também será modificado
const novasNotas = notas;
novasNotas.push(10);
console.log(`Novas:     ${novasNotas}`)
console.log(`Originais: ${notas}`);

// Dessa forma não altera o array original
console.log("\n------------------------------------------\n")
const novasNotas2 = [...notas, 456];
console.log(`Novas:     ${novasNotas2}`)
console.log(`Originais: ${notas}`);

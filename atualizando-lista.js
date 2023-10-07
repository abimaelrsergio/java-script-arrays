const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
//nomes.splice(1,2);
//nomes.push('Rodrigo');
// Os comentários acima é o mesmo que, so que adiciona o Rodrigo no lugar dos removidos:
nomes.splice(1, 2, "Rodrigo");
console.log(nomes);
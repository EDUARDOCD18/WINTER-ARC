const invitados = new Set(["Javier", "Pedro", "Ana", "Melón"])

console.log(invitados);

invitados.add("Maria")
console.log(invitados);

invitados.add("Javier")
console.log(invitados);

console.log(invitados.size);
console.log(invitados.has("Javier"));
console.log(invitados.has("Cali"));

// Convertir set a Array
const invitadosUnicos = [...invitados]
console.log(invitadosUnicos);
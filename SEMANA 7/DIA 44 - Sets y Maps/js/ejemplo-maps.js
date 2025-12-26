const usuarios = new Map();

// Definir valores (.set)
usuarios.set("id_101", { nombre: "Javier", rol: "Admin" });
usuarios.set(500, "Valor con clave numérica")

// Leer valores (.get)
console.log(usuarios.get("id_101"));
console.log(usuarios.size);
console.log(usuarios);

// Verificar existencia
if (usuarios.has(500)) {
    console.log("Existe");
} else{
    console.log("No existe");
}

// Borrar
usuarios.delete(500)
console.log(usuarios);
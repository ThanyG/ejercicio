function formatNameAndGang(usuario) {
    if (!usuario.nombre || !usuario.apellido ) {
        return "No se proporcionaron ambas propiedades"
    }
    const nombre = usuario.nombre.toUpperCase();
    const apellido = usuario.apellido.toUpperCase();
    const gang = usuario.gang ? usuario.gang.toLowerCase() : ' ';
 return `${nombre} ${apellido} ${gang}`;
};
 const personaje1 ={
    nombre: "Thomas",
    apellido: "shelby",
    ocupacion: "gangLeaders",
    gang: "peakyBlinders"
 };
const personaje2 ={
nombre: "jhon",
ocupacion: "gangaMembers"
}
const resultado1= formatNameAndGang(personaje1);
const resultado2 = formatNameAndGang(personaje2);
 console.log(resultado1);
 console.log(resultado2);


const personajes = [{nombre: "Cid", vida: 120, enegia: 0, daño: 10, probabilidadDeAtaque: 75},
                    {nombre: "Ultra" , vida: 100, enegia: 0, daño: 10, probabilidadDeAtaque: 80},
                    {nombre: "Beta", vida: 100, enegia: 0, daño: 15, probabilidadDeAtaque: 75}]


const baron = {nombre: "baron", vida: 150, enegia: 0, daño: 10, probabilidadDeAtaque: 60}

console.log("Bienvenido a La Lucha contra el Baron")
let confimacion = (confirm("¡¡¡Bienvenido a Ataque al Baron ¿Desea inicia el juego?!!!"))
let i = 0

if (confimacion === true) {
    while (confimacion === true) {
        seletorPersonaje = prompt("Para seleccionar introduzca el nombre correspondiente a cada personje Cid, Ultra, Beta").toLowerCase().trim()
        if (seletorPersonaje === "cid" ||seletorPersonaje === "ultra" || seletorPersonaje === "beta"){
            switch (seletorPersonaje) {
                case "cid":
                    alert("Has seleccionado a Cid")
                    i = 0
                    break;
                case "ultra":
                    alert("Has seleccionado a Ultra")
                    i = 1
                    break;
                case "beta":
                    alert("Has seleccionado a Beta")
                    i = 2
                    break;
                default:
                    alert("No existe ese personaje")
                    break;}
            break
        }
        else {
            alert("seleccionar un personaje existente")
        }
    }
    while(true){
        ataquePersonaje(personajes)
        ataqueBaron(baron)
        console.log("vida altual de",personajes[i].nombre,":",personajes[i].vida)
        console.log("vida altual del Baron",baron.vida)
        if(baron.vida <= 0 ){
            alert("¡¡¡GANASTE IMPEDISTE QUE EL BARON SE COMIERA EL PLANETA!!!")
            alert("Gracias por jugar")
            break
        }
        else if ( personajes[i].vida <= 0){
            alert("Perdiste el Baron se comio a todo el planeta")
            alert("Gracias por jugar")
            break
    }//cambia por sistema por turno con decisiones
}}
else {
    console.log("")
}
function ataquePersonaje(personajes){
    let n100 = Math.floor(Math.random() * 100 + 1)
    let n2 = 0
    if (n100 <= personajes[i].probabilidadDeAtaque) {
        n2 = 1
    }
    else{
        n2 = 2
    }
    if(n2 === 1){
        console.log("ataque de",personajes[i].nombre ,"exitoso")
        baron.vida = baron.vida - personajes[i].daño
        return baron.vida
    }
    else{
        console.log("ataque de",personajes[i].nombre , "fallo")
    }
}


function ataqueBaron(baron){
    let n100 = Math.floor(Math.random() * 100 + 1)
    let n2 = 0
    if (n100 <= baron.probabilidadDeAtaque) {
        n2 = 1
    }
    else{
        n2 = 2
    }
    if(n2 === 1){
        console.log('ataque del "Baron" exitoso')
        personajes[i].vida = personajes[i].vida - baron.daño
        return personajes[i].vida
    }
    else{
        console.log('el ataque del "Baron" fallo')
    }
}

// agregar sistema de habilidades con uso de enegia 
// agregar tienda/tabla de subida de habilidades con filtros 


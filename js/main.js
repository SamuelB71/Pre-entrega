let vidaPlayer = 100
let vidaDelBaron = 150

console.log("Bienvenido a La Lucha contra el Baron")
let confimacion = (confirm("¡¡¡Bienvenido a La Lucha contra el Baron ¿Desea inicia el juego?!!!"))

let personaje = ""

if (confimacion === true) {
    while (confimacion === true) {
        personaje = prompt("Para seleccionar introduzca el nombre correspondiente a cada personje Cid, Ultra, Beta").toLowerCase()
        if (personaje === "cid" ||personaje === "ultra" || personaje === "beta"){
            switch (personaje) {
                case "cid":
                    alert("Has seleccionado a Cid")
                    break;
                case "ultra":
                    alert("Has seleccionado a Ultra")
                    break;
                case "beta":
                    alert("Has seleccionado a Beta")
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
        ataque(personaje)
        ataqueDelBaron()
        console.log("vida altual del enemigo:",vidaDelBaron)
        console.log("vida altual del jugador:", vidaPlayer )
        if(vidaDelBaron <= 0 ){
            alert("¡¡¡GANASTE IMPEDISTE QUE EL BARON SE COMIERA EL PLANETA!!!")
            alert("Gracias por jugar")
            break
        }
        else if ( vidaPlayer <= 0){
            alert("Perdiste el Baron se comio a todo el planeta")
            alert("Gracias por jugar")
            break
    }
}}
else {
    console.log("")//mostrar un mensaje 
}
function probabilidad(personaje) {
    let n100 = Math.floor(Math.random() * 100 + 1)
    let n2 = 0
    if(personaje === "ultra"){
        if (n100 <= 80) {
            n2 = 1
        }
        else{
            n2 = 2
        }
    }
    else{
        if (n100 <= 75) {
            n2 = 1
        }
        else{
            n2 = 2
        }
    }
    return n2
}


function ataque(personaje){
    let probabilidadDeAtaque = probabilidad()
    if (personaje === "beta"){
        if(probabilidadDeAtaque === 1){
            console.log("ataque del jugador exitoso")
            vidaDelBaron = vidaDelBaron - 15
            return vidaDelBaron
        }
        else{
            console.log("fallo el ataque del jugador")
        }
    }else{
        if(probabilidadDeAtaque === 1){
            console.log("ataque del jugador exitoso")
            vidaDelBaron = vidaDelBaron - 10
            return vidaDelBaron
        }
        else{
            console.log("fallo el ataque del jugador")
        }
    }
    
}

function ataqueDelBaron(){
    let n100 = Math.floor(Math.random() * 100 + 1)
    let n2 = 0
    if (n100 <= 60) {
        n2 = 1
    }
    else{
        n2 = 2
    }
    if(n2 === 1){
        console.log('ataque del "Baron" exitoso')
        vidaPlayer = vidaPlayer - 10
        return vidaPlayer
    }
    else{
        console.log('el ataque del "Baron" fallo')
    }
}
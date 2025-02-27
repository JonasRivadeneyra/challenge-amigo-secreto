let amigos = [];




//functions

function limpiarh2() {
     document.querySelector('h2').textContent = 'Digite el nombre de sus amigos';
    
    }

function limpiaImput(){
    document.querySelector("#amigo").value = "";

}


function añadir (){

    document.querySelector("#resultado").innerHTML = ""
    let nombre = document.getElementById('amigo').value.trim();
    //condicion
    if (nombre == "" || amigos.includes(nombre)){
        document.querySelector('h2').innerHTML = " Lo siento Nombre Vacio o Repetido" ;
        limpiaImput();d
    
    } else {
        let li = document.createElement('li'); // Crear un <li>
        li.textContent = nombre ; // Asignar el texto
        document.getElementById('listaAmigos').appendChild(li); // Agregarlo a la lista
        amigos.push(nombre);
        console.log(amigos);
        limpiarh2();
        limpiaImput();
        
    }
}

function sortearAmigo () {
    if (amigos.length === 0 ){
        document.querySelector('h2').innerHTML = '¡¡¡¡Upps , Lista Vacia 🫢!!!!';
        limpiaImput();

    } else {

        document.querySelector("#listaAmigos").innerHTML = ""

        let posicionMaxima = amigos.length ;
        let numeroRandom = Math.floor(Math.random() * posicionMaxima )  ;
        let ganador = amigos[numeroRandom];
        console.log(ganador)

        let li = document.createElement('li');
        li.textContent = `Tu  amigo secreto es ${ganador}` ;
        document.getElementById('resultado').appendChild(li);

        document.querySelector('h2').innerHTML = `Seguro estaras contento`
        amigos = [];
        limpiaImput();
    }   

    
}

// Permitir añadir un amigo al presionar la tecla "Enter"
document.getElementById("amigo").addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
     añadir();
    }
});
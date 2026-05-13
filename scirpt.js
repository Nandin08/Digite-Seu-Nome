
function recebermsg() {
let msg = document.getElementById("mensagem")
let name  = document.getElementById("nome")


if (name.value == "" || name.value == null) {
    msg.innerHTML = "Digite um nome!"
}
else {
    msg.innerHTML = "Olá, " + " " +  name.value + "," + "  prazer em conhece-lo"
}
    setTimeout(() => {
        msg.innerHTML = ""; 
    }, 4000); 


}


var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function (event) {

    var resultado = confirm("deseja remover os dados") ;
    if(resultado == true){
        var alvoEvento =  event.target; // selecioa o evento clicado
        var paiDoAlvo = alvoEvento.parentNode; // seleciona o pai
        event.target.parentNode.classList.add("fadeOut")
        setTimeout(function() {
            paiDoAlvo.remove() 
        },500)
  
    }else {
        alert("Nada foi Removido")
    }
    
});



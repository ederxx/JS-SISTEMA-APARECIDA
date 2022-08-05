var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function() {
   var xhr = new XMLHttpRequest();
    xhr.open("GET",  "https://api-pacientes.herokuapp.com/pacientes")
xhr.addEventListener("load", function() {
    if(xhr.status==200){

        var resposta = xhr.responseText;
    console.log(resposta);

    var pacientes = JSON.parse(resposta);
    console.log(pacientes);
    pacientes.forEach(function(paciente) {
        adicionarPacienteNaTabela(paciente)
    }
        
    );
    }else {
        console.log(xhr.status)
        console.log(xhr.responseText)
        document.querySelector("#erro-ajax");
        erro.Ajax.classList.remove("invisivel")
    }
    
  

  

    
})
    xhr.send();

})
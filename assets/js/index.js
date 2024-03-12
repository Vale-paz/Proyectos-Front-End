$(document).ready(function(){
    $("#contacto").submit(function(event){
        event.preventDefault();  
        var nombre = $("#nombre").val()
        var email = $("#email").val() 
        var mensaje= $("mensaje").val()

        if(nombre === "" || email=== "" || mensaje ===""){
            alert("Error, complete todos los campos")
        }else{
            alert("mensaje enviado con éxito")
        }

    })        
})
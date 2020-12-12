function ingreso (){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if ((usuario.value == "jadiaz2467@misena.edu.co") && (contraseña.value == "juandiaz")) {
        location.href ="https://www.poli.edu.co/profesional/ingenieria-de-software-virtual";
    }

    
    else {alert("intente nuevamente")}
}
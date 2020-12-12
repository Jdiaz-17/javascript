function ingreso (){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario == "jadiaz2467@misena.edu.co" & contraseña == "juandiaz") {
        window.open ="index.html";
    }

    else {document.getElementById("ingreso").innerHTML = "intente nuevamente"
}

}
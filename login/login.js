function loginValidation() {
    var password = document.forms["form_login"]["password"].value;
    var username = document.forms["form_login"]["username"].value;


    var http = new XMLHttpRequest();
    var URL = '../data/data.json';


    http.open('GET', URL, true);
    http.send();

    http.onreadystatechange = function () {

        if (this.readyState==4 && this.status==200) {
            var json_data = JSON.parse(this.responseText);
            console.log("Name: "+json_data.name, "Password: "+json_data.password);
            if (json_data.name==username && json_data.password==password){
                window.alert("Bienvenido");
                return true;
            } else {
                window.alert("Contraseña erronea");
                return false;
            }
        }

    };
    return false;
}

function sign_up(){
    window.alert("Lo sentimos, el sistema de registro no está disponible");
}
function remember_user() {
    window.alert("Lo sentimos, el sistema de recuperación de contraseña no está disponible");
}

function acces_fb() {
    window.alert("Lo sentimos, el acceso con facebook no está disponible");
}

function acces_google() {
    window.alert("Lo sentimos, el acceso con google no está disponible");
}



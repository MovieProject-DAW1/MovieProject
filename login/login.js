function loginValidation() {
    var password = document.forms["form_login"]["password"].value;
    var username = document.forms["form_login"]["username"].value;


    var http = new XMLHttpRequest();
    var URL = '../data/user.json';


    http.open('GET', URL, true);
    http.send();

    http.onreadystatechange = function () {

        if (this.readyState==4 && this.status==200) {
            var json_data = JSON.parse(this.responseText);
            console.log("Name: "+json_data.name, "Password: "+json_data.password);
            if (json_data.name==username && json_data.password==password){
                setCookie("username",json_data.name,24);
                checkCookie();
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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var cadena = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = cadena;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Bienvenido " + user);
    }
}



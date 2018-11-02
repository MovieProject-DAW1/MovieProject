function loginValidation() {
    var password = document.forms["sign-nav"]["password"].value;
    var email = document.forms["sign-nav"]["email"].value;


    var http = new XMLHttpRequest();
    var URL = '../data/user.json';


    http.open('GET', URL, true);
    http.send();

    http.onreadystatechange = function () {

        if (!(this.readyState === 4 && this.status === 200)) {
            return;
        }

        var json_data = JSON.parse(this.responseText);
        for (i = 0; i < json_data.length; i++) {

            if (json_data[i].email === email) {
                if (password === json_data[i].password) {
                    window.alert("Bienvenido " + json_data[i].name);
                    /* Cambiar false por true*/
                    return false;
                } else {
                    window.alert("Contraseña erronea");
                    /* Cambiar false por true*/
                    return false;
                }
                break;
            }

        }
        window.alert("Usuario no encontrado");

    };
    return false;
}


function fuction_noFound() {
    window.alert("Lo sentimos, esta función aun no está implementada");
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



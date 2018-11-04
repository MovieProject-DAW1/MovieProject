function loginValidation() {
    var password = document.forms["sign-nav"]["password"].value;
    var email = document.forms["sign-nav"]["email"].value;



    var http = new XMLHttpRequest();
    var URL = 'http://localhost:63342/MovieProject/data/user.json';

    http.open('GET', URL, true);
    http.send();

    http.onreadystatechange = function () {


        if (!(this.readyState === 4 && this.status === 200)) return false;
        var json_data = JSON.parse(this.responseText);
        for (i = 0; i < json_data.length; i++) {

            if (json_data[i].email === email ) {
                if (password === json_data[i].password) show_alert('alert-success',"Bienvenido a Moview DAW");
                else show_alert('alert-danger',"ERROR: contraseña incorrecta");
                return false;
            }

        }

        show_alert('alert-warning',"Warning: Este usuario no está registrado");

    };
    return false;
}
function show_alert(add_class, str) {


    var element_alert = document.getElementById('alert-login');
    var element = document.createElement('p');
    element.setAttribute("id","message-alert");

    var NodeChild = document.getElementById('message-alert');
    if ( NodeChild != null ) NodeChild.parentNode.removeChild(NodeChild);

    /*Clean if contain class*/
    $("#alert-login").removeClass('alert-danger');
    $("#alert-login").removeClass('alert-success');
    $("#alert-login").removeClass('alert-warning');

    /* add new class and nodo */
    $("#alert-login").addClass(add_class);
    element.appendChild(document.createTextNode(str));
    element_alert.appendChild(element);



    /*hide modal of the login and show alert */
    $('#open-login').modal('hide');
    $('.alert').addClass('show');

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
    if (user !== "") {
        alert("Bienvenido " + user);
    }
}



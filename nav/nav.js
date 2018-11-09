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
                if (password === json_data[i].password) show_alert( 'alert-success' , 'Bienvenido a Moview DAW' );
                else show_alert( 'alert-danger' , 'ERROR: contraseña incorrecta' );
                return false;
            }

        }

        show_alert( 'alert-warning' , 'Warning: Este usuario no está registrado' );

    };
    return false;
}
function show_alert(add_class, str) {

    /* destroy alert if exist */
    var NodeChild = document.getElementById('alert-nav');
    if ( NodeChild != null ) NodeChild.parentNode.removeChild(NodeChild);

    build_alert();

    var id_text_alert = document.getElementById( 'message-alert' );
    $( "#alert-login" ).addClass(add_class);
    id_text_alert.appendChild(document.createTextNode(str));
    $( '#open-login' ).modal( 'hide' );
}
function build_alert() {
    var elem_div = document.createElement( 'div' );
    elem_div.setAttribute( 'id' , 'alert-login' );
    elem_div.setAttribute( 'class' , 'alert show' );
    elem_div.setAttribute( 'role' , 'alert' );

    elem_div.innerHTML ='<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
        '    <span aria-hidden="true">&times;</span>\n' +
        '</button>\n' +
        '<p id="message-alert"></p>';

    document.getElementById( 'content-alert-login' ).appendChild( elem_div );
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




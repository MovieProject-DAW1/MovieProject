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
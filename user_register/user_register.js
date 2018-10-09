function saveUser() {
    console.log("Llamada realizada");
    var username = document.forms["form_user_register"]["username"].value;
    var email = document.forms["form_user_register"]["email"].value;
    var password = document.forms["form_user_register"]["password"].value;
    var password_confirm = document.forms["form_user_register"]["password_confirm"].value;

    var http = new XMLHttpRequest();
    var URL = '../data/user.json';


    http.open('POST', URL, true);


    http.onreadystatechange = function () {

        if (this.readyState==4 && this.status==200) {
            var data = "username"
            data_json = JSON.parse();
        }

    };
    return false;
}
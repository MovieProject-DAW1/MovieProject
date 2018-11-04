function saveUser() {

    var email = document.forms["sign-in-nav"]["email"].value;
    var name = document.forms["sign-in-nav"]["name"].value;
    var password = document.forms["sign-in-nav"]["password"].value;
    var password_confirm = document.forms["sign-in-nav"]["confirm-password"].value;



    if (!validation(password,password_confirm)) return false;
    window.alert("Bienvenido " + name);
    return false;

}

function validation(password,password_confirm) {

    var regex = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/);
    if( password == null || password.length === 0 || !regex.test(password) ) {
        $('#password-sign-in').addClass('is-invalid');
        return false;
    } else  $('#password-sign-in').removeClass('is-invalid');


    if (password !== password_confirm) {
        $('#confirmPassword-sign-in').addClass('is-invalid');
        return false;
    } else   $('#confirmPassword-sign-in').removeClass('is-invalid');


    return true;
}










function loadFile() {
    var http = new XMLHttpRequest();
    var URL = 'http://localhost:63342/MovieProject/data/inews.json';

    http.open('GET', URL, true);
    http.send();


    http.onreadystatechange = function () {


        if (!(this.readyState === 4 && this.status === 200)) return false;
        return (JSON.parse(this.responseText));

    }
}


$( document ).ready(function(){
    var articule = loadFile();

    var contentHTML ='<h4>Noticias de cine</h4>';
    for (var i = 0; i < articule.length; i++){
        contentHTML += '<div class="article">\n' +
            '                    <figure>\n' +
            '                        <a href="News/News1.html"><img src="https://img.europapress.es/fotoweb/fotonoticia_20180527104215_640.jpg">\n' +
            '                        <h5>Morbius, la siguiente película de Marvel</h5>\n' +
            '                        </a>\n' +
            '                        <figcaption>\n' +
            '                            <h6>Seguir Leyendo...</h6>\n' +
            '                        </figcaption>\n' +
            '                    </figure>\n' +
            '                </div>';
    }

    console.log(document.getElementById( 'colum3' ));
    document.getElementById( 'colum3' ).innerHTML = contentHTML;

});

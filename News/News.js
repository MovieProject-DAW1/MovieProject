
var News = [
    {
        name : "'The Walking Dead': estos son los nuevos personajes a los que debes prestar atención",
        id : "link-inde",
        image : "http://localhost:63342/MovieProject/News/imgs/walking.jpg",
        date : "05/11/2018",
        description: "La novena temporada de la ficción zombi introducirá gran cantidad de fichajes en su próximo episodio",
        link : "http://localhost:63342/MovieProject/News/News1.html"
    },
    {
        name : "La nueva película de Willy Wonka será una precuela",
        id : "link-inde",
        image : "http://localhost:63342/MovieProject/News/imgs/willy.jpg",
        date : "02/11/2018",
        description: "Paul King ('Paddington') dirigirá la próxima historia sobre el protagonista de 'Charlie y la fábrica de chocolate'"
    },

    {
        name : "El niño de 'Jurassic Park' explica uno de los mayores errores de la película",
        id : "link-inde",
        image : "http://localhost:63342/MovieProject/News/imgs/jurasic.jpg",
        date : "02/11/2018",
        description: "El actor Joseph Mazzello interpreta al bajista de Queen John Deacon en el 'biopic' musical 'Bohemian Rhapsody'"
    },




];


$( document ).ready(function(){
   var contentHTML ='';
    for (var i = 0; i < News.length; i++){
        contentHTML += '<div class="row shadow p-3 mb-5 bg-white rounded">\n' +

                            '<div class="col-md-4">\n' +
                            '<a class="link" href="http://localhost:63342/MovieProject/News/News1.html">\n' +
                                '<img class="d-block w-100" src="' + News[i].image  +'"</img> '+
                            '</div>' +
                            '<div class="col-md-8">\n' +
                                '<p>\n' + News[i].date + '</p>' +
                                '<h2>\n' + News[i].name + '</h2>' +
                                '<p>\n' + News[i].description + '</p>' +
                            '</div>' +
                        '</div>';
        //contentHTML += '<div class="row shadow p-3 mb-5 bg-white rounded">\n' '<h1>\n' + News[i].name + '</h1>' + '</div>';
    }


    console.log(document.getElementById( 'content-prueba' ));
    document.getElementById( 'content-prueba' ).innerHTML = contentHTML;

});

$( document ).ready(function(){
    var contentHTML ='';
    for (var i = 0; i < News.length; i++){
        contentHTML += '<div class="carousel-item active">\n' +
            '<img class="d-block w-100" src="' + News[i].image  +'" alt="First slide" </img> '+
            '<div class="carousel-caption d-md-block">\n' +
                '<h5>\n' + News[i].name + '</h5>' +
                '<p>\n' + News[i].description + '</p>' +
            '</div>' +
            '</div>';
        //contentHTML += '<div class="row shadow p-3 mb-5 bg-white rounded">\n' '<h1>\n' + News[i].name + '</h1>' + '</div>';
    }


    console.log(document.getElementById( 'content-news' ));
    document.getElementById( 'content-news' ).innerHTML = contentHTML;

});


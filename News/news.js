var linkNews = {
    newWalking : 'http://localhost:63342/MovieProject/News/newWalking.html'
};



var All = [
    {
        name : "'The Walking Dead': estos son los nuevos personajes a los que debes prestar atención",
        id : "link-walking",
        image : 'https://wallpapercave.com/wp/wp2241458.jpg',
        date : "05/11/2018",
        description: "La novena temporada de la ficción zombi introducirá gran cantidad de fichajes en su próximo episodio",
        paragraph1: "Ya es una realidad: The Walking Dead vuelve a dar un salto temporal, y esta vez de los grandes.\n" +
            "                Concretamente, seis años. Así como pudiste ver al final del 9x05, una Judith Grames (Cailey Fleming)\n" +
            "                muy diferente a la que conocíamos da la bienvenida a un nuevo grupo de supervivientes a su comunidad.\n" +
            "                Si quieres recordar sus rostros, puedes hacerlo en el avance del próximo episodio que encontrarás sobre\n" +
            "                estas líneas. Pero, ¿quiénes son?",
        paragraph2:"Magna (Nadia Hilker) se presenta ante Judith, su salvadora, junto con las hermanas Connie (Lauren Ridloff)\n" +
            "                y Kelly (Angel Theory), Yumiko (Eleanor Matsuura) y Luke (Dan Fogler). Se trata, de igual modo, de unos\n" +
            "                personajes originales de los cómics, pero con algunos cambios:\n" +
            "                Al contrario que en las novelas gráficas, Connie es sorda, igual que la actriz que la interpreta, y\n" +
            "                por ende, su medio de comunicación es el lenguaje de signos. Esto podría enriquecer mucho la trama, pues no debe de ser nada fácil sobrevivir en un apocalipsis zombi teniendo, además, una discapacidad que no permita tener todos tus sentidos alerta.\n" +
            "                El otro cambio lo encontramos en el personaje de Kelly. Mientras que en los cómics es un hombre además\n" +
            "                de la pareja de Connie, en el título de AMC es una mujer, concretamente, la protectora hermana de Connie.\n" +
            "                \"Pensamos que sería genial tener un grupo que sepa cómo comunicarse de una manera diferente\", dijo Angela\n" +
            "                Kang para EW. \"Todos estos personajes, de alguna manera, conocen algo de [lenguaje de signos estadounidense]\n" +
            "                    y se comunican entre sí. Están tan unidos. Se han apoyado los unos en los otros\".",
        paragraph3:"Sin embargo, los anteriores no son los únicos a los que recibamos en la novena temporada de The Walking\n" +
            "                Dead pues, si echas un vistazo al avance del 9x06, ya se nos han introducido al nuevo grupo de enemigos:\n" +
            "                los Susurradores. Aunque quizás puedan pasar desapercibidos en un primer momento, si escuchas bien, en el\n" +
            "                minuto 00.46 del vídeo podrás oír \"Where are they? (¿Dónde están ellos?)\" mientras Rosita y Eugene tratan\n" +
            "                    de esconderse entre el barro.\n" +
            "                Los Susurradores son una nueva comunidad cuyo método de supervivencia reside en camuflarse entre los\n" +
            "                caminantes. Para ello, se desplazan con ellos, a su ritmo, se comunican mediante ruidos y susurros y se\n" +
            "                cubren con su sangre. Alpha (Samantha Morton) es la líder de este nuevo grupo, mientras que Beta\n" +
            "                (el ex de Sons of Anarchy Ryan Hurst) es su segundo de abordo y Lydia (Cassady McClincy) su hija-y quien\n" +
            "                    en los cómics de Kirkman mantenía un romance con Carl (Chandler Riggs)",
        head1: "LOS RECIÉN LLEGADOS A LA COMUNIDAD",
        head2: "LOS SUSURRADORES, NUEVOS VILLANOS",
    },
    {
        name : "'The Walking Dead': estos son los nuevos personajes a los que debes prestar atención",
        id : "link-walking2",
        image : 'https://wallpapercave.com/wp/wp2241458.jpg',
        date : "05/11/2018",
        description: "La novena temporada de la ficción zombi introducirá gran cantidad de fichajes en su próximo episodio",
    },
    {
        name : "'The Walking Dead': estos son los nuevos personajes a los que debes prestar atención",
        id : "link-walking3",
        image : 'https://wallpapercave.com/wp/wp2241458.jpg',
        date : "05/11/2018",
        description: "La novena temporada de la ficción zombi introducirá gran cantidad de fichajes en su próximo episodio",
    },


];



function loadButtonNews() {

    $( "#link-new-walking" ).click(function () {
        $( "#content-noticias" ).load( linkNews.newWalking );
    });

    $( "#link-walking" ).click(function () {
        $( "#content-noticias" ).load( linkNews.newWalking );
    });
}
function buildAllNews() {
    var contentHTML ='<h2>Todas las noticias</h2>';
    for (var i = 0; i < All.length; i++){
        contentHTML += '<div id=\"' + All[i].id  +'\" class="row shadow p-3 mb-5 bg-white rounded">\n' +

            '<div class="col-md-4">\n' +
            '<a class="link" href="#" </a>' +
            '<img class="img-fluid" src=\"' + All[i].image  +'\"</img> '+
            '</div>' +
            '<div class="col-md-8">\n' +
            '<p>\n' + All[i].date + '</p>' +
            '<h4>\n' + All[i].name + '</h4>' +
            '<p>\n' + All[i].description + '</p>' +
            '</div>' +
            '</div>';
    }

    document.getElementById( 'content-newss' ).innerHTML = contentHTML;
}

function buildAllNews() {
    var contentHTML ='';

    contentHTML= '<div  class="container">\n' +
        '<h1>\n' + All[0].name + '</h1>' +
        '<div  class="row">\n' +
            '<div  class="col-md-8">\n' +
                '<img class="img-fluid img-thumbnail" src=\"' + All[0].image  +'\"</img> '+
            '</div>' +
            '<div  class="col-md-4">\n' +
                '<h6>\n' + All[0].date + '</h6>' +
                '<p>\n' + All[0].paragraph1 + '</p>' +
            '</div>'+
        '</div>' +
            '<div  class="col-md-12">\n' +
                '<h5>\n' + All[0].head1 + '</h5>' +
                '<p>\n' + All[0].paragraph2 + '</p>' +
                '<h5>\n' + All[0].head2 + '</h5>' +
                '<p>\n' + All[0].paragraph3 + '</p>' +
            '</div>'+

        '</div>' +

        '<div class="container">' +
            '<div class="col-md-12">' +
                '<h1>Noticias relacionadas</h1>' +
                '<div id="myCarousel" class="carousel slide" data-ride="carousel">'+
                    '<div class="carousel-inner">' +
                        '<div class="carousel-item carousel-lightbox active">' +
                            '<div class="row">';
                            for (var i = 0; i < 5; i++) {
                                contentHTML+='<div class="col-sm-2 lightbox">' +
                                    '<a href="#x"><img src="https://wallpapercave.com/wp/wp2241458.jpg" alt="Image" class="img-responsive"></a>' +
                                    '<div class="carousel-caption box d-md-block">' +
                                        '<h5>Walking Dead</h5>'+
                                    '</div>'+
                                '</div>';

                            }
                            contentHTML+='</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

            '</div>'+
        '</div>';

    document.getElementById( 'content-newsss' ).innerHTML = contentHTML;
}

function buildAllNews() {
    var contentHTML ='<div id="myCarousel3" class="carousel slide" data-ride="carousel">\n' +
        '\n' +
        '                <div class="carousel-inner maxheight1">\n' +
        '                    <div class="carousel-item carousel-lightbox active">\n' +
        '                        <div class="row">';
    for (var i = 0; i < 4; i++){
        contentHTML += '<div class="col-sm-2 lightbox">\n' +
            '                                <a href="#x"><img src="https://wallpapercave.com/wp/wp2241458.jpg" alt="Image" class="img-responsive"></a>\n' +
            '                                <div class="carousel-caption box d-md-block">\n' +
            '                                    <h5>Walking Dead</h5>\n' +
            '                                </div>\n' +
            '                            </div>';
    }
    // Cierro los divs
    contentHTML+='</div>'+
    '</div>' +
     '                    <div class="carousel-item carousel-lightbox">\n' +
     '                        <div class="row">';
    for (var i = 0; i < 4; i++){
        contentHTML += '<div class="col-sm-2 lightbox">\n' +
            '                                <a href="#x"><img src="https://wallpapercave.com/wp/wp2241458.jpg" alt="Image" class="img-responsive"></a>\n' +
            '                                <div class="carousel-caption box d-md-block">\n' +
            '                                    <h5>Walking Dead</h5>\n' +
            '                                </div>\n' +
            '                            </div>';
    }
    contentHTML+='</div>' +
    '</div>' +
    '</div>' +
    '</div>';


    document.getElementById( 'content-newssss' ).innerHTML = contentHTML;
}

function buildAllNews() {
    var contentHTML ='<div id="myCarousel3" class="carousel slide" data-ride="carousel">\n' +
        '\n' +
        '                <div class="carousel-inner maxheight1">\n' +
        '                    <div class="carousel-item carousel-lightbox active">\n' +
        '                        <div class="row">';
    for (var i = 0; i < 2; i++){
        contentHTML += '<div class="col-sm-2 lightbox">\n' +
            '                                <a href="#x"><img src="https://wallpapercave.com/wp/wp2241458.jpg" alt="Image" class="img-responsive"></a>\n' +
            '                                <div class="carousel-caption box d-md-block">\n' +
            '                                    <h5>Walking Dead</h5>\n' +
            '                                </div>\n' +
            '                            </div>';
    }
    // Cierro los divs
    contentHTML+='</div>'+
        '</div>' +
        '                    <div class="carousel-item carousel-lightbox">\n' +
        '                        <div class="row">';
    for (var i = 0; i < 2; i++){
        contentHTML += '<div class="col-sm-2 lightbox">\n' +
            '                                <a href="#x"><img src="https://wallpapercave.com/wp/wp2241458.jpg" alt="Image" class="img-responsive"></a>\n' +
            '                                <div class="carousel-caption box d-md-block">\n' +
            '                                    <h5>Walking Dead</h5>\n' +
            '                                </div>\n' +
            '                            </div>';
    }
    contentHTML+='</div>' +
        '</div>' +
        '</div>' +
        '</div>';


    document.getElementById( 'content-news' ).innerHTML = contentHTML;
}

$( document ).ready(function(){
    buildAllNews();
    loadButtonNews();
    buildAllNews();

});


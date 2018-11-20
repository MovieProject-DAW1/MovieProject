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

    document.getElementById( 'content-news' ).innerHTML = contentHTML;
}



$( document ).ready(function(){
    buildAllNews();
    loadButtonNews();
});

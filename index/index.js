var linkNews = {
    newWalking: 'http://localhost:63342/MovieProject/News/newWalking.html'
};


var All = [
    {
        name: "'The Walking Dead': nuevos personajes",
        id: "link-walking",
        image: 'https://wallpapercave.com/wp/wp2241458.jpg',
        date: "05/11/2018",
    },
    {
        name: "'The Walking Dead': nuevos personajes",
        id: "link-walking2",
        image: 'https://wallpapercave.com/wp/wp2241458.jpg',
        date: "05/11/2018",
    },

];

function loadButtonNews() {

    $("#link-new-walking").click(function () {
        $("#content-noticias").load(linkNews.newWalking);
    });

    $("#link-walking").click(function () {
        $("#content-noticias").load(linkNews.newWalking);
    });

}

function buildAllNews() {
    var contentHTML = '<h5>Todas las noticias</h5>';
    for (var i = 0; i < All.length; i++) {
        contentHTML += '<div id=\"' + All[i].id + '\" class="row mb-3 bg-white">\n' +

            '<div class="col-md-7">\n' +
            '<a class="link" href="#" </a>' +
            '<img class="img-fluid foto" src=\"' + All[i].image + '\"</img> ' +
            '</div>' +
            '<div class="col-md-5">\n' +
            '<h6>\n' + All[i].date + '</h6>' +
            '<h5>\n' + All[i].name + '</h5>' +
            '</div>' +
            '</div>';
    }

    document.getElementById('content-news').innerHTML = contentHTML;
}


$(document).ready(function () {
    buildAllNews();
    loadButtonNews();
});
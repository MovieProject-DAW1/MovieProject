
var News = [
    {
        name : "'The Walking Dead': estos son los nuevos personajes a los que debes prestar atención",
        id : "link-inde",
        image : "http://localhost:63342/MovieProject/News/imgs/walking.jpg",
        date : "05/11/2018",
        description: "La novena temporada de la ficción zombi introducirá gran cantidad de fichajes en su próximo episodio"
    },
    {
        name : "Homee",
        id : "link-index",
        link : "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
];


$( document ).ready(function(){
   var contentHTML ='';
    for (var i = 0; i < News.length; i++){
        contentHTML += '<div class="row shadow p-3 mb-5 bg-white rounded">\n' +
            '           <img  src="' + News[i].image  +'"</img> '+
                        '<h1>\n' + News[i].name + '</h1>' + '</div>';
        //contentHTML += '<div class="row shadow p-3 mb-5 bg-white rounded">\n' '<h1>\n' + News[i].name + '</h1>' + '</div>';
    }


    console.log(document.getElementById( 'content-prueba' ));
    document.getElementById( 'content-prueba' ).innerHTML = contentHTML;

});



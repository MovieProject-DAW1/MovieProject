
var News = [
    {
        name : "Home",
        id : "link-index",
        link : "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
    {
        name : "Homee",
        id : "link-index",
        link : "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
    },
];

function prueba(){

    var contentHTML ='';
    for (var i = 0; i < News.length; i++){
        contentHTML += '<div id="content-prueba">\n' +
            '           <a  id="' + News[i].id  + News[i].name + News[i].link  +'</a>\n' +
            '       </div>';
    }
    console.log(document.getElementById( 'content-prueba' ));
    document.getElementById( 'content-prueba' ).innerHTML = contentHTML;


}
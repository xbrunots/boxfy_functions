
var t = "18055271";

fetch('https://viacep.com.br/ws/'+t+'/json/')
    .then(function(response) {

        return response.json();

    }).then(function(v) {

        console.log(v);

    });
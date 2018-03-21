var http = require("http");
setInterval(function() {
    http.get("https://appjsnode.herokuapp.com/");
}, 300000); // a cada 5 minutos (300000)
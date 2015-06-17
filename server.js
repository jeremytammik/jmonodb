var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.set('port', process.env.PORT || 3001);

var server = app.listen( app.get('port'),
  function() {
    console.log('Server listening at port '
                + server.address().port);
  }
);

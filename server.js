express = require('express');
var app = module.exports = express.createServer();

app.matches = [];

app.get('/matches', function(req, res){
    res.send(app.matches);
});

if (!module.parent){
	app.listen(3077);
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
}
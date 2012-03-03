server = require('../server');
require('should');

exports.testListMatchesShouldStartEmpty = function(beforeExit, assert) {
	this.callback = function(){};
	assert.response(server, {
    	url: '/matches'
	}, function(res){
		JSON.parse(res.body).should.eql([]);
	});
}
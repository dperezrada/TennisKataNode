tennis = require('../tennis');
require('should');

exports.testNewTennisClass = function(beforeExit, assert) {
	tennis_match = new tennis.Match();
	tennis_match.players.should.eql([]);
}
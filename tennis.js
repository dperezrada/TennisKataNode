exports.Match = function(){
	return {
		'players': [],
		'add_player': function(player){
			this.players.push(player);
		}
	}
};
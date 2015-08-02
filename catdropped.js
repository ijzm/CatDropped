var catdropped = function(game){
	console.log("CatDropped");
	var player;
}

Cat = function(game, x, speed, color){
	Phaser.Sprite.call(this, game, x, 0, color);
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.ySpeed = speed;
}

	Cat.prototype = Object.create(Phaser.Sprite.prototype);
	Cat.prototype.constructor = Cat;

Cat.prototype.update = function() {
	this.body.velocity.y = this.ySpeed;
	
	if(this.y >= 400){
		this.destroy();
		console.log("lostLife");
	}
}


catdropped.prototype = {
	create: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.add.sprite(0, 0, 'bg');
		player = this.game.add.sprite(10, 10, 'net');
		
		
		
		
		//DEBUG, TODO: REMOVE OR COMMENT
		var debugbutton = this.game.add.button(0,0,"heart",this.createcat,this);
	},

	update: function() {
		player.x = this.game.input.mousePointer.x - (player.width/2);
		player.y = this.game.input.mousePointer.y - (player.height/2);
		
		this.game.physics.arcade.overlap(player, this.game.debugbutton, this.catchcat, null, this);

	},
	
	createcat: function(){
			console.log("DEBUG");
			
			var cat = new Cat(this.game, Math.floor(Math.random() * (this.game.width-42))  , Math.floor(Math.random() * 100) + 50  , "red");
			this.game.add.existing(cat);
	},
	
	catchcat: function(){
		console.log("caught");
		
	}
}
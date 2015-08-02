var catdropped = function(game){
	console.log("CatDropped");
	var player;
}

Cat = function(game, x, speed){
	Phaser.Sprite.call(this, game, x, 0, "blue");
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
		
			var cat = new Cat(this.game, 100, 50);
			this.game.add.existing(cat);


	},

	update: function() {
		player.x = this.game.input.mousePointer.x - (player.width/2);
		player.y = this.game.input.mousePointer.y - (player.height/2);

	}

}
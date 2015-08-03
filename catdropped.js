var catdropped = function(game){
	console.log("CatDropped");
	var player;
	var choosecolor;
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
	
	
	if(checkOverlap(player, this)){
		   
		   this.destroy();
		   
		   }

}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

catdropped.prototype = {
	
	catchcat: function(){
	console.log("caught");
},
	create: function() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.add.sprite(0, 0, 'bg');
		player = this.game.add.sprite(10, 10, 'net');
		
		catgroup = this.game.add.group();
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		
		//timer
		
		this.timer1 = this.game.time.create(false);
		this.timer1.loop(1000, this.createcat, this);
		this.timer1.start();




		//DEBUG, TODO: REMOVE OR COMMENT
		var debugbutton = this.game.add.button(0,0,"heart",this.createcat,this);
	},

	update: function() {
		player.x = this.game.input.mousePointer.x - (player.width/2);
		player.y = this.game.input.mousePointer.y - (player.height/2);

		this.game.physics.arcade.collide(player, catgroup, this.catchcat);
		
		
	},
	//Always:             50% ->
	//Often:              25% ->
	//Uncomon:            10% ->
	//HardlyEver:         5% ->
	//Bonus:              10% ->

	createcat: function(){
		console.log("DEBUG");

		var color;
		var choosecolor2;

		choosecolor = Math.floor(Math.random() * 100) + 1;

		if (choosecolor > 0 && choosecolor <= 50){
			console.log("always");
			choosecolor2 = Math.floor(Math.random() * 3) + 1;

			if(choosecolor2 === 1){
				color = "blue";
			}
			if(choosecolor2 === 2){
				color = "red";
			}
			if(choosecolor2 === 3){
				color = "yellow";
			}
		}
		if (choosecolor > 50 && choosecolor <= 75){
		console.log("ofen");
		choosecolor2 = Math.floor(Math.random() * 3) + 1;

		if(choosecolor2 === 1){
		color = "lightblue";
		}
		if(choosecolor2 === 2){
		color = "lightgreen";
		}
		if(choosecolor2 === 3){
		color = "pink";
		}
		}
		if (choosecolor > 75 && choosecolor <= 85){
			console.log("uncommon");
			choosecolor2 = Math.floor(Math.random() * 3) + 1;

			if(choosecolor2 === 1){
				color = "green";
			}
			if(choosecolor2 === 2){
				color = "orange";
			}
			if(choosecolor2 === 3){
				color = "purple";
			}
		}
		if (choosecolor > 85 && choosecolor <= 90){
			console.log("hardlyever");	
			color = "black"; 
		}
		if (choosecolor > 90 && choosecolor <= 100){
			console.log("bonus");
			choosecolor2 = Math.floor(Math.random() * 3) + 1;

			if(choosecolor2 === 1){
				color = "bomb";
			}
			if(choosecolor2 === 2){
				color = "catfeed";
			}
			if(choosecolor2 === 3){
				color = "heart";
			}
		}
		if(choosecolor > 90 && choosecolor <=100){

		} else {
			var cat = new Cat(this.game, Math.floor(Math.random() * (this.game.width-42))  , Math.floor(Math.random() * 100) + 50  , color);
			this.game.add.existing(cat);
			catgroup.add(cat);
		}
	}

}
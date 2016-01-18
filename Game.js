CatDropped.Game = function (game) {};

var player;

var soundbutton;

var cats;
var maxspeed = 100;
var lives = 3;

var scoretext;
var livestext;

CatDropped.Game.prototype = {

	preload: function () {
	},

	create: function () {
		lives = 3;
		score = 0;
		this.physics.startSystem(Phaser.Physics.ARCADE);
		player = this.add.sprite(0,0, "player");
		player.anchor.x = 0.5;
		player.anchor.y = 0.5;
		
		cats = this.add.group();
		cats.enableBody = true;
		cats.physicsBodyType = Phaser.Physics.ARCADE;
		cats.createMultiple(30, 'blue', 0, false);
		cats.setAll('anchor.x', 0.5);
		cats.setAll('anchor.y', 0.5);
		cats.setAll('outOfBoundsKill', true);
		cats.setAll('checkWorldBounds', true);
		
		livestext = this.add.text(0,0, "Lives: " + lives, {
        	font: "60px Arial",
        	fill: "#FFFFFF",
			stroke: '#000000',
			strokeThickness: 3,
		});
		livestext.fixedToCamera = true;
		
		scoretext = this.add.text(this.game.width,0, "Score: " + score, {
        	font: "60px Arial",
        	fill: "#FFFFFF",
			stroke: '#000000',
			strokeThickness: 3,
		});
		scoretext.anchor.x = 1;
		scoretext.fixedToCamera = true;
		
		this.timer1 = this.game.time.create(false);
		this.timer1.loop(1000, this.createcat, this);
		this.timer1.start();
	},

	update: function () {
		player.x = this.input.worldX;
		player.y = this.input.worldY;

		cats.forEach(this.catupdate, this, true, player, this)
		
		livestext.setText("Lives: " + lives);
		scoretext.setText("Score: " + score);
		
		if(lives <= 0){
			this.game.state.start("GameOver")
		}
	},
	
	render: function(){
	},
	
	createcat: function(){
		var cat = cats.getFirstExists(false);
		cat.reset(Math.floor(Math.random() * this.game.width), 0);
		cat.body.velocity.y = Math.floor(Math.random()*maxspeed)+50;
		
		var random1 = (Math.floor(Math.random()*100)+1);
		var random2 = (Math.floor(Math.random()*3)+1);
		
		
		//ALWAYS
			if(random1 > 0 && random1 <= 50){
			if(random2 === 1){
				cat.loadTexture('blue', 0);
			}
			if(random2 === 2){
				cat.loadTexture('red', 0);
			}
			if(random2 === 3){
				cat.loadTexture('yellow', 0);
			}
			}
		//OFTEN
			if(random1 > 50 && random1 <= 75){
			if(random2 === 1){
				cat.loadTexture('lightblue', 0);
			}
			if(random2 === 2){
				cat.loadTexture('lightgreen', 0);
			}
			if(random2 === 3){
				cat.loadTexture('pink', 0);
			}
			}
		//UNCOMMON
			if(random1 > 75 && random1 <= 85){
			if(random2 === 1){
				cat.loadTexture('green', 0);
			}
			if(random2 === 2){
				cat.loadTexture('orange', 0);
			}
			if(random2 === 3){
				cat.loadTexture('purple', 0);
			}
			}
		//HARDLYEVER
			if(random1 > 85 && random1 <= 90){
				cat.loadTexture('black', 0);
				maxspeed += 10;
			}
		//BONUS	
			if(random1 > 90 && random1 <= 100){
			if(random2 === 1){
				cat.loadTexture('bomb', 0);
			}
			if(random2 === 2){
				cat.loadTexture('catfeed', 0);
			}
			if(random2 === 3){
				cat.loadTexture('yellow', 0);
				//NEED HEART TEXTURE
			}
				maxspeed += 10;
			}

	},
	
	catupdate: function(spriteA, spriteB) {

		var boundsA = spriteA.getBounds();
		var boundsB = spriteB.getBounds();

		if(Phaser.Rectangle.intersects(boundsA, boundsB)){
			spriteA.kill();
			//console.log(spriteA.key)
			if(spriteA.key == "blue"||spriteA.key == "red"||spriteA.key == "yellow"){
				score += 25;
			}
			if(spriteA.key == "lightblue"||spriteA.key == "lightgreen"||spriteA.key == "pink"){
				score += 50;
			}
			if(spriteA.key == "green"||spriteA.key == "orange"||spriteA.key == "purple"){
				score += 100;
			}
			if(spriteA.key == "black"){
				score += 200;
			}
			if(spriteA.key == "bomb"){
				lives -= 1;
			}
			if(spriteA.key == "heart"){
				lives += 1;
			}
			if(spriteA.key == "catfeed"){
				score += 90;
			}
			console.log(score)
		}
		
		if(spriteA.y >= 600){
			spriteA.kill();
			lives -=1;
		}
		
	},
	

};


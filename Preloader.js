CatDropped.Preloader = function (game) {  //declare the Preloader function

	this.background = null;

	this.ready = false;
	
};

CatDropped.Preloader.prototype = {

	preload: function () {
		//load all the required assets in the game - sprites, music, fonts,etc
		this.load.image('playbutton', 'assets/playbutton.png');
		
//		this.load.image('creditsbutton', 'assets/creditsbutton.png');
//		this.load.image('helpbutton', 'assets/helpbutton.png');
//		this.load.image('menubutton', 'assets/menubutton.png');
//		this.load.image('retrybutton', 'assets/retrybutton.png');
//		this.load.spritesheet('button', 'assets/button.png',64,64);
//		this.load.image('buttonlocked', 'assets/buttonlocked.png');
//		this.load.image('soundbutton', 'assets/soundbutton.png');
//		this.load.image('logo', 'assets/logo.png');
		
		this.load.image('player', 'assets/player.png');
		this.load.image('bgmenu', 'assets/bgmenu.png');
//		this.load.image('credits', 'assets/credits.png');
//		this.load.image('help', 'assets/help.png');

		this.load.audio('menumusic', 'assets/menumusic.ogg');
		
		this.load.image('blue', 'assets/drops/always/blue.png');
		this.load.image('red', 'assets/drops/always/red.png');
		this.load.image('yellow', 'assets/drops/always/yellow.png');
		
		this.load.image('lightblue', 'assets/drops/often/lightblue.png');
		this.load.image('lightgreen', 'assets/drops/often/lightgreen.png');
		this.load.image('pink', 'assets/drops/often/pink.png');
		
		this.load.image('green', 'assets/drops/uncommon/green.png');
		this.load.image('orange', 'assets/drops/uncommon/orange.png');
		this.load.image('purple', 'assets/drops/uncommon/purple.png');
		
		this.load.image('black', 'assets/drops/hardlyever/black.png');
		
		this.load.image('bomb', 'assets/drops/bonus/bomb.png');
		this.load.image('catfeed', 'assets/drops/bonus/catfeed.png');
//		this.load.image('heart', 'assets/drops/bonus/heart.png');

		this.time.advancedTiming = true;
		
		
	},

		create: function () {
	},

		update: function () {

		//checking whether the music is ready to be played before proceeding to the Main Menu.
		if (this.cache.isSoundDecoded('menumusic') && this.ready == false){
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
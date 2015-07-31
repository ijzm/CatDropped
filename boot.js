

function preload() {
	//preloads the sprites
	game.load.image('blue', 'assets/drops/always/blue.png');
	game.load.image('red', 'assets/drops/always/red.png');
	game.load.image('yellow', 'assets/drops/always/yellow.png');
	game.load.image('lightblue', 'assets/drops/often/lightblue.png');
	game.load.image('lightgreen', 'assets/drops/often/lightgreen.png');
	game.load.image('pink', 'assets/drops/often/pink.png');
	game.load.image('green	', 'assets/drops/uncommon/green.png');
	game.load.image('orange', 'assets/drops/uncommon/orange.png');
	game.load.image('purple', 'assets/drops/uncommon/purple.png');
	game.load.image('black', 'assets/drops/hardlyever/black.png');
	game.load.image('bomb', 'assets/drops/bonus/bomb.png');
	game.load.image('catfeed', 'assets/drops/bonus/catfeed.png');
	game.load.image('heart', 'assets/drops/bonus/heart.gif');
	//backgrounds
	game.load.image('bg', 'assets/bg.png');
    game.load.image('bgmenu','assets/bgmenu.png');
	//net
	game.load.image('net', 'assets/net.png');
}

funcion create() {
    
    game.add.sprite(0, 0, 'bgmenu');
    
}
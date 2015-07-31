var net;
	
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0, 0, 'bg');
	player = game.add.sprite(10, 10, 'net');
	

}	
q

function update(){
	player.x = game.input.mousePointer.x - (player.width/2);
	player.y = game.input.mousePointer.y - (player.height/2);

}


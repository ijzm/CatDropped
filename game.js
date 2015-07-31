var game = new Phaser.Game(800, 600, Phaser.AUTO, "");

game.state.add("Loading", loading);
game.state.add("Help", help);
game.state.add("CatDroppeds", catdropped);
 
// we'll start loading
game.state.start("Loading");
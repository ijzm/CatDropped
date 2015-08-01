var boot = function(game){
    console.log("boot");
};


boot.prototype = {
    preload: function() {
        //preloads the sprites
        this.game.load.image('blue', 'assets/drops/always/blue.png');
        this.game.load.image('red', 'assets/drops/always/red.png');
        this.game.load.image('yellow', 'assets/drops/always/yellow.png');
        this.game.load.image('lightblue', 'assets/drops/often/lightblue.png');
        this.game.load.image('lightgreen', 'assets/drops/often/lightgreen.png');
        this.game.load.image('pink', 'assets/drops/often/pink.png');
        this.game.load.image('green	', 'assets/drops/uncommon/green.png');
        this.game.load.image('orange', 'assets/drops/uncommon/orange.png');
        this.game.load.image('purple', 'assets/drops/uncommon/purple.png');
        this.game.load.image('black', 'assets/drops/hardlyever/black.png');
        this.game.load.image('bomb', 'assets/drops/bonus/bomb.png');
        this.game.load.image('catfeed', 'assets/drops/bonus/catfeed.png');
        this.game.load.image('heart', 'assets/drops/bonus/heart.gif');
        //backgrounds
        this.game.load.image('bg', 'assets/bg.png');
        this.game.load.image('bgmenu','assets/bgmenu.png');
        //net
        this.game.load.image('net', 'assets/net.png');
    },

   create: function() {

        this.game.add.sprite(0, 0, 'bgmenu');

    }
}
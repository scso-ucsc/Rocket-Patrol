class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload(){ //Preloaded in Menu scene, so they’re ready to use anywhere else in the game
        //Loading audio 
        this.load.audio("sfx_select", './assets/blip_select12.wav');
        this.load.audio("sfx_explosion", './assets/explosion38.wav');
        this.load.audio("sfx_rocket", './assets/rocket_shot.wav');
    }

    create(){
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "28px",
            backgroundColor: "#F3B141", //Don't forget the #'s
            color: "#843605",
            align: "right",
            padding:{
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }

        //Showing menu text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, "ROCKET PATROL", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, "Use ←→ arrows to move & (F) to fire", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#00FF00";
        menuConfig.color = "#000000";
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, "Press ← for Novice or → for Expert", menuConfig).setOrigin(0.5);

        //Defining Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){ //Easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){ //Hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play("sfx_select");
            this.scene.start("playScene");
        }
    }
}
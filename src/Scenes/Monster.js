class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body.setScale(1.5);

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_human_green.png");
        my.sprite.eye.setScale(1.5);

        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 75, "monsterParts", "mouth_closed_happy.png");
        // my.sprite.mouth.angle = 180;
        my.sprite.mouth.setScale(2);

        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY + 75, "monsterParts", "mouthA.png");
        // my.sprite.mouth2.angle = 180;
        my.sprite.mouth2.setScale(2);
        my.sprite.mouth2.visible = false;

        my.sprite.rhorn = this.add.sprite(this.bodyX + 85, this.bodyY - 100, "monsterParts", "detail_white_horn_large.png");
        my.sprite.rhorn.setScale(1);

        my.sprite.lhorn = this.add.sprite(this.bodyX - 85, this.bodyY - 100, "monsterParts", "detail_white_horn_large.png");
        my.sprite.lhorn.setScale(1);
        my.sprite.lhorn.flipX = true;



        my.sprite.rarm = this.add.sprite(this.bodyX + 165, this.bodyY, "monsterParts", "arm_greenB.png");
        my.sprite.rarm.angle = 300;
        my.sprite.rarm.setScale(.75);

        my.sprite.larm = this.add.sprite(this.bodyX - 165, this.bodyY, "monsterParts", "arm_greenB.png");
        my.sprite.larm.angle = 240;
        my.sprite.larm.flipY = true;
        my.sprite.larm.setScale(.75);

        my.sprite.rleg = this.add.sprite(this.bodyX + 100, this.bodyY + 125, "monsterParts", "leg_greenA.png");
        my.sprite.rleg.angle = 0;
        my.sprite.rleg.setScale(.5);

        my.sprite.lleg = this.add.sprite(this.bodyX - 100, this.bodyY + 125, "monsterParts", "leg_greenA.png");
        my.sprite.lleg.angle = 0;
        my.sprite.lleg.flipX = true;
        my.sprite.lleg.setScale(.5);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        let inputF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let inputS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        let inputA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        let inputD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        if (inputF.isDown) {
            my.sprite.mouth.visible = false;
            my.sprite.mouth2.visible = true;
        }

        if (inputS.isDown) {
            my.sprite.mouth.visible = true;
            my.sprite.mouth2.visible = false;
        }

        if (inputA.isDown) {
            for (const s in my.sprite) {
                console.log(s);
                my.sprite[s].x -= 5;
            }
        }

        if (inputD.isDown) {
            for (const s in my.sprite) {
                console.log(s);
                my.sprite[s].x += 5;
            }
        }

        my.sprite.eye.angle += 75;

    }

}
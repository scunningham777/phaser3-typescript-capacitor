import Player from '../objects/player';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../constants';

export class MainScene extends Phaser.Scene {

	private player: Player;
	private platforms;

	create(): void {

		this.player = new Player(WORLD_WIDTH/2, 100, this);
		this.addPlatforms();

	}

	update(): void {

		this.player.update();

	}

	addPlatforms(){

		this.platforms = this.physics.add.staticGroup();

		const scaleX = WORLD_WIDTH / 400;
		this.platforms.create(WORLD_WIDTH / 2, WORLD_HEIGHT, 'ground').setScale(scaleX, 1).refreshBody();
		this.physics.add.collider(this.player.entity, this.platforms, null, null, this);

	}

}

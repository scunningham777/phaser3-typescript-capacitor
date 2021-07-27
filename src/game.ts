/// <reference path="../node_modules/phaser/types/phaser.d.ts"/>

import 'phaser';
import { BootScene } from './scenes/boot';
import { PreloadScene } from './scenes/preload';
import { GameTitleScene } from './scenes/game-title';
import { MainScene } from './scenes/main';
import { GameOverScene } from './scenes/game-over';

import { WORLD_WIDTH, WORLD_HEIGHT } from './constants';

import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

const config: Phaser.Types.Core.GameConfig = {
    width: WORLD_WIDTH,
    height: WORLD_HEIGHT,
    // scale: {
    //     mode: Phaser.Scale.FIT
    // },
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#93e7ff',
    pixelArt: false,
    zoom: 1,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    }
};


export class Game extends Phaser.Game {

    constructor(gameConfig: Phaser.Types.Core.GameConfig) {

        super(gameConfig);

        this.scene.add('Boot', BootScene, false);
        this.scene.add('Preload', PreloadScene, false);
        this.scene.add('GameTitle', GameTitleScene, false);
        this.scene.add('Main', MainScene, false);
        this.scene.add('GameOver', GameOverScene, false);

        this.scene.start('Boot');

        if (Capacitor.isNativePlatform()) {
            StatusBar.hide()
               .catch(console.log);
            SplashScreen.hide();
        }

    }

}

new Game(config);
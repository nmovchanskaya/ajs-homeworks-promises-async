import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
  constructor() {
    this.game = new GameSaving();
  }

  static async load() {
    let data = null;
    let dataParsed = null;

    try {
      data = await read();
    } catch (e) {
      console.log(`error: ${e}`);
      return this.game;
    }
    try {
      dataParsed = await json(data);
    } catch (e) {
      console.log(`error: ${e}`);
      return this.game;
    }
    const obj = JSON.parse(dataParsed);
    this.game = new GameSaving(obj.id, obj.created, obj.userInfo);
    return this.game;
  }
}

let obj = GameSavingLoader.load();

import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const dataParsed = await json(data);
      const { id, created, userInfo } = JSON.parse(dataParsed);
      return new GameSaving(id, created, userInfo);
    } catch (e) {
      console.log(`error: ${e}`);
      return e;
    }
  }
}

const obj = GameSavingLoader.load();

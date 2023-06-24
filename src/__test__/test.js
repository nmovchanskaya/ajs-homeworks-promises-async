import GameSavingLoader from '../gamesavingloader.js';

test('test', async () => {
  const obj = await GameSavingLoader.load();
  expect(obj.id).toBe(9);
});

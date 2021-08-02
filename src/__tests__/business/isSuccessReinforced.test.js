import { isSuccessReinforced, isSuccessIvaldi } from '../../business/isSuccessReinforced';

const mockChance = 0.15;

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(mockChance);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('reinforced 0 item is success in mock chance', () => {
  const item = {
    grade: 'normal',
    type: 'weapon',
    reinforced: 0,
  };
  
  const reinfocementStone = {
    type: 'normal',
  };

  expect(isSuccessReinforced(item)).toBe(true);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(false);
});

test('reinforced 8 item is failed in mock chance', () => {
  const item = {
    grade: 'normal',
    type: 'weapon',
    reinforced: 8,
  };
  
  const reinfocementStone = {
    type: 'ivaldi',
  };

  expect(isSuccessReinforced(item)).toBe(false);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(false);
});

test('reinforced 6 cape is success in mock chance', () => {
  const item = {
    grade: 'normal',
    type: 'cape',
    reinforced: 6,
  };
  
  const reinfocementStone = {
    type: 'ivaldi',
  };

  expect(isSuccessReinforced(item)).toBe(true);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(false);
});

test('reinforced 7 cape is failed in mock chance', () => {
  const item = {
    grade: 'normal',
    type: 'cape',
    reinforced: 7,
  };
  
  const reinfocementStone = {
    type: 'ivaldi',
  };

  expect(isSuccessReinforced(item)).toBe(false);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(false);
});

test('reinforced 3 unique mark is success in mock chance', () => {
  const item = {
    grade: 'unique',
    type: 'mark',
    reinforced: 3,
  };
  
  const reinfocementStone = {
    type: 'ivaldi',
  };

  expect(isSuccessReinforced(item)).toBe(true);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(false);
});

test('reinforced 8 unique mark is failed in mock chance', () => {
  const item = {
    grade: 'unique',
    type: 'mark',
    reinforced: 8,
  };
  
  const reinfocementStone = {
    type: 'ivaldi',
  };

  expect(isSuccessReinforced(item)).toBe(false);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(false);
});

test('ivalid stone is success in mock chance 0.1', () => {
  const item = {
    grade: 'normal',
    type: 'cape',
    reinforced: 0,
  };
  
  const reinfocementStone = {
    type: 'ivaldi',
  };

  expect(isSuccessReinforced(item)).toBe(true);
  jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
  expect(isSuccessIvaldi(item, reinfocementStone)).toBe(true);
});

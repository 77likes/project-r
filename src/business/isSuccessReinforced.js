import { CHANCE_TYPE, SUCCESS_CHANCE} from '../informations/SuccessChance';

const defaultItem = {
  grade: 'normal',
  type: 'weapon',
  reinforced: 0,
};

const defaultReinfocementStone = {
  type: 'normal',
};

const getRandomIntInclusive = (min = 0, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getChance = (item = defaultItem, ofWhat = 'SUCCESS') => {
  const isUniqueItem = item.grade === 'unique';
  const itemChanceGrade = isUniqueItem ? item.grade : 'normal';
  const { type, reinforced } = item;

  if (isUniqueItem && ofWhat === 'IVALDI') {    
    return 0;
  }
  
  try {
    return SUCCESS_CHANCE[itemChanceGrade][type][CHANCE_TYPE[ofWhat]][reinforced];
  } catch (error) {
    throw new Error('Not valid item chance');
  }
}

const isSuccessReinforced = (item = defaultItem) => {
  const successChance = getChance(item);
  const successDice = getRandomIntInclusive(0, 100);
  
  return successDice <= successChance;
}

const isSuccessIvaldi = (item = defaultItem, reinforcementStone = defaultReinfocementStone) => {
  const isIvalid = reinforcementStone.type === 'ivaldi';

  if (!isIvalid) {
    return false;
  }

  const ivalidChance = getChance(item, 'IVALDI');
  const successDice = getRandomIntInclusive(0, 100);

  return successDice <= ivalidChance;
}

export {
  isSuccessReinforced,
  isSuccessIvaldi,
};

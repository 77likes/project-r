const normalArmorChance = {
  "successChance": {
    "0": 100,
    "1": 100,
    "2": 100,
    "3": 100,
    "4": 100,
    "5": 42,
    "6": 26,
    "7": 18,
    "8": 13,
    "9": 10,
    "10": 10,
    "11": 10,
    "12": 9,
    "13": 9,
    "14": 9,
    "15": 9,
    "16": 9,
    "17": 9,
    "18": 8,
    "19": 8,
  },
  "ivaldiChance": {
    "0": 45,
    "1": 40,
    "2": 35,
    "3": 30,
    "4": 25,
    "5": 20,
    "6": 15,
    "7": 10,
    "8": 10,
    "9": 10,
    "10": 10,
    "11": 10,
    "12": 10,
    "13": 10,
    "14": 10,
    "15": 10,
    "16": 10,
    "17": 10,
    "18": 10,
    "19": 10,
  }
};
const normalAccessaryChance = {
  "successChance": {
    "0": 100,
    "1": 74,
    "2": 40,
    "3": 29,
    "4": 23,
    "5": 19,
    "6": 15,
    "7": 13,
    "8": 11,
    "9": 10,
    "10": 10,
    "11": 10,
    "12": 9,
    "13": 9,
    "14": 9,
    "15": 9,
    "16": 9,
    "17": 8,
    "18": 8,
    "19": 8,
  },
  "ivaldiChance": {
    "0": 25,
    "1": 20,
    "2": 15,
    "3": 10,
    "4": 10,
    "5": 10,
    "6": 10,
    "7": 10,
    "8": 10,
    "9": 10,
    "10": 10,
    "11": 10,
    "12": 10,
    "13": 10,
    "14": 10,
    "15": 10,
    "16": 10,
    "17": 10,
    "18": 10,
    "19": 10,
  }
};

const chance = {
  "normal": {
    "weapon": {
      "successChance": {
        "0": 100,
        "1": 100,
        "2": 100,
        "3": 100,
        "4": 100,
        "5": 51,
        "6": 28,
        "7": 18,
        "8": 13,
        "9": 10,
        "10": 9,
        "11": 9,
        "12": 9,
        "13": 9,
        "14": 9,
        "15": 9,
        "16": 8,
        "17": 8,
        "18": 8,
        "19": 8,
      },
      "ivaldiChance": {
        "0": 45,
        "1": 40,
        "2": 35,
        "3": 30,
        "4": 25,
        "5": 20,
        "6": 15,
        "7": 10,
        "8": 10,
        "9": 10,
        "10": 10,
        "11": 10,
        "12": 10,
        "13": 10,
        "14": 10,
        "15": 10,
        "16": 10,
        "17": 10,
        "18": 10,
        "19": 10,
      }
    },
    "helmet": {
      ...normalArmorChance
    },
    "armor": {
      ...normalArmorChance
    },
    "glove": {
      ...normalArmorChance
    },
    "boots": {
      ...normalArmorChance
    },
    "cape": {
      "successChance": {
        "0": 100,
        "1": 83,
        "2": 44,
        "3": 29,
        "4": 23,
        "5": 19,
        "6": 15,
        "7": 13,
        "8": 11,
        "9": 10,
        "10": 10,
        "11": 10,
        "12": 9,
        "13": 9,
        "14": 9,
        "15": 9,
        "16": 9,
        "17": 8,
        "18": 8,
        "19": 8,
      },
      "ivaldiChance": {
        "0": 25,
        "1": 20,
        "2": 15,
        "3": 10,
        "4": 10,
        "5": 10,
        "6": 10,
        "7": 10,
        "8": 10,
        "9": 10,
        "10": 10,
        "11": 10,
        "12": 10,
        "13": 10,
        "14": 10,
        "15": 10,
        "16": 10,
        "17": 10,
        "18": 10,
        "19": 10,
      }
    },
    "necklace": {
      ...normalAccessaryChance
    },
    "earing": {
      ...normalAccessaryChance
    },
    "bracelet": {
      ...normalAccessaryChance
    },
    "ring": {
      ...normalAccessaryChance
    },
    "belt": {
      ...normalAccessaryChance
    },
    "whistle": {
      ...normalAccessaryChance
    },
    "mark": {
      ...normalAccessaryChance
    },
  },
  "unique": {
    "whistle": {
      "successChance": {
        "0": 100,
        "1": 83,
        "2": 52,
        "3": 37,
        "4": 28,
        "5": 23,
        "6": 18,
        "7": 15,
        "8": 13,
        "9": 11,
        "10": 11,
        "11": 11,
        "12": 10,
        "13": 10,
        "14": 9,
        "15": 9,
        "16": 9,
        "17": 9,
        "18": 8,
        "19": 8,
      }
    },
    "mark": {
      "successChance": {
        "0": 100,
        "1": 81,
        "2": 51,
        "3": 37,
        "4": 28,
        "5": 22,
        "6": 18,
        "7": 15,
        "8": 13,
        "9": 11,
        "10": 11,
        "11": 10,
        "12": 10,
        "13": 10,
        "14": 9,
        "15": 9,
        "16": 9,
        "17": 9,
        "18": 8,
        "19": 8,
      }
    }
  }
}

export default chance;

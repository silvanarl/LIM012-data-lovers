import {
  coincidencias,
  typeFilter,
  orderAZ,
  orderMxCP
} from '../src/data.js';

const data = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the rays of sun, the seed grows progressively larger.',
    img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
    size: {
      height: '0.71 m',
      weight: '6.9 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.69',
    stats: {
      'base-attack': '118',
      'base-defense': '111',
      'base-stamina': '128',
      'max-cp': '1115',
      'max-hp': '113',
    },
    resistant: [
      'water',
      'electric',
      'grass',
      'fighting',
      'fairy',
    ],
    weaknesses: [
      'fire',
      'ice',
      'flying',
      'psychic',
    ],
    'quick-move':
    [
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
      {
        name: 'tackle',
        type: 'normal',
        'base-damage': '5',
        energy: '5',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'seed bomb',
        type: 'grass',
        'base-damage': '55',
        energy: '-33',
        'move-duration-seg': '2.1',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [{
        num: '002',
        name: 'ivysaur',
        'candy-cost': '25',
        'next-evolution': [{
          num: '003',
          name: 'venusaur',
          'candy-cost': '100',
        }],
      }],
    },
  },
  {
    num: '002',
    name: 'ivysaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: 'There is an outbreak on the back of this Pokémon. To support its weight, the legs of Ivysaur and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it is a sign that the bud will bloom into a large flower soon.',
    img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
    size: {
      height: '0.99 m',
      weight: '13.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    encounter: {
      'base-flee-rate': '0.07',
      'base-capture-rate': '0.1',
    },
    'spawn-chance': '0.042',
    stats: {
      'base-attack': '151',
      'base-defense': '143',
      'base-stamina': '155',
      'max-cp': '1699',
      'max-hp': '134',
    },
    resistant: [
      'water',
      'electric',
      'grass',
      'fighting',
      'fairy',
    ],
    weaknesses: [
      'fire',
      'ice',
      'flying',
      'psychic',
    ],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
      {
        name: 'power whip',
        type: 'grass',
        'base-damage': '90',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'next-evolution': [{
        num: '003',
        name: 'venusaur',
        'candy-cost': '100',
      }],
      'prev-evolution': [{
        num: '001',
        name: 'bulbasaur',
        'candy-cost': '25',
      }],
    },
  },
  {
    num: '003',
    name: 'venusaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: 'There is a large flower on the back of Venusaur. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The aroma of the flower soothes the emotions of people.',
    img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
    size: {
      height: '2.01 m',
      weight: '100.0 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'grass',
      'poison',
    ],
    encounter: {
      'base-flee-rate': '0.05',
      'base-capture-rate': '0.05',
    },
    'spawn-chance': '0.017',
    stats: {
      'base-attack': '198',
      'base-defense': '189',
      'base-stamina': '190',
      'max-cp': '2720',
      'max-hp': '162',
    },
    resistant: [
      'water',
      'electric',
      'grass',
      'fighting',
      'fairy',
    ],
    weaknesses: [
      'fire',
      'ice',
      'flying',
      'psychic',
    ],
    'quick-move': [
      {
        name: 'razor leaf',
        type: 'grass',
        'base-damage': '13',
        energy: '7',
        'move-duration-seg': '1',
      },
      {
        name: 'vine whip',
        type: 'grass',
        'base-damage': '7',
        energy: '6',
        'move-duration-seg': '0.6',
      },
    ],
    'special-attack': [
      {
        name: 'sludge bomb',
        type: 'poison',
        'base-damage': '80',
        energy: '-50',
        'move-duration-seg': '2.3',
      },
      {
        name: 'petal blizzard',
        type: 'grass',
        'base-damage': '110',
        energy: '-100',
        'move-duration-seg': '2.6',
      },
      {
        name: 'solar beam',
        type: 'grass',
        'base-damage': '180',
        energy: '-100',
        'move-duration-seg': '4.9',
      },
    ],
    egg: 'not in eggs',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'bulbasaur candy',
      'prev-evolution': [{
        num: '002',
        name: 'ivysaur',
        'candy-cost': '100',
        'prev-evolution': [{
          num: '001',
          name: 'bulbasaur',
          'candy-cost': '25',
        }],
      }],
    },
  },
  {
    num: '004',
    name: 'charmander',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    about: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.',
    img: 'https://www.serebii.net/pokemongo/pokemon/004.png',
    size: {
      height: '0.61 m',
      weight: '8.5 kg',
    },
    'pokemon-rarity': 'normal',
    type: [
      'fire',
    ],
    encounter: {
      'base-flee-rate': '0.1',
      'base-capture-rate': '0.2',
    },
    'spawn-chance': '0.253',
    stats: {
      'base-attack': '116',
      'base-defense': '93',
      'base-stamina': '118',
      'max-cp': '980',
      'max-hp': '105',
    },
    resistant: [
      'fire',
      'grass',
      'ice',
      'bug',
      'steel',
    ],
    weaknesses: [
      'water',
      'ground',
      'rock',
    ],
    'quick-move': [
      {
        name: 'ember',
        type: 'fire',
        'base-damage': '10',
        energy: '10',
        'move-duration-seg': '1',
      },
      {
        name: 'scratch',
        type: 'normal',
        'base-damage': '6',
        energy: '4',
        'move-duration-seg': '0.5',
      },
    ],
    'special-attack': [
      {
        name: 'flame charge',
        type: 'fire',
        'base-damage': '70',
        energy: '-33',
        'move-duration-seg': '3.8',
      },
      {
        name: 'flame burst',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.6',
      },
      {
        name: 'flamethrower',
        type: 'fire',
        'base-damage': '70',
        energy: '-50',
        'move-duration-seg': '2.2',
      },
    ],
    egg: '2 km',
    'buddy-distance-km': '3',
    evolution: {
      candy: 'charmander candy',
      'next-evolution': [{
        num: '005',
        name: 'charmeleon',
        'candy-cost': '25',
        'next-evolution': [{
          num: '006',
          name: 'charizard',
          'candy-cost': '100',
        }],
      }],
    },
  },
  {
    "num": "005",
    "name": "charmeleon",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
    "size": {
      "height": "1.09 m",
      "weight": "19.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire"
    ],
    "encounter": {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.1"
    },
    "spawn-chance": "0.012",
    "stats": {
      "base-attack": "158",
      "base-defense": "126",
      "base-stamina": "151",
      "max-cp": "1653",
      "max-hp": "131"
    },
    "resistant": [
      "fire",
      "grass",
      "ice",
      "bug",
      "steel"
    ],
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ],
    "quick-move": [
      {
        "name": "ember",
        "type": "fire",
        "base-damage": "10",
        "energy": "10",
        "move-duration-seg": "1"
      },
      {
        "name": "fire fang",
        "type": "fire",
        "base-damage": "11",
        "energy": "8",
        "move-duration-seg": "0.9"
      },
      {
        "name": "scratch",
        "type": "normal",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "fire punch",
        "type": "fire",
        "base-damage": "55",
        "energy": "-33",
        "move-duration-seg": "2.2"
      },
      {
        "name": "flame burst",
        "type": "fire",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2.6"
      },
      {
        "name": "flamethrower",
        "type": "fire",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2.2"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "charmander candy",
      "next-evolution": [{
        "num": "006",
        "name": "charizard",
        "candy-cost": "100"
      }],
      "prev-evolution": [{
        "num": "004",
        "name": "charmander",
        "candy-cost": "25"
      }]
    }
  },
  {
    "num": "006",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    "img": "https://www.serebii.net/pokemongo/pokemon/006.png",
    "size": {
      "height": "1.70 m",
      "weight": "90.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "fire",
      "flying"
    ],
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.05"
    },
    "spawn-chance": "0.0031",
    "stats": {
      "base-attack": "223",
      "base-defense": "173",
      "base-stamina": "186",
      "max-cp": "2889",
      "max-hp": "158"
    },
    "resistant": [
      "fire",
      "grass",
      "fighting",
      "bug",
      "steel"
    ],
    "weaknesses": [
      "water",
      "electric",
      "rock"
    ],
    "quick-move": [
      {
        "name": "fire spin",
        "type": "fire",
        "base-damage": "14",
        "energy": "10",
        "move-duration-seg": "1.1"
      },
      {
        "name": "air slash",
        "type": "flying",
        "base-damage": "14",
        "energy": "10",
        "move-duration-seg": "1.2"
      },
      {
        "name": "ember",
        "type": "fire",
        "base-damage": "10",
        "energy": "10",
        "move-duration-seg": "1"
      },
      {
        "name": "wing attack",
        "type": "flying",
        "base-damage": "8",
        "energy": "9",
        "move-duration-seg": "0.8"
      }
    ],
    "special-attack": [
      {
        "name": "fire blast",
        "type": "fire",
        "base-damage": "140",
        "energy": "-100",
        "move-duration-seg": "4.2"
      },
      {
        "name": "dragon claw",
        "type": "dragon",
        "base-damage": "50",
        "energy": "-33",
        "move-duration-seg": "1.7"
      },
      {
        "name": "overheat",
        "type": "fire",
        "base-damage": "160",
        "energy": "-100",
        "move-duration-seg": "4"
      },
      {
        "name": "flamethrower",
        "type": "fire",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "2.2"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "charmander candy",
      "prev-evolution": [{
        "num": "005",
        "name": "charmeleon",
        "candy-cost": "100",
        "prev-evolution": [{
          "num": "004",
          "name": "charmander",
          "candy-cost": "25"
        }]
      }]
    }
  },
  {
    "num": "007",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    "img": "https://www.serebii.net/pokemongo/pokemon/007.png",
    "size": {
      "height": "0.51 m",
      "weight": "9.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "water"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": "0.58",
    "stats": {
      "base-attack": "94",
      "base-defense": "121",
      "base-stamina": "127",
      "max-cp": "946",
      "max-hp": "112"
    },
    "resistant": [
      "fire",
      "water",
      "ice",
      "steel"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "quick-move": [
      {
        "name": "bubble",
        "type": "water",
        "base-damage": "12",
        "energy": "14",
        "move-duration-seg": "1.2"
      },
      {
        "name": "tackle",
        "type": "normal",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "aqua jet",
        "type": "water",
        "base-damage": "45",
        "energy": "-33",
        "move-duration-seg": "2.6"
      },
      {
        "name": "aqua tail",
        "type": "water",
        "base-damage": "50",
        "energy": "-33",
        "move-duration-seg": "1.9"
      },
      {
        "name": "water pulse",
        "type": "water",
        "base-damage": "70",
        "energy": "-50",
        "move-duration-seg": "3.2"
      }
    ],
    "egg": "2 km",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "squirtle candy",
      "next-evolution": [{
        "num": "008",
        "name": "wartortle",
        "candy-cost": "25",
        "next-evolution": [{
          "num": "009",
          "name": "blastoise",
          "candy-cost": "100"
        }]
      }]
    }
  },
  {
    "num": "008",
    "name": "wartortle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    "img": "https://www.serebii.net/pokemongo/pokemon/008.png",
    "size": {
      "height": "0.99 m",
      "weight": "22.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "water"
    ],
    "encounter": {
      "base-flee-rate": "0.07",
      "base-capture-rate": "0.1"
    },
    "spawn-chance": "0.034",
    "stats": {
      "base-attack": "126",
      "base-defense": "155",
      "base-stamina": "153",
      "max-cp": "1488",
      "max-hp": "132"
    },
    "resistant": [
      "fire",
      "water",
      "ice",
      "steel"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "quick-move": [
      {
        "name": "water gun",
        "type": "water",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      },
      {
        "name": "bite",
        "type": "dark",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "aqua jet",
        "type": "water",
        "base-damage": "45",
        "energy": "-33",
        "move-duration-seg": "2.6"
      },
      {
        "name": "ice beam",
        "type": "ice",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "3.3"
      },
      {
        "name": "hydro pump",
        "type": "water",
        "base-damage": "130",
        "energy": "-100",
        "move-duration-seg": "3.3"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "squirtle candy",
      "next-evolution": [{
        "num": "009",
        "name": "blastoise",
        "candy-cost": "100"
      }],
      "prev-evolution": [{
        "num": "007",
        "name": "squirtle",
        "candy-cost": "25"
      }]
    }
  },
  {
    "num": "009",
    "name": "blastoise",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    "img": "https://www.serebii.net/pokemongo/pokemon/009.png",
    "size": {
      "height": "1.60 m",
      "weight": "85.5 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "water"
    ],
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.05"
    },
    "spawn-chance": "0.0067",
    "stats": {
      "base-attack": "171",
      "base-defense": "207",
      "base-stamina": "188",
      "max-cp": "2466",
      "max-hp": "160"
    },
    "resistant": [
      "fire",
      "water",
      "ice",
      "steel"
    ],
    "weaknesses": [
      "electric",
      "grass"
    ],
    "quick-move": [
      {
        "name": "water gun",
        "type": "water",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      },
      {
        "name": "bite",
        "type": "dark",
        "base-damage": "6",
        "energy": "4",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "flash cannon",
        "type": "steel",
        "base-damage": "100",
        "energy": "-100",
        "move-duration-seg": "2.7"
      },
      {
        "name": "ice beam",
        "type": "ice",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "3.3"
      },
      {
        "name": "hydro pump",
        "type": "water",
        "base-damage": "130",
        "energy": "-100",
        "move-duration-seg": "3.3"
      }
    ],
    "egg": "not in eggs",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "squirtle candy",
      "prev-evolution": [{
        "num": "008",
        "name": "wartortle",
        "candy-cost": "100",
        "prev-evolution": [{
          "num": "007",
          "name": "squirtle",
          "candy-cost": "25"
        }]
      }]
    }
  },
  {
    "num": "010",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    "img": "https://www.serebii.net/pokemongo/pokemon/010.png",
    "size": {
      "height": "0.30 m",
      "weight": "2.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "bug"
    ],
    "encounter": {
      "base-flee-rate": "0.2",
      "base-capture-rate": "0.5"
    },
    "spawn-chance": "3.032",
    "stats": {
      "base-attack": "55",
      "base-defense": "55",
      "base-stamina": "128",
      "max-cp": "437",
      "max-hp": "113"
    },
    "resistant": [
      "grass",
      "fighting",
      "ground"
    ],
    "weaknesses": [
      "fire",
      "flying",
      "rock"
    ],
    "quick-move": [
      {
        "name": "bug bite",
        "type": "bug",
        "base-damage": "5",
        "energy": "6",
        "move-duration-seg": "0.5"
      },
      {
        "name": "tackle",
        "type": "normal",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
      "name": "struggle",
      "type": "normal",
      "base-damage": "35",
      "energy": "-33",
      "move-duration-seg": "2.2"
    }],
    "egg": "2 km",
    "buddy-distance-km": "1",
    "evolution": {
      "candy": "caterpie candy",
      "next-evolution": [{
        "num": "011",
        "name": "metapod",
        "candy-cost": "12",
        "next-evolution": [{
          "num": "012",
          "name": "butterfree",
          "candy-cost": "50"
        }]
      }]
    }
  },
];
describe('coincidencias', () => {
  it('is a function', () => {
    expect(typeof coincidencias).toBe('function');
  });
});
describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('typeFilter', () => {
  it('is a function', () => {
    expect(typeof typeFilter).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(typeFilter()).toBe('OMG');
  });
});

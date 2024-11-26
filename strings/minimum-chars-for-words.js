const minimumCharactersForWords = (words) => {
  const maximumCharacterFrequencies = {};

  for (const word of words) {
    const characterFrequencies = countCharacterFrequencies(word);
    updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);
  }

  return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
};

const countCharacterFrequencies = (string) => {
  const characterFrequencies = {};

  for (const character of string) {
    if (!(character in characterFrequencies)) {
      characterFrequencies[character] = 0;
    }

    characterFrequencies[character] += 1;
  }

  return characterFrequencies;
};

const updateMaximumFrequencies = (frequencies, maximumFrequencies) => {
  for (const character in frequencies) {
    const frequency = frequencies[character];

    if (character in maximumFrequencies) {
      maximumFrequencies[character] = Math.max(
        frequency,
        maximumFrequencies[character]
      );
    } else {
      maximumFrequencies[character] = frequency;
    }
  }
};

const makeArrayFromCharacterFrequencies = (characterFrequencies) => {
  const characters = [];

  for (const character in characterFrequencies) {
    const frequency = characterFrequencies[character];

    for (let idx = 0; idx < frequency; idx++) {
      characters.push(character);
    }
  }
  return characters;
};

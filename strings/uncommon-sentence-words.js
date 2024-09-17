const uncommonSentenceWords = (sentence1, sentence2) => {
  const sentence1Words = sentence1.split(" ");
  const sentence2Words = sentence2.split(" ");

  const wordCount = {};

  sentence1Words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  sentence2Words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const uncommonWords = Object.keys(wordCount).filter(
    (word) => wordCount[word] === 1
  );

  return uncommonWords;
};

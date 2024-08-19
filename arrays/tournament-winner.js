function tournamentWinner(competitions, results) {
    const winners = {};
    let competitionPointer = 0;
  
    while (competitionPointer < results.length) {
      let competition = competitions[competitionPointer];
      let winner;
      if (results[competitionPointer] === 1) {
        winner = competition[0];
      } else {
        winner = competition[1];
      }
      if (winner in winners) {
        winners[winner] += 1
      } else {
        winners[winner] = 1;
      }
      competitionPointer++
    }
  
    let winningLanguage = '';
    let maxPoints = 0;
  
    for (const language in winners) {
      if (winners.hasOwnProperty(language)) {
        const points = winners[language];
        if (points > maxPoints) {
          maxPoints = points;
          winningLanguage = language;
        }
      }
    }
    
    return winningLanguage;
  }  
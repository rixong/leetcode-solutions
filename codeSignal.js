function codingScoreReportPercent(scores) {
  const sortedScores = scores.sort();
  const totals = [
    { name: 'Poor', total: 0, rank: 1 },
    { name: 'Fair', total: 0, rank: 2 },
    { name: 'Good', total: 0, rank: 3 },
    { name: 'Excellent', total: 0, rank: 4 },
    { name: 'Elite', total: 0, rank: 5 },
  ];

  for (let i = 0; i < sortedScores.length; i += 1) {
    if (sortedScores[i] >= 300 && sortedScores[i] < 600) {
      totals.find((ele) => ele.name === 'Poor').total += 1;
    }
    if (sortedScores[i] >= 600 && sortedScores[i] < 699) {
      totals.find((ele) => ele.name === 'Fair').total += 1;
    }
    if (sortedScores[i] >= 700 && sortedScores[i] < 749) {
      totals.find((ele) => ele.name === 'Good').total += 1;
    }
    if (sortedScores[i] >= 750 && sortedScores[i] < 799) {
      totals.find((ele) => ele.name === 'Excellent').total += 1;
    }
    if (sortedScores[i] >= 800) {
      totals.find((ele) => ele.name === 'Elite').total += 1;
    }
  }

  // double sort function
  function compare(a, b) {
    if (a.total < b.total) return 1;
    if (a.total > b.total) return -1;
    if (a.rank > b.rank) return -1;
    if (a.rank < b.rank) return 1;
    return null;
  }

  totals.sort((a, b) => compare(a, b));

  const result = [];

  totals.forEach((ele) => {
    if (ele.total) {
      result.push(`${ele.name}: ${((ele.total / scores.length) * 100).toFixed(2)}`);
    }
  });

  return result;
}

console.log(codingScoreReportPercent([100, 150, 330, 350, 723, 730, 825]));

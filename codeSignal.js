function scoreReportPercent(scores) {
  const sortedScores = scores;

  const totals = [
    { name: 'Failing', total: 0, rank: 1 },
    { name: 'Emerging', total: 0, rank: 2 },
    { name: 'Passing', total: 0, rank: 3 },
    { name: 'Meeting', total: 0, rank: 4 },
    { name: 'Exceeding', total: 0, rank: 5 },
  ];

  for (let i = 0; i < sortedScores.length; i += 1) {
    if (sortedScores[i] >= 0 && sortedScores[i] < 60) {
      totals.find((ele) => ele.name === 'Failing').total += 1;
    }
    if (sortedScores[i] >= 61 && sortedScores[i] < 70) {
      totals.find((ele) => ele.name === 'Emerging').total += 1;
    }
    if (sortedScores[i] >= 71 && sortedScores[i] < 80) {
      totals.find((ele) => ele.name === 'Passing').total += 1;
    }
    if (sortedScores[i] >= 81 && sortedScores[i] < 90) {
      totals.find((ele) => ele.name === 'Meeting').total += 1;
    }
    if (sortedScores[i] >= 91) {
      totals.find((ele) => ele.name === 'Exceeding').total += 1;
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

console.log(scoreReportPercent([92, 83, 65, 63]));

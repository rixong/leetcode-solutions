function scoreReportPercent(scores) {

  const categories = [
    { name: 'Failing', total: 0, rank: 1, min: 0, max: 60 },
    { name: 'Emerging', total: 0, rank: 2, min: 61, max: 70 },
    { name: 'Passing', total: 0, rank: 3, min: 71, max: 80 },
    { name: 'Meeting', total: 0, rank: 4, min: 81, max: 90 },
    { name: 'Exceeding', total: 0, rank: 5, min: 91, max: 100 },
  ];

  for (let i = 0; i < scores.length; i += 1) {
    const idx = categories
      .findIndex((category) => scores[i] >= category.min && scores[i] <= category.max);
    categories[idx].total += 1;
  }

  console.log(categories)

  function compare(a, b) {
    if (a.total < b.total) return 1;
    if (a.total > b.total) return -1;
    if (a.rank > b.rank) return -1;
    if (a.rank < b.rank) return 1;
    return null;
  }

  categories.sort((a, b) => compare(a, b));

  console.log(categories)



}

console.log(scoreReportPercent([92, 83, 65, 63]));

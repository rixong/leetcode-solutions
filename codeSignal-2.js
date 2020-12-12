function scoreReportPercent(scores) {

  const totals = [
    { name: 'Failing', total: 0, rank: 1, min: 0, max: 60 },
    { name: 'Emerging', total: 0, rank: 2, min: 61, max: 70 },
    { name: 'Passing', total: 0, rank: 3, min: 71, max: 80 },
    { name: 'Meeting', total: 0, rank: 4, min: 81, max: 90 },
    { name: 'Exceeding', total: 0, rank: 5, min: 91, max: 100 },
  ];

  for (let i = 0; i < scores.length; i += 1) {
    
  }

}

console.log(scoreReportPercent([92, 83, 65, 63]));

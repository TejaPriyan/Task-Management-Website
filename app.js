// Task Management System - Chart & Dashboard Logic
document.addEventListener('DOMContentLoaded', function () {
  var chartElem = document.getElementById('chart');
  if (!chartElem || typeof Chart === 'undefined') return;

  var ctx = chartElem.getContext('2d');
  var data = {
    labels: ['Media', 'Document', 'Apps'],
    datasets: [
      {
        label: 'Storage',
        data: [16812, 25153, 800],
        backgroundColor: ['#ffc0ca', '#dec1f2', '#f9d89c']
      }
    ]
  };

  var config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: false },
        tooltip: { enabled: true }
      }
    }
  };

  new Chart(ctx, config);
});

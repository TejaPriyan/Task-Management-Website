var ctx = document.getElementById('chart').getContext('2d');

const data = {
  labels: ['Media', 'Document', 'Apps'],
  datasets: [
    {
      label: 'Storage',
      data: [
        '16812',
        '25153',
        '800'
      ],
      backgroundColor: [
        '#ffc0ca',
        '#dec1f2',
        '#f9d89c'
      ]
    }
  ]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip:{
        enabled:false
      }
    }
  }
};

var chart = new Chart(ctx, config);
var ctx = document.getElementById('chart').getContext('2d');

const data = {
  labels: ['Media', 'Document', 'Apps'],
  datasets: [
    {
      label: 'Storage',
      data: [
        '16812',
        '25153',
        '800'
      ],
      backgroundColor: [
        '#ffc0ca',
        '#dec1f2',
        '#f9d89c'
      ]
    }
  ]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip:{
        enabled:false
      }
    }
  }
};

var chart = new Chart(ctx, config);

const ctx1 = document.getElementById('douChart').getContext('2d');

const douChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Remaing Balance', 'Total Budget', 'Total Expense'],
        datasets: [{
            label: 'Fund Management',
            data: [12, 32, 44],

            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                
            ],
            borderColor: [
                'white',
                'white',
                
            ],

            borderWidth: 1
        }]


    },
    options: {
        
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    

});

// let chartData = [total.innerText, income, expense]
// console.log(chartData)
// douChart.data.data.innerText = chartData





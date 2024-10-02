const ctx = document.getElementById('statisticsChart').getContext('2d');
const statisticsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['December 2023', 'January 2024', 'February 2024', 'March 2024', 'April 2024', 'May 2024', 'June 2024', 'July 2024', 'August 2024', 'September 2024'],
        datasets: [
            {
                label: 'Downloads',
                data: [18, 97, 355, 439, 1633, 1203, 3062, 4238, 7206, 12797],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Views',
                data: [69, 188, 838, 791, 3085, 5923, 5406, 9256, 17801, 23405],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
                tension: 0.1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'collecting monthly data: october 2024'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Count'
                }
            }
        }
    }
});
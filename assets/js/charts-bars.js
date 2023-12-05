/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
const barConfig = {
    type: 'bar',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        datasets: [{
                label: 'Entrer',
                backgroundColor: 'blue',
                // borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [85, 14, 52, 74, 33, 90, 70, 85, 55, 22, 68, 54, 5],
            },
            {
                label: 'Sortie',
                backgroundColor: 'purple',
                // borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [52, 14, 52, 74, 33, 90, 70, 85, 55, 22, 68, 54, 5],
            },
            {
                label: 'EN stock',
                backgroundColor: 'red',
                // borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [66, 33, 43, 12, 54, 62, 84, 52, 15, 48, 25, 45],
            },
        ],
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
    },
}

const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)
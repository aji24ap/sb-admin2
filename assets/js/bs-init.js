document.addEventListener('DOMContentLoaded', () => {
	const charts = document.querySelectorAll('[data-bss-chart]');
  
	for (const chart of charts) {
	  chart.chart = new Chart(chart, JSON.parse(chart.dataset.bssChart));
	}
});
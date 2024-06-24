// Imports
import data from './data.js';

// Elements
const citySelect = document.getElementById('city-select');
const statisticsContainer = document.getElementById('statistics');
let selectedCity = '';

// Event Listeners
citySelect.addEventListener('change', () => {
  selectedCity = citySelect.value;
  statisticsContainer.classList.add('statistics');
  displayStatistics();
});

// Functions
const displayStatistics = () => {
  statisticsContainer.innerHTML = formatStatistics();
};

const formatStatistics = () => {
  const stats = data[selectedCity];
  let html = '';
  for (const stat in stats) {
    html += `
      <div class="stat-item">
        <span class="stat-label">${stat}:</span>
        <span class="stat-value">${stats[stat]}</span>
      </div>`;
  }
  return html;
};

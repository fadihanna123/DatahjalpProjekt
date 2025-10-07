const pageLoadingEl = document.getElementById('pageLoading');
const containerEl = document.getElementById('container');

const initPage = () => {
  setTimeout(() => {
    pageLoadingEl.style.display = 'none';
    containerEl.style.display = 'block';
  }, 1000);
};

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-TYYFG6B27M');

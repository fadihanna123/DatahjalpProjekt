const pageLoadingEl = document.getElementById('pageLoading');
const containerEl = document.getElementById('container');

const initPage = async () => {
  await Promise.all([
    loadHTML('./inc/header.html', 'header-placeholder'),
    loadHTML('./inc/footer.html', 'footer-placeholder'),
  ]);

  setTimeout(() => {
    pageLoadingEl.style.display = 'none';
    containerEl.style.display = 'block';
  }, 500);
};

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-TYYFG6B27M');

// Function to load HTML into an element
const loadHTML = async (file, elementId) => {
  try {
    const response = await fetch(file);
    const html = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${file}:`, error);
  }
};

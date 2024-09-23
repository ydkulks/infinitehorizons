// Tailwind dropdown toggle functionality
const dropdown = document.getElementById('dropdown')
const dropdownContent = document.getElementById('dropdownContent')

dropdown.addEventListener('mouseenter', () => {
  dropdownContent.classList.remove('hidden');
});

dropdown.addEventListener('mouseleave', () => {
  dropdownContent.classList.add('hidden');
});

// JavaScript code to change the text every second
window.onload = function() {
  const places = ["New York", "Tokyo", "Paris", "Sydney", "Berlin", "Bangalore"]; // Array of places
  let index = 0;

  function updatePlace() {
    const placeElement = document.getElementById("place");
    placeElement.textContent = places[index];
    index = (index + 1) % places.length;
  }

  // update text every 0.2s (200ms)
  setInterval(updatePlace, 200);
};

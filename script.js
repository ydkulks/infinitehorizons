// Tailwind dropdown toggle functionality
const dropdown = document.getElementById('dropdown')
const dropdownContent = document.getElementById('dropdownContent')

dropdown.addEventListener('mouseenter', () => {
  dropdownContent.classList.remove('hidden');
});

dropdown.addEventListener('mouseleave', () => {
  dropdownContent.classList.add('hidden');
});

// Mobile
const dropdownMobile = document.getElementById('dropdownMobile')
const dropdownContentMobile = document.getElementById('dropdownContentMobile')
dropdownMobile.addEventListener('mouseenter', () => {
  dropdownContentMobile.classList.remove('hidden');
});

dropdownMobile.addEventListener('mouseleave', () => {
  dropdownContentMobile.classList.add('hidden');
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

function StaticStarRating(rating, maxRating, uniqueId) {
  // Ensure rating is within valid range
  const validRating = Math.min(Math.max(rating, 0), maxRating);

  const container = document.createElement('div');
  container.className = 'flex';

  for (let index = 0; index < maxRating; index++) {
    const fillPercentage = Math.min(Math.max((validRating - index) * 100, 0), 100);

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'w-4 h-4');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', svgNS);
    svg.setAttribute('aria-hidden', 'true');

    const defs = document.createElementNS(svgNS, 'defs');
    const linearGradient = document.createElementNS(svgNS, 'linearGradient');
    // Use the uniqueId to ensure gradients have unique IDs
    linearGradient.setAttribute('id', `star-fill-${uniqueId}-${index}`);
    linearGradient.setAttribute('x1', '0%');
    linearGradient.setAttribute('y1', '0%');
    linearGradient.setAttribute('x2', '100%');
    linearGradient.setAttribute('y2', '0%');

    const stop1 = document.createElementNS(svgNS, 'stop');
    stop1.setAttribute('offset', `${fillPercentage}%`);
    // stop1.setAttribute('stop-color', 'black');
    stop1.setAttribute('stop-color', '#536493');

    const stop2 = document.createElementNS(svgNS, 'stop');
    stop2.setAttribute('offset', `${fillPercentage}%`);
    stop2.setAttribute('stop-color', '#FFF1DB');

    linearGradient.appendChild(stop1);
    linearGradient.appendChild(stop2);
    defs.appendChild(linearGradient);

    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute(
      'd',
      'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
    );
    // path.setAttribute('stroke', 'black');
    path.setAttribute('stroke', '#536493');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    // Use the uniqueId in the `url(#id)` reference
    path.setAttribute('fill', `url(#star-fill-${uniqueId}-${index})`);

    svg.appendChild(defs);
    svg.appendChild(path);
    container.appendChild(svg);
  }

  const ratingText = document.createElement('span');
  ratingText.className = 'ml-2 text-sm text-[#536493]';
  ratingText.textContent = `${validRating.toFixed(1)}`;

  container.appendChild(ratingText);

  return container;
}

// Render the star rating component inside the #star-rating div
const us_rating = StaticStarRating(4.5, 5, "us");
const in_rating = StaticStarRating(4.8, 5, "in");
const fr_rating = StaticStarRating(4.2, 5, "fr");
const gr_rating = StaticStarRating(4, 5, "gr");
const jp_rating = StaticStarRating(4.5, 5, "jp");
const as_rating = StaticStarRating(3.5, 5, "as");
const uk_rating = StaticStarRating(3.5, 5, "uk");
const iy_rating = StaticStarRating(3.5, 5, "iy");
const uae_rating = StaticStarRating(4.6, 5, "uae");
document.getElementById('US-Rating').appendChild(us_rating);
document.getElementById('IN-Rating').appendChild(in_rating);
document.getElementById('FR-Rating').appendChild(fr_rating);
document.getElementById('GR-Rating').appendChild(gr_rating);
document.getElementById('JP-Rating').appendChild(jp_rating);
document.getElementById('AS-Rating').appendChild(as_rating);
document.getElementById('UK-Rating').appendChild(uk_rating);
document.getElementById('IY-Rating').appendChild(iy_rating);
document.getElementById('UAE-Rating').appendChild(uae_rating);

// Form validation
var form = document.getElementById('bookingForm')
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let current = new Date();
  let startDateElement = document.getElementById('start');
  let endDateElement = document.getElementById('end');
  let descElement = document.getElementById('desc');

  let startDate = new Date(startDateElement.value);
  let endDate = new Date(endDateElement.value);
  let desc = descElement.value;

  function errMsg(id, msg) {
    let errorMessage = document.getElementById(id);
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
  }

  if (startDate <= current) {
    errMsg('startError', 'Please select a date that is after today.')
  } else {
    let startError = document.getElementById('startError');
    startError.style.display = 'none'; // Hide error message for now, actual handling of success varies
  }

  if (endDate <= startDate) {
    errMsg('endError', 'Please select a date that is after start date.')
  } else {
    let endError = document.getElementById('endError');
    endError.style.display = 'none'; // Hide error message for now, actual handling of success varies
  }

  if (desc.length < 50 || desc.length > 500) {
    errMsg('descriptionError', 'Please wite the description within 50 to 500 characters.')
  } else {
    let descError = document.getElementById('descriptionError');
    descError.style.display = 'none'; // Hide error message for now, actual handling of success varies
  }


  if (startDate >= current && endDate > startDate && (desc.length > 50 && desc.length < 500)) {
    form.reset()
    alert("Ticket booked successfully!")
  }
});

// Toggle Menu
function toggleMenu() {
  const menu = document.getElementById("menu")
  menu.classList.toggle("hidden")
}

// Sticky nav bar
window.onscroll = function() { makeNavbarSticky(); };

function makeNavbarSticky() {
  const navbar = document.getElementById("navbar");
  const navbar_sm = document.getElementById("navbar_small");
  const menu = document.getElementById("menu");
  const stickyPoint = 100; // Change this value to set the distance
  // xl:mx-12
  if (window.scrollY >= stickyPoint) {
    navbar.classList.add("sticky");
    // navbar.classList.remove("xl:mx-12")
    // Small
    navbar_sm.classList.add("sticky");
    // navbar_sm.classList.remove("xl:mx-12")
    // Menu
    menu.classList.add("sticky");
    // menu.classList.remove("xl:mx-12")
  } else {
    navbar.classList.remove("sticky");
    // navbar.classList.add("xl:mx-12")
    // Small
    navbar_sm.classList.remove("sticky");
    // navbar_sm.classList.add("xl:mx-12")
    // Menu
    menu.classList.remove("sticky");
    // menu.classList.add("xl:mx-12")
  }
}

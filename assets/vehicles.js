// Utility to generate random cars
function generateCars(count, type) {
  const models = ["GLC", "Audi A6", "Corolla Altis", "Ford Explorer", "BMW X5", "Mercedes C-Class", "Honda Civic", "Toyota Camry", "Nissan Altima", "Range Rover Evoque"];
  const fuels = ["Petrol", "Diesel", "Hybrid", "Electric"];
  const trans = ["Automatic", "Manual", "CVT"];
  const badges = ["Low Mileage", "Great Price", "Certified", "New Arrival"];

  let cars = [];
  for (let i = 0; i < count; i++) {
    const model = models[Math.floor(Math.random() * models.length)];
    const fuel = fuels[Math.floor(Math.random() * fuels.length)];
    const tran = trans[Math.floor(Math.random() * trans.length)];
    const badge = badges[Math.floor(Math.random() * badges.length)];
    const price = "$" + (20000 + Math.floor(Math.random() * 80000)).toLocaleString();
    const miles = `${Math.floor(Math.random() * 50000)} Miles`;

    cars.push({
      title: `${model} – ${2020 + Math.floor(Math.random() * 5)}`,
      subtitle: `${tran} ${fuel} Edition`,
      price,
      miles,
      fuel,
      trans: tran,
      badge,
      images: [
        `https://picsum.photos/400/250?random=${Math.floor(Math.random() * 1000)}`,
        `https://picsum.photos/400/250?random=${Math.floor(Math.random() * 1000)}`,
        `https://picsum.photos/400/250?random=${Math.floor(Math.random() * 1000)}`
      ]
    });
  }
  return cars;
}

// Generate big dataset
const carsData = {
  stock: generateCars(12, "stock"),
  new: generateCars(12, "new"),
  used: generateCars(12, "used")
};

const cardsContainer = document.getElementById("cards-container");
let activeTab = "stock";
let autoScrollInterval;

// Render cards
function renderCards(tab) {
  cardsContainer.innerHTML = "";
  carsData[tab].forEach((car) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl shadow-sm border overflow-hidden w-72 flex-shrink-0 group relative";

    card.innerHTML = `
      <div class="relative">
        <img src="${car.images[0]}" class="w-full h-48 object-cover car-img" data-images='${JSON.stringify(car.images)}'>
        <span class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">${car.badge}</span>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-900">${car.title}</h3>
        <p class="text-sm text-gray-500 mb-4">${car.subtitle}</p>
        <div class="flex items-center justify-between text-xs text-gray-600 mb-4">
          <span>${car.miles}</span><span>${car.fuel}</span><span>${car.trans}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-lg font-bold text-gray-900">${car.price}</span>
          <a href="#" class="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    `;

    // Hover slider
    let hoverInterval;
    const imgEl = card.querySelector(".car-img");
    const imgs = JSON.parse(imgEl.dataset.images);
    card.addEventListener("mouseenter", () => {
      let i = 0;
      hoverInterval = setInterval(() => {
        i = (i + 1) % imgs.length;
        imgEl.src = imgs[i];
      }, 1500);
    });
    card.addEventListener("mouseleave", () => {
      clearInterval(hoverInterval);
      imgEl.src = imgs[0];
    });

    cardsContainer.appendChild(card);
  });
}

// Tabs click
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("text-blue-600","border-blue-600","font-medium"));
    btn.classList.add("text-blue-600","border-b-2","border-blue-600","font-medium");
    activeTab = btn.dataset.tab;
    renderCards(activeTab);
  });
});

// Auto scroll
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    cardsContainer.scrollBy({ left: 280, behavior: "smooth" });
    if (cardsContainer.scrollLeft + cardsContainer.clientWidth >= cardsContainer.scrollWidth) {
      cardsContainer.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 5000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Hover pause auto-scroll
cardsContainer.addEventListener("mouseenter", stopAutoScroll);
cardsContainer.addEventListener("mouseleave", startAutoScroll);

// Init
renderCards(activeTab);
startAutoScroll();

// Array of testimonials
const testimonials = [
  {
    rating: 5,
    title: "Sales process was simple and easy",
    text: "At HM Sportscar what matters to us is making your car search stress-free.",
    name: "Brooklyn Simmons"
  },
  {
    rating: 4,
    title: "Good job for project",
    text: "Maximillion was friendly and I didn’t feel pressured during the process.",
    name: "Augusta Silva"
  },
  {
    rating: 5,
    title: "Smooth experience",
    text: "Great service and transparent pricing. Highly recommended!",
    name: "Jack Graham"
  },
  {
    rating: 5,
    title: "Amazing Service",
    text: "The team was very supportive from start to finish. Will buy again.",
    name: "John Doe"
  },
  {
    rating: 4,
    title: "Worth it",
    text: "I found my dream car easily. Finance options were flexible too.",
    name: "Olivia Brown"
  },
  {
    rating: 5,
    title: "Excellent customer support",
    text: "Prompt responses and great after-sales service.",
    name: "William Harris"
  },
  {
    rating: 5,
    title: "Trusted dealership",
    text: "Felt comfortable throughout, no hidden fees at all.",
    name: "Sophia Clark"
  },
  {
    rating: 5,
    title: "Best buying experience",
    text: "Cars were exactly as described, no surprises.",
    name: "Michael Adams"
  },
  {
    rating: 4,
    title: "Friendly team",
    text: "They guided me through each step without rushing.",
    name: "Emma Johnson"
  },
  {
    rating: 5,
    title: "Highly recommend",
    text: "Top-notch dealership! Everything was smooth and transparent.",
    name: "David Martinez"
  },
    {
    rating: 5,
    title: "Trusted dealership",
    text: "Felt comfortable throughout, no hidden fees at all.",
    name: "Kashan Abbas"
  },
];

// Wrapper
const wrapper = document.getElementById("testimonial-wrapper");

// Render function
function renderTestimonials() {
  testimonials.forEach(t => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-2xl shadow border p-6 w-80 flex-shrink-0";
    card.innerHTML = `
      <div class="flex items-center gap-2 mb-3">
        ${"★".repeat(t.rating).padEnd(5, "☆").split("").map(star =>
          `<span class="text-green-500">${star}</span>`
        ).join("")}
        <span class="text-gray-400 text-xs">Verified</span>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 mb-2">${t.title}</h3>
      <p class="text-gray-600 text-sm mb-4">${t.text}</p>
      <p class="text-gray-900 font-medium text-sm">${t.name}</p>
    `;
    wrapper.appendChild(card);
  });
}
renderTestimonials();

// Scroll controls
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: -300, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
  wrapper.scrollBy({ left: 300, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    // Guest Dropdown Logic
    const guestInput = document.getElementById("guests");
    const guestDropdown = document.querySelector(".guest-dropdown");
    const guestCounts = { adults: 2, children: 0, rooms: 1 };

    // Toggle dropdown visibility
    guestInput.addEventListener("click", () => {
        guestDropdown.classList.toggle("active");
    });

    // Update guest counts
    document.querySelectorAll(".guest-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const type = e.target.dataset.type;
            if (button.classList.contains("plus")) {
                guestCounts[type]++;
            } else if (button.classList.contains("minus") && guestCounts[type] > 0) {
                guestCounts[type]--;
            }
            document.querySelector(`.guest-count[data-type="${type}"]`).textContent =
                guestCounts[type];
        });
    });

    // Apply guest selection
    document.querySelector(".apply-btn").addEventListener("click", () => {
        guestInput.value = `${guestCounts.adults} adults · ${guestCounts.children} children · ${guestCounts.rooms} room${guestCounts.rooms > 1 ? "s" : ""}`;
        guestDropdown.classList.remove("active");
    });

    // Navbar Toggle Logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Mobile Menu Logic
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    // Open the mobile menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        hamburger.classList.add('hidden'); // Hide the hamburger
    });

    // Close the mobile menu
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('hidden'); // Show the hamburger
    });
});
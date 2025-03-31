document.addEventListener("DOMContentLoaded", () => {
    const guestInput = document.getElementById("guests");
    const guestDropdown = document.querySelector(".guest-dropdown");
    const guestCounts = {
        adults: 2,
        children: 0,
        rooms: 1,
    };

    // Toggle dropdown visibility
    guestInput.addEventListener("click", () => {
        guestDropdown.classList.toggle("active");
    });

    // Update counts
    document.querySelectorAll(".guest-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            const type = e.target.getAttribute("data-type");
            if (button.classList.contains("plus")) {
                guestCounts[type]++;
            } else if (button.classList.contains("minus") && guestCounts[type] > 0) {
                guestCounts[type]--;
            }
            document.querySelector(`.guest-count[data-type="${type}"]`).textContent =
                guestCounts[type];
        });
    });

    // Apply button
    document.querySelector(".apply-btn").addEventListener("click", () => {
        guestInput.value = `${guestCounts.adults} adults · ${guestCounts.children} children · ${guestCounts.rooms} room${guestCounts.rooms > 1 ? "s" : ""}`;
        guestDropdown.classList.remove("active");
    });
});
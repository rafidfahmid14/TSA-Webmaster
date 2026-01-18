// Simple welcome message 
document.addEventListener("DOMContentLoaded", () => {
    console.log("CityCare site loaded successfully!");

    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Highlight active section on scroll
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});

// Get DOM elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const table = document.getElementById("resourceTable");
const rows = table.getElementsByTagName("tr");

// Function to filter table
function filterTable() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowCategory = row.getAttribute("data-category");
    const rowText = row.textContent.toLowerCase();

    // Check search text and category
    const matchesSearch = rowText.includes(searchText);
    const matchesCategory = category === "all" || rowCategory === category;

    if (matchesSearch && matchesCategory) {
      row.style.display = ""; // show row
    } else {
      row.style.display = "none"; // hide row
    }
  }
}

// Event listeners
searchInput.addEventListener("input", filterTable);
categoryFilter.addEventListener("change", filterTable);

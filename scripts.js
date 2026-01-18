
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


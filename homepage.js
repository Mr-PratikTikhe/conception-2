// Add this JavaScript to homepage.js
function toggleOptions() {
    var options = document.getElementById("options");
    options.classList.toggle("active");
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px" || sidebar.style.left === "") ? "-200px" : "0px";
}

function hideSearchBar() {
    var searchBar = document.getElementById("searchBar");
    searchBar.style.display = "none";
}

// Show search bar when search button is clicked
document.querySelector('.options button:first-child').addEventListener('click', function() {
    var searchBar = document.getElementById("searchBar");
    searchBar.style.display = "block";
});

// JavaScript

// Function to toggle visibility of additional content
function toggleMoreText() {
    var moreText = document.getElementById("moreText");
    var seeMoreLink = document.getElementById("seeMoreLink");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        seeMoreLink.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        seeMoreLink.textContent = "See More";
    }
}

// Event listener for clicking the "See More" link
document.getElementById("seeMoreLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    toggleMoreText();
});

// Simple welcome message 
document.addEventListener("DOMContentLoaded", () => { 
  console.log("TSA Webmaster site loaded successfully!"); 

}); 
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
```



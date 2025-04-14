//typed js
var typed = new Typed('#element', {
    strings: ['Ahmedabad (અમદાવાદ)', 'Vadodara (વડોદરા)', 'Gandhinagar (ગાંધીનગર)', 'Surat (સુરત)', 'Dwarka (દ્વારકા)', 'Somnath (સોમનાથ)', 'Kutch (કચ્છ)', 'Rajkot (રાજકોટ)', 'and many more....'],
    typeSpeed: 120,
    loop: true
});


//Moving background photo
const slides = document.querySelectorAll(".img-slides"); // Select all slides
let currentSlide = 0;
// Function to change the active slide with a sliding effect
const changeSlide = () => {
    slides.forEach((slide, index) => {
        // Reset all slides to the right
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
}   
// Initialize the slide positions
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
})  
setInterval(changeSlide, 3000); // Change slide every 3 seconds

//on click selector for the budget and the plan
document.addEventListener("DOMContentLoaded", function () {
    // Budget option click handler
    document.querySelectorAll('.budget-container div').forEach(option => {
        option.addEventListener('click', function () {
            selectOption(this, '.budget-container div');
        });
    });

    // Plan option click handler
    document.querySelectorAll('.plan-container div').forEach(option => {
        option.addEventListener('click', function () {
            selectOption(this, '.plan-container div');
        });
    });

    // Common function for selection
    function selectOption(element, selector) {
        document.querySelectorAll(selector).forEach(option => {
            option.classList.remove('selected');
        });
        element.classList.add('selected');
    }
});





// //google authentication
// const modal = document.getElementById("signInModal");
// const signInBtn = document.querySelector(".nav-btn"); // Sign-in Button
// const generateTripBtn = document.querySelector(".generate-btn button"); // Generate Trip Button
// const closeBtn = document.querySelector(".close-btn")
// // Open modal when Sign-in or Generate Trip is clicked
// signInBtn.addEventListener("click", () => modal.style.display = "block");
// generateTripBtn.addEventListener("click", () => modal.style.display = "block")
// // Close modal when 'X' button is clicked
// closeBtn.addEventListener("click", () => modal.style.display = "none")
// // Close modal when clicking outside the modal content
// window.addEventListener("click", (event) => {
//     if (event.target === modal) modal.style.display = "none";
// });

// //redirect to the main react page
// document.querySelector('.generate-btn').addEventListener('click', function () {
//     window.location.href = 'http://localhost:5173/main_page'; // or your deployed route
// });

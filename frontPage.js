//typed js

document.addEventListener('DOMContentLoaded', function() {
    const marqueeContents = document.querySelectorAll('.marquee-content');
    
    // Pauses the animation when hovering
    marqueeContents.forEach(content => {
      content.addEventListener('mouseenter', () => {
        content.style.animationPlayState = 'paused';
      });
      
      content.addEventListener('mouseleave', () => {
        content.style.animationPlayState = 'running';
      });
    });
  });

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

//Gujarat Map
const paths = document.querySelectorAll(".map-container path");
const hoverInfo = document.getElementById("hover-info");

// Define district names mapped to their IDs
const districtNames = {
    Kutch: "Kutch",
    Ahmedabad: "Ahmedabad",
    Banaskantha: "Banaskantha",
    Surendranagar: "Surendranagar",
    Rajkot: "Rajkot",
    Amreli: "Amreli",
    Bhavnagar: "Bhavnagar",
    Jamnagar: "Jamnagar",
    Patan: "Patan",
    Morbi: "Morbi",
    Junagadh: "Junagadh",
    Bharuch: "Bharuch",
    Mehsana: "Mehsana",
    Sabarkantha: "Sabarkantha",
    Vadodara: "Vadodara",
    Surat: "Surat",
    DevbhoomiDwarka: "Devbhoomi Dwarka",
    Dahod: "Dahod",
    ChhotaUdepur: "Chhota Udepur",
    Panchmahal: "Panchmahal",
    Kheda: "Kheda",
    Tapi: "Tapi",
    GirSomnath: "Gir Somnath",
    Anand: "Anand",
    Aravalli: "Aravalli",
    Narmada: "Narmada",
    Valsad: "Valsad",
    Botad: "Botad",
    Mahisagar: "Mahisagar",
    Porbandar: "Porbandar",
    Gandhinagar: "Gandhinagar",
    Dang: "Dang",
    Navsari: "Navsari",
};

paths.forEach((path) => {
    path.addEventListener("mouseenter", (e) => {
        const districtId = e.target.id; // Get the ID of the hovered path
        const districtName = districtNames[districtId]; // Find the name in the dictionary
        if (districtName) {
            hoverInfo.style.display = "block"; // Show the tooltip
            hoverInfo.textContent = districtName; // Set the district name
        }
    });

    path.addEventListener("mousemove", (e) => {
        // Ensure the tooltip stays within the bounds of the .map-container
        const container = document.querySelector(".map-container");
        const containerRect = container.getBoundingClientRect();

        // Calculate mouse position relative to the container
        const mouseX = e.clientX - containerRect.left;
        const mouseY = e.clientY - containerRect.top;

        // Update tooltip position slightly below and to the right of the mouse pointer
        hoverInfo.style.top = `${mouseY + 25}px`; // Place tooltip slightly below mouse pointer
        hoverInfo.style.left = `${mouseX + 820}px`; // Place tooltip slightly to the right of mouse pointer
    });

    path.addEventListener("mouseleave", () => {
        hoverInfo.style.display = "none"; // Hide the tooltip when the mouse leaves
    });
});

//card display
// Sample district data (you can replace this with real data)
const districtDetails = {
    "Ahmedabad": {
        title: "Ahemdabad",
        description: "Ahmedabad is a city in western India.The Sabarmati River runs through its center. Ahmedabad is famous for its textile industry and is known as the...",
        images:[ 
            "https://t3.ftcdn.net/jpg/05/52/27/54/360_F_552275461_QdEaatYXQ1KGbAe08Xnh2bo8gp9Pmq5a.jpg",
            "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fv1560260650%2Fkiomoi%2FAhmedabad%2Fkankaria%2520Lake%2520%2520%25281%2529.webp&w=3840&q=75",
            "https://sabarmatiriverfront.com/wp-content/uploads/2020/06/park-img.jpg",
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ"
        ]

    },
    "Kutch": {
        title: "Kutch",
        description: "Kutch is a vast salt marsh desert in India that is home to many significant sites that belong to the Indus Valley Civilization. Thousands of travelers...",
        images:[ "https://www.ttrikon.com/system/images/000/777/785/7c63c8bf6212cf62cd5d1b822ebb35bb/original/Rann-Utsav.jpg?1726654901",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg",
            "https://goboundless.co/wp-content/uploads/2023/09/ruuunn.png",
            "https://temple.yatradham.org/public/Product/temple/temple_yXQ8anNL_202408041800350.jpg"
        ]

    },
    "Banaskantha": {
        title: "Banaskantha",
        description: "Ambaji is a famous pilgrimage town located in the Banaskantha district of Gujarat. Thousands of devotee’s throng to this ancient temple...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/ambaji-temple/Ambaji-Temple-Thumbnail.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/ba/Ambaji_-_Gujarat%2C_India_%284587160875%29.jpg",
            "https://cdn.s3waas.gov.in/s38ebda540cbcc4d7336496819a46a1b68/uploads/bfi_thumb/2018040281-olwa8l11fpid0koubm999gf4md5cn3bvuy0sc47mri.jpg",
            "https://cdn.s3waas.gov.in/s38ebda540cbcc4d7336496819a46a1b68/uploads/bfi_thumb/2018071986-olwa8sjy3dgq2qwe8twq8u8hoipkij8vm56ibegb62.jpg"
        ]
    },
    "Surendranagar": {
        title: "Surendranagar",
        description: "With many ginning and pressing factories, Surendranagar in Gujarat is the centre of cotton and ginning activity in India. One of the world's...",
        images: ["https://cdn.s3waas.gov.in/s3c15da1f2b5e5ed6e6837a3802f0d1593/uploads/2018/08/2018080919.jpg",
            "https://media.navgujaratsamay.com/ngs-mig/uploads/mediaGallery/image/1666672438585.jpg-org",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/zone-wise-thumb-images/junagadh.jpg",
            "https://t3.ftcdn.net/jpg/10/39/57/60/360_F_1039576074_KK6lWDfnLdQEtKluu0lUL9CbrBKhw9Bf.jpg"
        ]
    },
    "Rajkot": {
        title: "Rajkot",
        description: "Traditional crafts are well-known in Rajkot (silver work, embroidery, and patola weaving). It is located around 45 miles (72 km) southeast of...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/khirasara-palace/Khirasara-Palace-Banner.jpg",
            "https://myholidayhappiness.com/uploads/jagat-mandir-2842.jpg",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/june/Kaba-Gandhi-No-Delo.jpg",
            "https://www.gujaratexpert.com/blog/wp-content/uploads/2023/11/Ramvan-Gujarat.jpg"
        ]
    },
    "Jamnagar": {
        title: "Jamnagar",
        description: "Jamnagar is a city in Gujarat, India, known for its local crafts, including bandhni and metalware. The city is also home to the Gujarat Ayurveda..."
    },
    "Gandhinagar": {
        title: "Gandhinagar",
        description: "Gujarat’s capital, Gandhinagar located on the banks of the Sabarmati River is named after Mahatma Gandhi, the Father of the Nation. It is a...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/akshardham-temple/Akshardham-Temple-Thumbnail.jpg",
            "https://lh3.googleusercontent.com/proxy/l7vV4nZqm2gJP51c6G0RNM96xO4-4NwLmu6zSq3h1WhOwoJ3NRjKUpUXLNbu3YjTdu0qDcNs5z4suZVcz6ZObdMYDGIWQK8Gojh2nuVlpfZ9wzcCRsL5h5AWhO3UOulUjccoKjnWjC4",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/june/Adalaj-ni-Vav.jpg",
            "https://content.jdmagicbox.com/comp/def_content_category/botanical-gardens/aa8fc412af-botanical-gardens-4-k2tko.jpg"
        ]
    },
    "Vadodara": {
        title: "Vadodara",
        description: "Patola silk sarees, bandhnis and traditional ghagras, embroidered blankets, bracelets, jewellery, and khadi are all well-known products from Vadodara...."
    },
    "Surat": {
        title: "Surat",
        description: "Gujarat, a state in western India, has a significant city called Surat by the Tapi River. It is also recognised as the largest diamond manufacturing...",
        images: ["https://lh5.googleusercontent.com/p/AF1QipP8YNFdCndnweuoXChzMV7VkGPCHSJf5cFMkdPj=w675-h390-n-k-no",
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRFYfs4ossV0yoIQS4_9a-yBb9Px09fHxqlpGoUl8eY2uiT_WEOGHoyuNIeR0KIAPDCDshwknggG26yggSkBUlaS2IQlVCD8RGmvRmajw",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/opti/11-2-20/Surat-Castle.jpg",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/sneh-rashmi-botanical-garden/Sneh-Rashmi-Botanical-Garden-Thumbnail.jpg"
        ]
    },
    "Valsad": {
        title: "Valsad",
        description: "Previously known as Bulsar, Valsad district's offers some unique travel destinations. It's well-known for its mango plantations and becoming a...",
        images:[ "https://lh5.googleusercontent.com/p/AF1QipNmaepBGmkSQRWrhXH7gDDjKElhDFvcknyWdPYY=w540-h312-n-k-no",
            "https://preview.redd.it/8t8abezczdw31.jpg?width=640&crop=smart&auto=webp&s=144419236229ea789003fdda744e5d2f42ae15b5",
            "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wilson_Hills_Road.JPG",
            "https://lh5.googleusercontent.com/p/AF1QipNpz1Rr-WGh4wmIZQoKQhBdmlWb2BTMxkSrPRoI=w675-h390-n-k-no" 
        ]
    },
    "DevbhoomiDwarka": {
        title: "Devbhoomi Dwarka",
        description: "The ancient city of Dwarka is located near the Gulf of Kutch in India. The city is home to many temples and is a popular destination for spiritual...",
        images: ["https://lh5.googleusercontent.com/p/AF1QipMru06ET5StmiljgkYN6cCfq0N4VNGRdDCe1UMe=w675-h390-n-k-no",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/nageshwar-jyotirlinga/Nageshwar-Jyotirlinga-Thumbnail.jpg",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/dwarka/beaches/shivrajpur-beac.jpg",
            "https://www.jules-verne.org/InnerSpace/pics/dwarka-underwater-city-india-innerspace-arabian-sea-gulf-cambay.jpg"
        ]
    },
    "Morbi": {
        title: "Morbi",
        description: "Morbi, Gujarat is renowned for its ceramic industry. Around 70% of India's ceramics are produced here. Morbi is also known for its production of..."
    },

    "Patan": {
        title: "Patan",
        description: "Patan is a historic city in Gujarat, India, known for its rich cultural heritage and architectural marvels. It was the capital of the Chalukya (Solanki) dynasty in the 8th–12th centuries. The city is famous for the Rani ki Vav and a UNESCO World Heritage stepwell."
    },

    "Navsari":{
        title:"Navsari",
        description: "Navsari is a city in Gujarat, India, known for its historical significance and Parsi heritage. It is an important commercial and industrial hub, especially for diamond cutting, textiles, and agriculture. The city has a rich cultural history and is famous as the birthplace of Jamsetji Tata, the founder of Tata Group."

    },

    "GirSomnath":{
        title:"GirSomnath",
        description: "Gir Somnath is a district in Gujarat, India, known for the famous Somnath Temple, one of the twelve Jyotirlingas of Lord Shiva. It is also home to the Gir National Park, the only habitat of Asiatic lions. The district has historical and religious significance, attracting pilgrims and wildlife enthusiasts alike."

    },

    "Anand":{
        title:"Anand",
        description: "Anand is a city in Gujarat, India, known as the Milk Capital of India because it is home to Amul, the country's largest dairy cooperative. It is a major educational and industrial hub, housing Anand Agricultural University (AAU) and IRMA (Institute of Rural Management Anand)."

    },

    "Bharuch":{
        title:"Bharuch",
        description: "Bharuch is a taluka and situated on the banks of river Narmada in the Bharuch district in Gujarat India. Famous for its salty peanuts & quality..."

    },

    "Tapi":{
        title:"Tapi",
        description: "The five talukas that make up the newly created Tapi district are Vyara, Songadh, Uchchal, Nizar, and Valod. In the Tapi area, Vyara and Songadh are..."

    },

    "Dang":{
        title:"Dang",
        description: "The Dang district in the Aravallis is a breathtakingly beautiful part of Gujarat, with stunning waterfalls and lush vegetation. They are a perfect..."

    },

    "Narmada":{
        title:"Narmada",
        description: "Looking for a breathtaking natural destination in Gujarat? Look no further than the stunning waterfalls of the Narmada district! Marvel at the beauty..."

    },

    "ChhotaUdepur":{
        title:"ChhotaUdepur",
        description: "Chhota Udaipur, town of 108 temples, is an Indian city in the state of Gujarat. It lies on the edge of a big lake, with a series of temples along the..."

    },






    

};

document.querySelectorAll(".map-container path").forEach(function (path) {
    path.addEventListener("click", function (event) {
        const infoCard = document.querySelector(".info-card");
        const districtId = event.target.id;
        const infoTitle = infoCard.querySelector("h3");
        const infoDescription = infoCard.querySelector("p");
        const infoImage = document.getElementById("info-image");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");

        let currentImageIndex = 0;
        let currentImages = [];

        if (districtDetails[districtId]) {
            const details = districtDetails[districtId];

            // Set title and description
            infoTitle.textContent = details.title;
            infoDescription.textContent = details.description;

            // Debugging: Check if images are being retrieved correctly
            console.log("Selected District:", districtId);
            console.log("Images:", details.images);

            // Check if multiple images exist
            if (details.images && details.images.length > 0) {
                currentImages = details.images;
                currentImageIndex = 0;
                infoImage.src = currentImages[currentImageIndex];

                // Show navigation buttons
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            } else {
                console.warn("No images found for district:", districtId);
                infoImage.src = "images/default.jpg"; // Fallback image
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            }

            // Show the info card
            infoCard.style.display = "block";
        } else {
            console.error("District not found in data:", districtId);
        }

        // Event listeners for navigation buttons
        prevBtn.onclick = function () {
            if (currentImages.length > 0) {
                currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
                infoImage.src = currentImages[currentImageIndex];
            }
        };

        nextBtn.onclick = function () {
            if (currentImages.length > 0) {
                currentImageIndex = (currentImageIndex + 1) % currentImages.length;
                infoImage.src = currentImages[currentImageIndex];
            }
        };
    


        // Show the info card
        infoCard.style.display = "block";

        const cardWidth = infoCard.offsetWidth;
        const cardHeight = infoCard.offsetHeight;

        // Get the map container's offset relative to the page
        const containerRect = document.querySelector(".map-container").getBoundingClientRect();
        
        // Get the click coordinates relative to the container
        const x = event.clientX - containerRect.left + 10; // Adding an offset for better positioning
        const y = event.clientY - containerRect.top - cardHeight / 2; // Position vertically centered to the click

        // Ensure position stays within the container boundaries
        const svgRect = event.target.getBoundingClientRect();
        const svgCenterX = svgRect.left + svgRect.width / 2;
        const svgCenterY = svgRect.top + svgRect.height / 2;

        // Fine-tune positioning to move the card closer to the clicked area
        let finalX = Math.min(x, svgCenterX + 50); // Adjust the x-position to move closer horizontally
        let finalY = Math.min(y, svgCenterY + 50); // Adjust the y-position to move closer vertically

        // Boundary checks for the info card
        if (finalX + cardWidth > containerRect.width) {
            finalX = containerRect.width - cardWidth - 10; // Prevent overflow to the right
        }
        if (finalY + cardHeight > containerRect.height) {
            finalY = containerRect.height - cardHeight - 10; // Prevent overflow to the bottom
        }

        // Apply the adjusted position
        infoCard.style.left = `${finalX}px`;
        infoCard.style.top = `${finalY}px`;

        // Prevent immediate hiding on body click
        event.stopPropagation();
    });
});

document.body.addEventListener("click", function (event) {
    // Prevent closing if clicking inside info-card, map, or navigation buttons
    if (!event.target.closest(".info-card") && 
        !event.target.closest("path") && 
        !event.target.closest("#prev-btn") && 
        !event.target.closest("#next-btn")) {
        document.querySelector(".info-card").style.display = "none";
    }
});


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


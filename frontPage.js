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

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
    strings: ['Ahmedabad (અમદાવાદ)', 'Vadodara (વડોદરા)', 'Gandhinagar (ગાંધીનગર)', 'Surat (સુરત)', 'Dwarka (દ્વારકા)', 'Somnath (સોમનાથ)', 'Kutch (કચ્છ)', 'Rajkot (રાજકોટ)', 'and many more....'],
    typeSpeed: 120,
    loop: true
    });
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
        console.log("Mouse entered path:", e.target.id); // Log path ID
        const districtId = e.target.id; // Get the ID of the hovered path
        const districtName = districtNames[districtId]; // Find the name in the dictionary
        console.log("District ID:", districtId, "District Name:", districtName); // Log ID and Name
        if (districtName) {
            hoverInfo.style.display = "block"; // Show the tooltip
            hoverInfo.textContent = districtName; // Set the district name
            console.log("Tooltip should be visible with text:", districtName); // Log tooltip update
        } else {
            console.log("District name not found for ID:", districtId); // Log if name not found
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
        hoverInfo.style.top = `${mouseY + 20}px`; // Place tooltip slightly below mouse pointer
        hoverInfo.style.left = `${mouseX + 15}px`; // Place tooltip slightly to the right of mouse pointer
    });

    path.addEventListener("mouseleave", () => {
        hoverInfo.style.display = "none"; // Hide the tooltip when the mouse leaves
        console.log("Mouse left path:", path.id); // Log mouse leave
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
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",
            "./svgimages/1.jpg",
            "./svgimages/2.jpg",
            "./svgimages/3.jpg",
            "./svgimages/7.jpg",
            "./svgimages/8.jpg",
            "./svgimages/9.jpg"
        ]

    },
    "Kutch": {
        title: "Kutch",
        description: "Kutch is a vast salt marsh desert in India that is home to many significant sites that belong to the Indus Valley Civilization. Thousands of travelers...",
        images:[ "https://www.ttrikon.com/system/images/000/777/785/7c63c8bf6212cf62cd5d1b822ebb35bb/original/Rann-Utsav.jpg?1726654901",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg",
            "https://goboundless.co/wp-content/uploads/2023/09/ruuunn.png",
            "https://temple.yatradham.org/public/Product/temple/temple_yXQ8anNL_202408041800350.jpg",
            "./svgimages/4.jpg",
            "./svgimages/5.jpg",
            "./svgimages/6.jpg"
        ]

    },
    "Banaskantha": {
        title: "Banaskantha",
        description: "Ambaji is a famous pilgrimage town located in the Banaskantha district of Gujarat. Thousands of devotee’s throng to this ancient temple...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/ambaji-temple/Ambaji-Temple-Thumbnail.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/ba/Ambaji_-_Gujarat%2C_India_%284587160875%29.jpg",
            "https://cdn.s3waas.gov.in/s38ebda540cbcc4d7336496819a46a1b68/uploads/bfi_thumb/2018040281-olwa8l11fpid0koubm999gf4md5cn3bvuy0sc47mri.jpg",
            "https://cdn.s3waas.gov.in/s38ebda540cbcc4d7336496819a46a1b68/uploads/bfi_thumb/2018071986-olwa8sjy3dgq2qwe8twq8u8hoipkij8vm56ibegb62.jpg",
            "./svgimages/10.jpg",
            "./svgimages/11.jpg",
            "./svgimages/12.jpg",
        ]
    },
    "Surendranagar": {
        title: "Surendranagar",
        description: "With many ginning and pressing factories, Surendranagar in Gujarat is the centre of cotton and ginning activity in India. One of the world's...",
        images: ["https://cdn.s3waas.gov.in/s3c15da1f2b5e5ed6e6837a3802f0d1593/uploads/2018/08/2018080919.jpg",
            "https://media.navgujaratsamay.com/ngs-mig/uploads/mediaGallery/image/1666672438585.jpg-org",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/zone-wise-thumb-images/junagadh.jpg",
            "https://t3.ftcdn.net/jpg/10/39/57/60/360_F_1039576074_KK6lWDfnLdQEtKluu0lUL9CbrBKhw9Bf.jpg",
            "./svgimages/13.jpg",
            "./svgimages/14.jpg",
            "./svgimages/15.jpg",
            "./svgimages/16.jpg",
            "./svgimages/17.jpg",
            "./svgimages/18.jpg",
        ]
    },
    "Rajkot": {
        title: "Rajkot",
        description: "Traditional crafts are well-known in Rajkot (silver work, embroidery, and patola weaving). It is located around 45 miles (72 km) southeast of...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/khirasara-palace/Khirasara-Palace-Banner.jpg",
            "https://myholidayhappiness.com/uploads/jagat-mandir-2842.jpg",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/june/Kaba-Gandhi-No-Delo.jpg",
            "https://www.gujaratexpert.com/blog/wp-content/uploads/2023/11/Ramvan-Gujarat.jpg",
            "./svgimages/19.jpg",
            "./svgimages/20.jpg",
            "./svgimages/21.jpg",
            "./svgimages/22.jpg",
        ]
    },
    "Jamnagar": {
        title: "Jamnagar",
        description: "Jamnagar is a city in Gujarat, India, known for its local crafts, including bandhni and metalware. The city is also home to the Gujarat Ayurveda...",
        images: [
            "./svgimages/23.jpg",
            "./svgimages/24.jpg",
            "./svgimages/25.jpg",
            "./svgimages/26.jpg",
        ]
    },
    "Gandhinagar": {
        title: "Gandhinagar",
        description: "Gujarat’s capital, Gandhinagar located on the banks of the Sabarmati River is named after Mahatma Gandhi, the Father of the Nation. It is a...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/akshardham-temple/Akshardham-Temple-Thumbnail.jpg",
            "https://lh3.googleusercontent.com/proxy/l7vV4nZqm2gJP51c6G0RNM96xO4-4NwLmu6zSq3h1WhOwoJ3NRjKUpUXLNbu3YjTdu0qDcNs5z4suZVcz6ZObdMYDGIWQK8Gojh2nuVlpfZ9wzcCRsL5h5AWhO3UOulUjccoKjnWjC4",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/june/Adalaj-ni-Vav.jpg",
            "https://content.jdmagicbox.com/comp/def_content_category/botanical-gardens/aa8fc412af-botanical-gardens-4-k2tko.jpg",
            "./svgimages/27.jpg",
            "./svgimages/28.jpg",
            "./svgimages/29.jpg",
        ]
    },
    "Vadodara": {
        title: "Vadodara",
        description: "Patola silk sarees, bandhnis and traditional ghagras, embroidered blankets, bracelets, jewellery, and khadi are all well-known products from Vadodara....",
        images: [
            "./svgimages/30.jpg",
            "./svgimages/31.jpg",
            "./svgimages/32jpg.jpg",
            "./svgimages/33.JPG",
            "./svgimages/34.jpg",
        ]
    },
    "Surat": {
        title: "Surat",
        description: "Gujarat, a state in western India, has a significant city called Surat by the Tapi River. It is also recognised as the largest diamond manufacturing...",
        images: ["https://lh5.googleusercontent.com/p/AF1QipP8YNFdCndnweuoXChzMV7VkGPCHSJf5cFMkdPj=w675-h390-n-k-no",
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRFYfs4ossV0yoIQS4_9a-yBb9Px09fHxqlpGoUl8eY2uiT_WEOGHoyuNIeR0KIAPDCDshwknggG26yggSkBUlaS2IQlVCD8RGmvRmajw",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/opti/11-2-20/Surat-Castle.jpg",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/sneh-rashmi-botanical-garden/Sneh-Rashmi-Botanical-Garden-Thumbnail.jpg",
            "./svgimages/35.jpg",
            "./svgimages/36.jpg",
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
        description: "Morbi, Gujarat is renowned for its ceramic industry. Around 70% of India's ceramics are produced here. Morbi is also known for its production of...",
        images: [
            "./svgimages/37.jpg",
            "./svgimages/38.jpg",
            "./svgimages/39.jpg",
        ]
    },

    "Patan": {
        title: "Patan",
        description: "Patan is a historic city in Gujarat, India, known for its rich cultural heritage and architectural marvels. It was the capital of the Chalukya (Solanki) dynasty in the 8th–12th centuries. The city is famous for the Rani ki Vav and a UNESCO World Heritage stepwell.",
        images: [
            "./svgimages/40.jpg",
            "./svgimages/41.png",
            "./svgimages/42jpg.jpg",
            "./svgimages/43.jpg"
        ]
    },

    "Navsari":{
        title:"Navsari",
        description: "Navsari is a city in Gujarat, India, known for its historical significance and Parsi heritage. It is an important commercial and industrial hub, especially for diamond cutting, textiles, and agriculture. The city has a rich cultural history and is famous as the birthplace of Jamsetji Tata, the founder of Tata Group.",
        images: [
            "./svgimages/44.jpg",
            "./svgimages/45.jpg",
            "./svgimages/46.jpg",
        ]

    },

    "GirSomnath":{
        title:"GirSomnath",
        description: "Gir Somnath is a district in Gujarat, India, known for the famous Somnath Temple, one of the twelve Jyotirlingas of Lord Shiva. It is also home to the Gir National Park, the only habitat of Asiatic lions. The district has historical and religious significance, attracting pilgrims and wildlife enthusiasts alike.",
        images: [
            "./svgimages/50.jpg",
            "./svgimages/51.jpg",
        ]

    },

    "Anand":{
        title:"Anand",
        description: "Anand is a city in Gujarat, India, known as the Milk Capital of India because it is home to Amul, the country's largest dairy cooperative. It is a major educational and industrial hub, housing Anand Agricultural University (AAU) and IRMA (Institute of Rural Management Anand).",
        images: [
            "./svgimages/47.jpg",
            "./svgimages/52.jpg",
            "./svgimages/53.jpg",
        ]

    },

    "Bharuch":{
        title:"Bharuch",
        description: "Bharuch is a taluka and situated on the banks of river Narmada in the Bharuch district in Gujarat India. Famous for its salty peanuts & quality...",
        images: [
            "./svgimages/54.jpg",
            "./svgimages/55.jpg",
        ]

    },

    "Tapi":{
        title:"Tapi",
        description: "The five talukas that make up the newly created Tapi district are Vyara, Songadh, Uchchal, Nizar, and Valod. In the Tapi area, Vyara and Songadh are...",
        images: [
            "./svgimages/56.jpg",
            "./svgimages/57.jpg",
        ]

    },

    "Dang":{
        title:"Dang",
        description: "The Dang district in the Aravallis is a breathtakingly beautiful part of Gujarat, with stunning waterfalls and lush vegetation. They are a perfect...",
        images: [
            "./svgimages/58.jpg",
            "./svgimages/59.jpg",
        ]

    },

    "Narmada":{
        title:"Narmada",
        description: "Looking for a breathtaking natural destination in Gujarat? Look no further than the stunning waterfalls of the Narmada district! Marvel at the beauty...",
        images: [
            "./svgimages/60.jpg",
            "./svgimages/61.jpg",
        ]

    },

    "ChhotaUdepur":{
        title:"ChhotaUdepur",
        description: "Chhota Udaipur, town of 108 temples, is an Indian city in the state of Gujarat. It lies on the edge of a big lake, with a series of temples along the...",
        images: [
            "./svgimages/62.jpg",
            "./svgimages/63.jpg",
            "./svgimages/64jpg.jpg",
        ]

    },

    "Kheda": {
        title:"Kheda",
        description: "Located in the heart of Gujarat, Kheda district is a region steeped in history, culture, and agricultural prosperity. Often referred to as the “Granary of Gujarat,” Kheda has played a pivotal role in the state’s development, both economically and historically.With its blend of historical significance, agricultural richness, and peaceful landscapes, Kheda remains a vital and culturally vibrant part of Gujarat, offering visitors a journey through the heartland of the state.",
        images: [
            "./svgimages/65.jpg", //  Galteshwar Mahadev Temple
            "./svgimages/66.jpg", // Ranchhodril Temple
        ]

    },

    "Porbandar": {
        title:"Porbandar",
        description: "Situated along the scenic shores of the Arabian Sea, Porbandar is a historic coastal city in the Saurashtra region of Gujarat, known for its cultural legacy, maritime heritage, and spiritual significance. This charming town holds a special place in India's history as the birthplace of Mahatma Gandhi, the Father of the Nation.",
        images: [
            "./svgimages/67.jpg", // Madhavpur Beach
            "./svgimages/71.jpg", // Porbandar Port
        ]

    },

    "Mehsana": {
        title:"Mehsana",
        description: "Located in the northwestern heartland of Gujarat, Mehsana district is a region that beautifully balances tradition with modern progress. Known for its rich cultural heritage, architectural landmarks, and economic vitality, Mehsana plays a significant role in the state's agricultural and industrial landscape.",
        images: [
            "./svgimages/69.jpg", //  Bahuchar mata Temple
            "./svgimages/70.jpg", //  Dharoi Dam
        ]

    },

    "Panchmahal": {
        title: "Panchmahal",
        description: "Panchmahal district in Gujarat is known for its rich historical heritage and natural beauty. Home to the UNESCO World Heritage Site of Champaner-Pavagadh Archaeological Park, it features stunning Indo-Islamic architecture, ancient temples, and the majestic Pavagadh Hill. The district offers a perfect blend of cultural landmarks, tribal heritage, and scenic landscapes.",
        images: [
            "./svgimages/Citadel-sat-kaman-banner(1).jpg", // Champaner-Pavagadh Archaeological Park
            "./svgimages/Jami-Masjid-Campaner.webp", // Kalika Mata Temple
            "./svgimages/Panch_Mahal_and_its_gardens.jpg",
            "./svgimages/Panchmahal-Godhra.jpg",
        ]
    },

    "Dahod": {
        title: "Dahod",
        description: "Dahod is a historically significant district in eastern Gujarat, known for its tribal culture and natural beauty. It was the birthplace of Mughal Emperor Aurangzeb and features several historical monuments. The district is home to vibrant tribal communities, colorful handicrafts, and picturesque landscapes with hills, forests, and water bodies.",
        images: [
            "./svgimages/d1.jpg",
            "./svgimages/d2.jpg",
            "./svgimages/d3.jpg",
            "./svgimages/d4.jpg"
        ]
    },
    "Bhavnagar": {
    title: "Bhavnagar",
    description: "Bhavnagar is a coastal district in Gujarat, rich in history, culture, and industry. Known for its thriving diamond cutting and ship-breaking industries, it also boasts historical landmarks, vibrant markets, and scenic coastal views. Attractions include Takhteshwar Temple, Victoria Park, and the nearby Velavadar Blackbuck National Park.",
    images: [
        "./svgimages/b1.jpg",
        "./svgimages/b2.webp",
        "./svgimages/b3.jpg",
        "./svgimages/b4.jpg"
    ]
},
"Amreli": {
    title: "Amreli",
    description: "Amreli is a serene district in the Saurashtra region of Gujarat, known for its spiritual heritage and close proximity to the Gir National Park. It is the birthplace of notable poet Zaverchand Meghani and home to many temples, stepwells, and wildlife sanctuaries. The district reflects a blend of rustic charm and cultural depth.",
    images: [
        "./svgimages/a1.jpeg",
        "./svgimages/a2.jpg",
        "./svgimages/a3.jpg",
        "./svgimages/a4.jpg"
    ]
},
"Aravalli": {
    title: "Aravalli",
    description: "Aravalli is a tribal-rich district in northeastern Gujarat, carved out to preserve and develop the unique culture and geography of the region. It features lush green forests, rolling hills, and ancient temples. The district is known for eco-tourism, tribal festivals, and archaeological sites that reflect its deep-rooted heritage.",
    images: [
        "./svgimages/aa1.jpg",
        "./svgimages/aa2.webp",
        "./svgimages/aa3.webp",
        "./svgimages/aa4.jpg"
    ]
},
"Mahisagar": {
    title: "Mahisagar",
    description: "Mahisagar is a culturally vibrant district in central Gujarat, named after the sacred Mahi River. Known for its tribal heritage, archaeological sites, and scenic landscapes, the district offers a blend of history and nature. It is home to Champaner-Pavagadh Archaeological Park, a UNESCO World Heritage Site nearby.",
    images: [
        "./svgimages/m1.jpg",
        "./svgimages/m2.jpg",
        "./svgimages/m3.jpeg",
        "./svgimages/m4.avif"
    ]
},
"Sabarkantha": {
    title: "Sabarkantha",
    description: "Sabarkantha is a scenic district in northern Gujarat, known for its historical forts, temples, and natural beauty. The district features the famous Idar hills, Polo Forest, and ancient architectural marvels. Rich in culture and tradition, Sabarkantha is also noted for its vibrant tribal communities and handicrafts.",
    images: [
        "./svgimages/s1.jpg",
        "./svgimages/s2.webp",
        "./svgimages/s3.avif",
        "./svgimages/s4.jpg",
        "./svgimages/s5.jpg"
    ]
},
"Junagadh": {
    title: "Junagadh",
    description: "Junagadh is a historic and culturally rich district in Gujarat, nestled at the foot of the Girnar Hills. It boasts a legacy of Mauryan, Chalukya, and Muslim rule, evident in its forts, stepwells, and ancient inscriptions. Junagadh is also the gateway to Gir National Park, home of the Asiatic lion.",
    images: [
        "./svgimages/j11.jpg",
        "./svgimages/j2.jpg",
        "./svgimages/j4.jpg",
        "./svgimages/j1.jpg"
    ]
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

            if (details.images && details.images.length > 0) {
                currentImages = details.images;
                // Apply fade effect when changing images
                const showImage = (index) => {
                    infoImage.style.opacity = 0;
                    setTimeout(() => {
                        infoImage.src = currentImages[index];
                        infoImage.style.opacity = 1;
                    }, 300);
                };
                
                // Show first image
                showImage(currentImageIndex);

                // Previous button click handler
                prevBtn.onclick = function () {
                    if (currentImages.length > 0) {
                        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
                        showImage(currentImageIndex);
                    }
                };

                // Next button click handler
                nextBtn.onclick = function () {
                    if (currentImages.length > 0) {
                        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
                        showImage(currentImageIndex);
                    }
                };
            } else {
                infoImage.src = "images/default.jpg";
                console.log("No images found for this district");
            }
        }

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


document.addEventListener('DOMContentLoaded', function() {
    // Automatically select Ahmedabad as the default city when the page loads
    const ahmedabadPath = document.getElementById('Ahmedabad');
    if (ahmedabadPath) {
        // Simulate a click on the Ahmedabad path to display its info
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        ahmedabadPath.dispatchEvent(clickEvent);
        console.log('Default city (Ahmedabad) selected on page load');
    }
});
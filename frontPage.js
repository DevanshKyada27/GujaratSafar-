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
        description: "Ahmedabad is a vibrant city located in the western Indian state of Gujarat. Situated along the banks of the Sabarmati River, it is one of India’s major cultural and economic hubs. The city is renowned for its rich history, architectural marvels, and thriving textile industry—earning it the nickname “Manchester of India...”",
        images:[ 
            "https://t3.ftcdn.net/jpg/05/52/27/54/360_F_552275461_QdEaatYXQ1KGbAe08Xnh2bo8gp9Pmq5a.jpg",  // Sabarmati Riverfront
            "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fv1560260650%2Fkiomoi%2FAhmedabad%2Fkankaria%2520Lake%2520%2520%25281%2529.webp&w=3840&q=75",  // Kankariya Lake
            "https://sabarmatiriverfront.com/wp-content/uploads/2020/06/park-img.jpg",  //Riverside lake
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT2ixf9f5lqqzRjitu-cdrfi8rdFiWVj0gs5TsO4d4wimkoj3HFPZiCBjTbvpb3L9VNmJ1NWKCCx6k3ZNVuhBfy58pfpk_EvU7D1FbFnQ",  
            "2.png",
            "1.jpg",  // Mahatma Mandir
            "3.jpg",  // Swaminarayan Mandir
            "2.jpg",  // Jagat Palace
            "7jpg.jpg",  // jasi ki vav
            "8.jpg",  // Sidi Saiyyed jali
            "9.jpg",  // Adalaj ki vav 

        ]

    },
    "Kutch": {
        title: "Kutch",
        description: "Kutch, located in the northwestern part of Gujarat, India, is a unique region known for its breathtaking landscapes, rich cultural heritage, and archaeological significance.One of the major attractions is the Rann Utsav, a cultural festival that draws thousands of visitors from around the world to experience folk music, dance, local cuisine, and the mesmerizing full-moon view over the white desert.",
        images:[ 
            "https://www.ttrikon.com/system/images/000/777/785/7c63c8bf6212cf62cd5d1b822ebb35bb/original/Rann-Utsav.jpg?1726654901",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg",
            "https://goboundless.co/wp-content/uploads/2023/09/ruuunn.png",
            "https://temple.yatradham.org/public/Product/temple/temple_yXQ8anNL_202408041800350.jpg",
            "4.jpg",   // stravn
            "5.jpg",     //smritivan
            "6.jpg",    //prag-mahal-mandvi 
        ]

    },
    "Banaskantha": {
        title: "Banaskantha",
        description: "Banaskantha is a picturesque district located in the northeastern part of Gujarat, India, bordered by the Aravalli hills and the state of Rajasthan. Known for its natural beauty, historical significance, and agricultural strength, Banaskantha plays an important role in the state’s economy.It is well-known for its production of dairy products—home to Banas Dairy, one of Asia’s largest milk processing units..",
        images: [
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/ambaji-temple/Ambaji-Temple-Thumbnail.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/ba/Ambaji_-_Gujarat%2C_India_%284587160875%29.jpg",
            "https://cdn.s3waas.gov.in/s38ebda540cbcc4d7336496819a46a1b68/uploads/bfi_thumb/2018040281-olwa8l11fpid0koubm999gf4md5cn3bvuy0sc47mri.jpg",
            "https://cdn.s3waas.gov.in/s38ebda540cbcc4d7336496819a46a1b68/uploads/bfi_thumb/2018071986-olwa8sjy3dgq2qwe8twq8u8hoipkij8vm56ibegb62.jpg",
            "10.jpg",    //Dantiwada Dam
            "11.jpg",    //Jessore Sloth Bear Sanctuary
            "12.jpeg",   //Kumbhariya Jain Temples
            "12.jpg",   //Balaram Ambaji Wildlife Sanctuary

        ]
    },
    "Surendranagar": {
        title: "Surendranagar",
        description: "Surendranagar, located in the Saurashtra region of Gujarat, is a major hub for the cotton industry in India.The district is one of the largest producers of salt in India due to its proximity to the Little Rann of Kutch.Combining industrial strength with cultural richness, Surendranagar stands as a significant contributor to Gujarat’s economy and heritage....",
        images: [
            "https://cdn.s3waas.gov.in/s3c15da1f2b5e5ed6e6837a3802f0d1593/uploads/2018/08/2018080919.jpg",
            "https://media.navgujaratsamay.com/ngs-mig/uploads/mediaGallery/image/1666672438585.jpg-org",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/zone-wise-thumb-images/junagadh.jpg",
            "https://t3.ftcdn.net/jpg/10/39/57/60/360_F_1039576074_KK6lWDfnLdQEtKluu0lUL9CbrBKhw9Bf.jpg",  
            "13.jpg",  //Hawa Mahal, Wadhwan
            "14.jpg",  //Varnindra Dham, Patdi
            "15.jpg",  //Matri Vav, Kankavati
            "16.jpg",  //Ranakdevi's Temple, Wadhwan
            "17.jpg",  //Dholidhaja Dam
            "18.jpg",  //Chamunda Mata Temple, Chotila
        ]
    },
    "Rajkot": {
        title: "Rajkot",
        description: "Rajkot, located in the Saurashtra region of Gujarat, is a vibrant city known for its rich heritage, cultural diversity, and traditional craftsmanship. Renowned for its silver jewelry, intricate embroidery, and the world-famous Patola weaving, Rajkot continues to preserve age-old art forms that reflect the region’s artistic excellence.Rajkot is a growing industrial and educational hub, contributing to Gujarat’s economic and technological progress...",
        images: [
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/khirasara-palace/Khirasara-Palace-Banner.jpg", // Khirasara palace
            "https://myholidayhappiness.com/uploads/jagat-mandir-2842.jpg",  // Jagar Mandir
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/june/Kaba-Gandhi-No-Delo.jpg",  // Kaba-Gandhi-No-Delo
            "https://www.gujaratexpert.com/blog/wp-content/uploads/2023/11/Ramvan-Gujarat.jpg", // Ramvan
            "19.jpg",  //Rotary Dolls Meseum
            "20.jpg",  // Aji Dam
            "21.jpg",  // Lalpari Lake
            "22.jpg",  // Pradhuman Zoological Park
        ]
    },
    "Jamnagar": {
        title: "Jamnagar",
        description: "Jamnagar is a culturally vibrant city located on the western coast of Gujarat, India.Jamnagar also holds a unique place in the world of wellness, as it is home to the Gujarat Ayurved University, one of the most renowned institutions for Ayurvedic studies and research globally.With its unique blend of tradition, education, nature, and culture, Jamnagar stands out as a truly distinctive destination in Gujarat..",
        image: [
            "23.jpg",  // Panmal Lake Park
            "24.jpg",  // Lakhota Palace
            "25.jpg",  //Bhujiyo Kotho
            "26.jpg",  //Khijadia Bird Senctuary
        ]
    },
    "Gandhinagar": {
        title: "Gandhinagar",
        description: "Gandhinagar, the capital city of Gujarat, is a well-planned and serene urban center located on the western bank of the Sabarmati RiverThe city is also home to Infocity and GIFT City (Gujarat International Finance Tec-City), marking its emergence as a growing center for technology and finance...",
        images: ["https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/akshardham-temple/Akshardham-Temple-Thumbnail.jpg",  // Akshardham Temple
            "https://lh3.googleusercontent.com/proxy/l7vV4nZqm2gJP51c6G0RNM96xO4-4NwLmu6zSq3h1WhOwoJ3NRjKUpUXLNbu3YjTdu0qDcNs5z4suZVcz6ZObdMYDGIWQK8Gojh2nuVlpfZ9wzcCRsL5h5AWhO3UOulUjccoKjnWjC4",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/june/Adalaj-ni-Vav.jpg",
            "https://content.jdmagicbox.com/comp/def_content_category/botanical-gardens/aa8fc412af-botanical-gardens-4-k2tko.jpg",
            "27.jpg",  //Sarita Udhayan
            "28.jpg",  // Dandi Kutir Museum
            "29.jpg",  //Shant Sarover dam
            "1.jpeg" ,  // Indoda Park
        ]
    },
    "Vadodara": {
        title: "Vadodara",
        description: "Vadodara, also known as Baroda, is a cultural and artistic hub in Gujarat, renowned for its rich tradition of craftsmanship.Vadodara’s reputation as a center for fine arts, heritage, and design makes it a must-visit for those interested in traditional Indian craftsmanship and cultural experiences...",
        images: [
            "30.jpg",  // Laxami Vilas Palace
            "31.jpg",  // Kirti Mandir
            "32.jpg",  // EME Mandir
            "33.jpg",  // Vidhayashar Vav
            "34.jpg",  // Boaroda Museum
        ]
    },
    "Surat": {
        title: "Surat",
        description: "Surat, located in the western Indian state of Gujarat, is a dynamic and rapidly growing city situated along the banks of the Tapi River.The city holds global recognition as the largest center for diamond cutting and polishing in the world, processing over 90% of the world's diamonds.",
        images: ["https://lh5.googleusercontent.com/p/AF1QipP8YNFdCndnweuoXChzMV7VkGPCHSJf5cFMkdPj=w675-h390-n-k-no",
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRFYfs4ossV0yoIQS4_9a-yBb9Px09fHxqlpGoUl8eY2uiT_WEOGHoyuNIeR0KIAPDCDshwknggG26yggSkBUlaS2IQlVCD8RGmvRmajw",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/opti/11-2-20/Surat-Castle.jpg",  // Castle Area
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/flora--fauna/sneh-rashmi-botanical-garden/Sneh-Rashmi-Botanical-Garden-Thumbnail.jpg" , // Botanical Garden
            "35.jpg", // Tapi Riverfront
            "36.jpg",  //  Dutch Garden
        ]
    },
    "Valsad": {
        title: "Valsad",
        description: "Valsad, formerly known as Bulsar, is a charming district located along the Arabian Sea in southern Gujarat.The region is particularly famous for its lush mango orchards, especially the delicious Alphonso (Hapus) mangoes, which are exported across the country and beyond..",
        images:[ "https://lh5.googleusercontent.com/p/AF1QipNmaepBGmkSQRWrhXH7gDDjKElhDFvcknyWdPYY=w540-h312-n-k-no",
            "https://preview.redd.it/8t8abezczdw31.jpg?width=640&crop=smart&auto=webp&s=144419236229ea789003fdda744e5d2f42ae15b5",
            "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wilson_Hills_Road.JPG",
            "https://lh5.googleusercontent.com/p/AF1QipNpz1Rr-WGh4wmIZQoKQhBdmlWb2BTMxkSrPRoI=w675-h390-n-k-no" 
        ]
    },
    "DevbhoomiDwarka": {
        title: "Devbhoomi Dwarka",
        description: "Dwarka, one of the oldest and most sacred cities in India, is located on the western coast of Gujarat, near the Gulf of Kutch. Steeped in mythology and history, Dwarka is revered as the legendary kingdom of Lord Krishna and is considered one of the Char Dham pilgrimage sites for Hindus..",
        images: ["https://lh5.googleusercontent.com/p/AF1QipMru06ET5StmiljgkYN6cCfq0N4VNGRdDCe1UMe=w675-h390-n-k-no",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/nageshwar-jyotirlinga/Nageshwar-Jyotirlinga-Thumbnail.jpg",
            "https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/dwarka/beaches/shivrajpur-beac.jpg",
            "https://www.jules-verne.org/InnerSpace/pics/dwarka-underwater-city-india-innerspace-arabian-sea-gulf-cambay.jpg"
        ]
    },
    "Morbi": {
        title: "Morbi",
        description: "Morbi, located in the Saurashtra region of Gujarat, is famously known as the ceramics capital of IndiaThe city plays a vital role in the country’s industrial landscape, producing nearly 70% of India's ceramic tiles, sanitaryware, and vitrified products, making it a global hub for ceramic exports...",
        images: [ 
            "37.jpg", // Tri Mandir
            "38.jpg", // Green Tower
            "39.jpg" ,// King Fort Palace
            "40.png",  // Rani Baug
        ]

    },

    "Patan": {
        title: "Patan",
        description: "Patan, located in the Indian state of Gujarat, is a city steeped in history and renowned for its vibrant cultural legacy and stunning architecture. Once the capital of the Chalukya (Solanki) dynasty between the 8th and 12th centuries, Patan is especially famous for the magnificent Rani ki Vav, an intricately designed stepwell that has been recognized as a UNESCO World Heritage Site..",
        images: [ 
            "40.jpg", // Rani Ki Vav
            "41.jpg", // Chuturbhuj Bag
            "42.jpg", // Anand Sarover Park
            "43.jpg", // Sardar Garden
        ]

    },

    "Navsari":{
        title:"Navsari",
        description: "Nestled in the southern part of Gujarat, Navsari is a vibrant city with deep-rooted historical and cultural significance.Navsari's influence extends beyond its cultural heritage. It has grown into a thriving economic hub, particularly renowned for its diamond polishing industry, which plays a significant role in India’s global diamond trade...",
        images: [
            "44.jpg", // This is of Navsari
            "45.jpg", // Hanuman Temple
            "46.jpg", // Mankodia Garden
            "47.jpg",   // Lions senior Garden
        ]

    },

    "GirSomnath":{
        title:"GirSomnath",
        description: "Located along the scenic western coastline of Gujarat, Gir Somnath district is a captivating blend of spiritual legacy and natural wonder. At its heart lies the legendary Somnath Temple, an iconic symbol of resilience and devotion. Revered as one of the twelve Jyotirlingas of Lord Shiva, the temple has stood witness to centuries of history, invasions, and reconstructions, making it a sacred pilgrimage site for millions of devotees..",
        images: [
            "49.jpg", // Somnath Teple
            "50.jpg", // Gir National Park
            "51.jpg", // Pandav Guffa
        ]

    },

    "Anand":{
        title:"Anand",
        description: "Anand, located in central Gujarat, is a city that has earned national recognition for revolutionizing India's dairy industry. Often referred to as the “Milk Capital of India,” Anand played a pivotal role in the White Revolution, a movement that transformed India from a milk-deficient country into the world's largest producer of milk.Anand also supports a growing industrial base, with sectors like food processing, engineering, and agribusiness contributing to its economy. .",
        images: [
            "52.jpg", // Anand Dairy Meseum
            "53.jpg", // Lambhvel Hanumanji Temple
        ]

    },

    "Bharuch":{
        title:"Bharuch",
        description: "Bharuch, located on the banks of the sacred Narmada River in southern Gujarat, is one of the oldest inhabited cities in India with a rich tapestry of history, trade, and culture.  Bharuch has developed into a major industrial hub, particularly known for its chemical and textile industries. The city also boasts a blend of cultural heritage, with historic temples, stepwells, and traditional markets reflecting its centuries-old legacy...",
        images: [
            "54.jpg",  // Narmada Park
            "55.jpg",  // Shree Nilkantheshwer Mahadev Temple
        ]

    },

    "Tapi":{
        title:"Tapi",
        description: "Tapi is a relatively new district in the southern part of Gujarat, carved out to enhance administrative efficiency and regional development. The district is named after the Tapi River, which flows gracefully through the region, nourishing its lands and adding to its natural beauty.Tapi comprises five talukas—Vyara, Songadh, Uchchal, Nizar, and Valod—each contributing its own cultural and geographical charm..",
        images: [
            "56.jpg", // Tapi River
            "57.jpg", // Dosvada Dam
        ]



    },

    "Dang":{
        title:"Dang",
        description: "ked away in the verdant hills of southern Gujarat, Dang district is a hidden gem known for its untouched natural beauty and vibrant tribal culture. Nestled within the Western Ghats, not the Aravallis, Dang is one of the least populated and most forest-rich regions in the state, making it a sanctuary for nature lovers and adventurers alike....",
        images: [
            "59.jpg", // Dang Forest
            "58.jpg", // Don Waterfall
        ]

    },

    "Narmada":{
        title:"Narmada",
        description: " Narmada district in Gujarat offers a captivating blend of scenic landscapes and hidden gems. Tucked away amidst lush forests and undulating hills, this region is home to some of the most picturesque waterfalls and tranquil natural spots in the state..",
        images: [
            "60.jpg", // Narmada River Bridge
            "61.jpg", //   Shoolpaneshwar Mahadev Temple

    },

    "ChhotaUdepur":{
        title:"ChhotaUdepur",
        description: "Tucked away in the tribal heartland of eastern Gujarat, Chhota Udaipur is a culturally rich town known for its royal heritage, scenic beauty, and deep spiritual roots. Often referred to as the “Town of 108 Temples,” it boasts a unique landscape where ancient shrines line the banks of a serene lake, creating a peaceful and picturesque setting..",
        images: [
            "62.jpg", // Jag Mandir
            "63.jpg", // City Palace
            "64.jpg", // Badi Lake
        ]

    },
    "Kheda":{
        title:"Kheda",
        description: "Located in the heart of Gujarat, Kheda district is a region steeped in history, culture, and agricultural prosperity. Often referred to as the “Granary of Gujarat,” Kheda has played a pivotal role in the state’s development, both economically and historically.With its blend of historical significance, agricultural richness, and peaceful landscapes, Kheda remains a vital and culturally vibrant part of Gujarat, offering visitors a journey through the heartland of the state.",
        images: [
            "65.jpg", //  Galteshwar Mahadev Temple
            "66.jpg", // Ranchhodril Temple
        ]

        },


        "Porbandar":{
            title:"Porbandar",
            description: "Situated along the scenic shores of the Arabian Sea, Porbandar is a historic coastal city in the Saurashtra region of Gujarat, known for its cultural legacy, maritime heritage, and spiritual significance. This charming town holds a special place in India's history as the birthplace of Mahatma Gandhi, the Father of the Nation.",
            images: [
                "67.jpg", // Madhavpur Beach
                "71.jpg", // Porbandar Port
            ]
        },

        "Mehsana":{
            title:"Mehsana",
            description: "Located in the northwestern heartland of Gujarat, Mehsana district is a region that beautifully balances tradition with modern progress. Known for its rich cultural heritage, architectural landmarks, and economic vitality, Mehsana plays a significant role in the state’s agricultural and industrial landscape.",
            images: [
                "69.jpg", //  Bahuchar mata Temple
                "70.jpg", //  Dharoi Dam
            ]


        },


        "Junagadh":{
            title:"Junagadh",
            description: "Nestled at the foot of the majestic Girnar Hills, Junagadh is a historically rich city in the Saurashtra region of Gujarat, where ancient legends, diverse cultures, and natural beauty come together in harmony. With a name that means "Old Fort," Junagadh is a treasure trove of heritage sites that span Hindu, Buddhist, Jain, and Islamic influences.",
            images: [
                "72.jpg", //  Girnar Temple
                "73.jpg", //  Sakkarbaug Zoological Garden
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

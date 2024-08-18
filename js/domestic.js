let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};

document.querySelector("#close-search").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  const urlParams = new URLSearchParams(window.location.search);
  var state = urlParams.get("state");

  switch (state) {
    case "kerela":
      console.log(state);
      break;
    case "mumbai":
      document.title = "visit Mumbai";
      let caro = [
        "url(/images/taj.jpg)",
        "url(/images/mumbaiskyline.jpg)",
        "url(/images/mumbaibridge.jpg)",
        "url(/images/churchgate.jpg)",
        "url(/images/vivataj.jpg)",
      ];
      let i = 0;
      let pic = document.querySelectorAll(".box.second");

      pic.forEach((element) => {
        element.style.backgroundImage = caro[i];
        i++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Mumbai: Experience bustling streets, iconic landmarks like Gateway of India, vibrant markets, delectable street food, cultural diversity, Bollywood charm, and serene Marine Drive. An adventure awaits in every corner.  ";
      paragraph[1].textContent =
        "  Visit Mumbai for its vibrant culture, iconic landmarks, delicious street food, Bollywood allure, and bustling energy. Unforgettable experiences await.  ";
      paragraph[2].textContent =
        "Welcome to Mumbai, the city of dreams, where towering skyscrapers meet bustling streets, and vibrant culture thrives amidst historic landmarks, delectable cuisine, and endless possibilities for exploration and adventure.";
      paragraph[3].textContent =
        "Mumbai's legacy: from humble fishing village to cosmopolitan metropolis, a melting pot of cultures, commerce, Bollywood, resilience, and opportunity.";
      paragraph[4].textContent =
        "Mumbai, a marvel of contrasts: towering skyscrapers against serene beaches, bustling markets beside peaceful temples, Bollywood glamour mingled with vibrant street life, embodying India's dynamic spirit and diversity.";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "  Vibrant rhythms, diverse cultures, and spirited performances ignite the city's soul.  ";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the sea breeze, and embrace tranquility.  ";
      paragraph[8].textContent =
        " Camping in Lonavala near Mumbai: Amidst lush hills, starlit skies, and crackling campfires, find serenity and adventure. ";
      paragraph[9].textContent =
        "  Exploring Mumbai's map is crucial for navigating the vast city efficiently. With its diverse neighborhoods, bustling streets, and numerous attractions, understanding the layout ensures an optimized exploration experience. From iconic landmarks like the Gateway of India and the Taj Mahal Palace Hotel to hidden gems in historic neighborhoods like Colaba and Fort, the map unveils a treasure trove of experiences waiting to be discovered. Navigating through vibrant markets, cultural hubs, and culinary hotspots becomes seamless with the aid of a map, enabling visitors to delve deep into Mumbai's rich heritage, vibrant culture, and pulsating energy with ease and confidence. ";

      let adv = document.querySelectorAll(".para");

      adv[0].src = "./images/trek.jpeg";
      adv[1].src = "./images/lavani.webp";
      adv[2].src = "./images/juhu.jpeg";
      adv[3].src = "./images/camping.jpg";

      let h3 = document.querySelectorAll("h3");
      h3[0].textContent = "Mumbai";
      h3[1].textContent = "Mumbai";
      h3[2].textContent = "Paradise";
      h3[3].textContent = "Mumbai";
      h3[4].textContent = "Mumbai";
      h3[5].textContent = "Treking";
      h3[6].textContent = "Dances";
      h3[7].textContent = "Ocean walk";
      h3[8].textContent = "Camping";
      h3[9].textContent = "Explore Mumbai";

      let h1 = document.querySelectorAll("h1");
      h1[2].textContent = "Best of Mumbai";
      h1[3].textContent = "Enchanting Mumbai";
      h1[4].textContent = "Mumbai - Goa";

      var head = document.getElementById("head");
      head.textContent = "Adventure Activities";

      var map = document.getElementById("topograph");
      map.src = "./images/mummap.jpeg";

      let pics = document.querySelectorAll(".wrapper");
      let caros = [
        "url(/images/ganeshpuja.jpg)",
        "url(/images/tyuj.jpg)",
        "url(/images/mumbaihighway.jpg)",
      ];

      for (let j = 0; j < pics.length; j++) {
        pics[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros[j]} center/cover no-repeat`;
      }
      break;

    case "goa":
      document.title = "visit Goa";

      let caro2 = [
        "url(/images/goa2.jpg)",
        "url(/images/goa3.jpg)",
        "url(/images/goa1.jpg)",
        "url(/images/goa4.jpg)",
        "url(/images/goa5.jpg)",
      ];
      let i1 = 0;
      let pic1 = document.querySelectorAll(".box.second");

      pic1.forEach((element) => {
        element.style.backgroundImage = caro2[i1];
        i1++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        " Explore Goa: Sun-kissed beaches, Portuguese architecture, vibrant markets, lush spice plantations, water sports, and vibrant nightlife. Discover a blend of relaxation and adventure in this coastal paradise.  ";
      paragraph[1].textContent =
        "  Visit Goa for its pristine beaches, rich Portuguese heritage, vibrant culture, delectable cuisine, and unforgettable beach parties.  ";
      paragraph[2].textContent =
        "Welcome to Goa, where azure beaches meet lush greenery, vibrant markets, Portuguese architecture, and lively nightlife. Embrace relaxation, adventure, and cultural immersion in this coastal gem of India.";
      paragraph[3].textContent =
        "  Goa's legacy: a blend of Indian and Portuguese cultures, historic churches, vibrant festivals, serene beaches, and a thriving tourism industry.";
      paragraph[4].textContent =
        " Goa's wonders: golden beaches, intricate churches, spice plantations, bustling markets, mouthwatering cuisine, water sports, vibrant festivals, and a laid-back vibe, making it a paradise for travelers seeking diverse experiences.";
      paragraph[5].textContent =
        " Surfing in Goa: Catch waves, feel the thrill, embrace the sea's rhythm, endless adventure awaits.";
      paragraph[6].textContent =
        "In Goa, dances celebrate life, blend cultures, and captivate hearts with rhythm.";
      paragraph[7].textContent =
        "Soar above Goa's beauty, witness breathtaking views, and experience unforgettable adventures.";
      paragraph[8].textContent =
        "  In Goa, rave parties pulsate with music, lights, and energy, creating unforgettable nightlife experiences. ";
      paragraph[9].textContent =
        "Exploring Goa's map offers a comprehensive understanding of its diverse attractions. From pristine beaches like Palolem and Calangute to historic landmarks like Fort Aguada, each location tells a unique story. Navigate through vibrant markets, lush spice plantations, and tranquil backwaters for a cultural immersion. Understanding the layout helps optimize travel time, ensuring you don't miss must-see spots like Dudhsagar Falls or the Basilica of Bom Jesus. With its blend of Indian and Portuguese influences, Goa's map showcases a rich tapestry of heritage, cuisine, and experiences, guiding you to uncover the essence of this coastal paradise with ease and excitement. ";

      let h11 = document.querySelectorAll("h1");
      h11[2].textContent = "Best of Goa";
      h11[3].textContent = "Enchanting Goa";
      h11[4].textContent = "Goa - Kerala";

      let h31 = document.querySelectorAll("h3");
      h31[0].textContent = "Goa";
      h31[1].textContent = "Goa";
      h31[2].textContent = "Paradise";
      h31[3].textContent = "Goa";
      h31[4].textContent = "Goa";
      h31[5].textContent = "Surfing";
      h31[6].textContent = "Dances";
      h31[8].textContent = "party";

      let adv1 = document.querySelectorAll(".para");
      adv1[0].src = "/images/surfing.jpg";
      adv1[1].src = "./images/goa2.jpg";
      adv1[2].src = "./images/balloon.jpg";
      adv1[3].src = "./images/goaparty.jpeg";

      var map1 = document.getElementById("topograph");
      map1.src = "./images/goamap.png";
      map1.style.height = "400px";

      let pics1 = document.querySelectorAll(".wrapper");
      let caros1 = [
        "url(/images/goa6.jpg)",
        "url(/images/goa7.jpg)",
        "url(/images/goa8.jpg)",
      ];

      for (let j = 0; j < pics1.length; j++) {
        pics1[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros1[j]} center/cover no-repeat`;
      }
      break;

    case "himachal":
      document.title = "visit Himachal";
      let caro3 = [
        "url(/images/himachal1.jpg)",
        "url(/images/himachal2.jpg)",
        "url(/images/himachal3.jpg)",
        "url(/images/goa4.jpg)",
        "url(/images/goa5.jpg)",
      ];
      let i2 = 0;
      let pic2 = document.querySelectorAll(".box.second");

      pic2.forEach((element) => {
        element.style.backgroundImage = caro3[i2];
        i2++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Himachal for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Visit Mumbai for its vibrant culture, iconic landmarks, delicious street food, Bollywood allure, and bustling energy. Unforgettable experiences await.  ";
      paragraph[2].textContent =
        "Welcome to Mumbai, the city of dreams, where towering skyscrapers meet bustling streets, and vibrant culture thrives amidst historic landmarks, delectable cuisine, and endless possibilities for exploration and adventure.";
      paragraph[3].textContent =
        "Mumbai's legacy: from humble fishing village to cosmopolitan metropolis, a melting pot of cultures, commerce, Bollywood, resilience, and opportunity.";
      paragraph[4].textContent =
        "Mumbai, a marvel of contrasts: towering skyscrapers against serene beaches, bustling markets beside peaceful temples, Bollywood glamour mingled with vibrant street life, embodying India's dynamic spirit and diversity.";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "  Vibrant rhythms, diverse cultures, and spirited performances ignite the city's soul.  ";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the sea breeze, and embrace tranquility.  ";
      paragraph[8].textContent =
        " Camping in Lonavala near Mumbai: Amidst lush hills, starlit skies, and crackling campfires, find serenity and adventure. ";

      let h32 = document.querySelectorAll("h3");
      h32[0].textContent = "Himachal";
      h32[1].textContent = "Himachal";
      h32[2].textContent = "Paradise";
      h32[3].textContent = "Himachal";
      h32[4].textContent = "Himachal";
      h32[5].textContent = "Ice Skating";
      h32[6].textContent = "Dances";
      h32[8].textContent = "River Rafting";

      let h199 = document.querySelectorAll("h1");
      h199[2].textContent = "Best of Manali";
      h199[3].textContent = "Enchanting Sishu";
      h199[4].textContent = "Mandi - Ladakh";

      let adv2 = document.querySelectorAll(".para");
      adv2[0].src = "/images/himachal4.jpg";
      adv2[1].src = "./images/goa2.jpg";
      adv2[2].src = "./images/balloon.jpg";
      adv2[3].src = "./images/goaparty.jpeg";

      var map1 = document.getElementById("topograph");
      map1.src = "./images/himachalmap.jpg";
      map1.style.height = "400px";

      let pics4 = document.querySelectorAll(".wrapper");
      let caros4 = [
        "url(/images/himachal5.jpeg)",
        "url(/images/himachal6.jpeg)",
        "url(/images/himachal7.jpeg)",
      ];

      for (let j = 0; j < pics4.length; j++) {
        pics4[
          j
        ].style.background = ` linear-gradient(#ffffff00, #00000082), ${caros4[j]} center/cover no-repeat`;
      }

      break;

    case "uttar pradesh":
      document.title = "visit Uttar Pradesh";

      let caro4 = [
        "url(/images/ayodhya.jpg)",
        "url(/images/kushinagar.jpg)",
        "url(/images/Taj_mahal.jpg)",
        "url(/images/Varansi.jpg)",
      ];
      let i3 = 0;
      let pic3 = document.querySelectorAll(".box.second");

      pic3.forEach((element) => {
        element.style.backgroundImage = caro4[i3];
        i3++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[4].textContent =
        "Agra Fort, a UNESCO World Heritage site, mesmerizes tourists with its Mughal architecture, intricate carvings, and historical significance. Visitors can marvel at iconic structures like Jahangir Palace, Diwan-i-Khas, and Sheesh Mahal, showcasing the opulence of the Mughal era.";
      paragraph[1].textContent =
        "  In Vrindavan, peacocks dance, devotees chant, temples resonate with bhajans, and the sacred Yamuna flows, embodying Krishna's eternal, divine playground. ";
      paragraph[3].textContent =
        "Kushinagar, a sacred site for Buddhists, is renowned for being the place where Lord Buddha attained Mahaparinirvana. Tourists flock here to visit the Mahaparinirvana Temple and the impressive 20-meter reclining Buddha statue. ";
      paragraph[2].textContent =
        "The Taj Mahal, a UNESCO World Heritage Site, is renowned for its architectural beauty and historical significance, attracting millions of tourists annually. Visitors are captivated by its stunning marble domes, intricate carvings, and serene reflection pools, offering a glimpse into India's rich cultural heritage.";
      paragraph[0].textContent =
        "Varanasi, the spiritual heart of India, entices tourists with its ancient ghats lining the sacred Ganges River. Visitors are captivated by its mesmerizing Ganga Aarti ceremonies, where prayers and lamps illuminate the evening sky.";
      paragraph[5].textContent =
        "Ganga Aarti is a sacred ritual performed at the banks of the Ganges River in India, involving chanting, fire offerings, and prayers to honor the divine river's significance in Hindu culture. ";
      paragraph[6].textContent =
        "Kumbh Mela is a major Hindu pilgrimage where millions gather to bathe in sacred rivers, believed to cleanse sins. It occurs every 12 years in four different locations in India, rotating between Allahabad, Haridwar, Nashik, and Ujjain.";
      paragraph[7].textContent =
        "Manikarnika Ghat Aarti is a sacred Hindu ritual conducted on the banks of the Ganges River in Varanasi, India, where devotees offer prayers and light lamps to honor the divine elements.";
      paragraph[8].textContent =
        " The Virindavan Ghat Arti is a vibrant Hindu ritual where devotees gather on the banks of the Ganges River, chanting hymns and offering prayers amidst the enchanting glow of lamps and incense. It's a spiritual spectacle that illuminates the night with devotion and reverence.";
      paragraph[9].textContent =
        "Uttar PradeshUttar Pradesh, located in northern India, boasts a rich tapestry of cultural and historical wonders. A visit to the majestic Taj Mahal in Agra, a UNESCO World Heritage Site, is a must. The holy city of Varanasi, along the banks of the Ganges River, offers spiritual enlightenment and vibrant religious ceremonies. Lucknow, the capital, is renowned for its exquisite Mughal architecture and delectable cuisine, particularly the famous Awadhi biryani. The wildlife enthusiasts can explore Dudhwa National Park, home to rare species like tigers and swamp deer. Mathura, birthplace of Lord Krishna, is steeped in mythological significance and hosts colorful festivals year-round. Uttar Pradesh's diverse attractions promise an unforgettable journey through India's cultural heartland. ";

      let h12 = document.querySelectorAll("h1");
      h12[2].textContent = "Best of Uttar Pradesh";
      h12[3].textContent = "Enchanting Uttar Pradesh";
      h12[4].textContent = "Uttar Pradesh - Rajasthan";

      let h33 = document.querySelectorAll("h3");
      h33[0].textContent = "Uttar Pradesh";
      h33[1].textContent = "Uttar Pradesh";
      h33[2].textContent = "Paradise";
      h33[3].textContent = "Uttar Pradesh";
      h33[4].textContent = "Uttar Pradesh";
      h33[5].textContent = "Ganga Arti";
      h33[6].textContent = "Kumbh Mela";
      h33[7].textContent = "Manikarnika Ghat";
      h33[8].textContent = "Vrindavan Holi";

      let adv3 = document.querySelectorAll(".para");
      adv3[0].src = "/images/Varansi.jpg ";
      adv3[1].src = "./images/kumbhmela.jpg";
      adv3[2].src = "./images/mani.jpg";
      adv3[3].src = "./images/holi.jpg";

      var map1 = document.getElementById("topograph");
      map1.src = "./images/upmap.jpg";
      map1.style.height = "400px";

      let pics2 = document.querySelectorAll(".wrapper");
      let caros2 = [
        "url(/images/Varansi.jpg)",
        "url(/images/fort.jpg)",
        "url(/images/tajmahal.jpg)",
      ];

      for (let j = 0; j < pics2.length; j++) {
        pics2[
          j
        ].style.background = ` linear-gradient(#ffffff00, #00000082), ${caros2[j]} center/cover no-repeat`;
      }
      break;

    case "odisha":
      document.title = "visit odisha";

      let caro5 = [
        "url(/images/odisha5.jpg)",
        "url(/images/odisha2.jpg)",
        "url(/images/odisha3.jpg)",
        "url(/images/odisha1.jpg)",
      ];
      let i4 = 0;
      let pic4 = document.querySelectorAll(".box.second");

      pic4.forEach((element) => {
        element.style.backgroundImage = caro5[i4];
        i4++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[4].textContent =
        "Puri Beach, a scenic destination in Odisha, attracts visitors with its pristine shores, vibrant culture, and delicious seafood. Tourists can explore iconic landmarks like the Jagannath Temple, Konark Sun Temple, and Chilika Lake, immersing themselves in the rich heritage of the region.";
      paragraph[1].textContent =
        "The ancient city of Bhubaneswar, known as the 'Temple City of India,' mesmerizes visitors with its architectural splendor and spiritual ambiance. Temples like Lingaraj Temple and Mukteshwar Temple stand as testaments to Odisha's deep-rooted religious traditions.";
      paragraph[3].textContent =
        "The Buddhist heritage site of Ratnagiri in Odisha is famed for its ancient monasteries, stupas, and archaeological ruins dating back to the 5th century CE. Visitors flock here to explore the rich history and cultural significance of Buddhism in the region.";
      paragraph[2].textContent =
        "The stunning Sun Temple in Konark, Odisha, is a UNESCO World Heritage Site renowned for its exquisite architecture and intricate stone carvings depicting mythological tales. It stands as a testament to the architectural prowess of ancient Odisha.";
      paragraph[0].textContent =
        "The Chilika Lake, Asia's largest brackish water lagoon, is a biodiversity hotspot in Odisha, teeming with migratory birds, dolphins, and unique aquatic life. Visitors can enjoy boat rides, bird watching, and serene sunsets along its tranquil shores.";
      paragraph[5].textContent =
        "The Rath Yatra, or Chariot Festival, in Puri, Odisha, is a grand celebration where millions of devotees gather to witness the procession of Lord Jagannath, Balabhadra, and Subhadra. It's a vibrant spectacle of faith, devotion, and cultural fervor.";
      paragraph[6].textContent =
        "Koraput trekking offers lush forests, cascading waterfalls, and breathtaking vistas for adventurous explorers.";
      paragraph[7].textContent =
        " Sustainable oasis by the sea, blending luxury, nature, and conservation for rejuvenating experiences.";
      paragraph[8].textContent =
        "Yachting in Chilika Lake offers serene waters, birdwatching, island hopping, and cultural exploration, creating unforgettable experiences amidst natural splendor.";
      paragraph[9].textContent =
        "Odisha, located on the eastern coast of India, is a treasure trove of cultural heritage and natural beauty. From ancient temples to scenic beaches, from vibrant festivals to serene lakes, Odisha offers a diverse range of experiences that leave a lasting impression on every traveler.";

      let h13 = document.querySelectorAll("h1");
      h13[2].textContent = "Best of Odisha";
      h13[3].textContent = "Enchanting Odisha";
      h13[4].textContent = "Odisha - West Bengal";

      let h34 = document.querySelectorAll("h3");
      h34[0].textContent = "Odisha";
      h34[1].textContent = "Odisha";
      h34[2].textContent = "Paradise";
      h34[3].textContent = "Odisha";
      h34[4].textContent = "Odisha";
      h34[5].textContent = "Puri";
      h34[6].textContent = "Koraput Treking ";
      h34[7].textContent = "Eco Stay ";
      h34[8].textContent = "Yatching ";

      let adv4 = document.querySelectorAll(".para");
      adv4[0].src = "/images/odisha2.jpg ";
      adv4[1].src = "./images/odisha7.jpg";
      adv4[2].src = "./images/odisha8.jpg";
      adv4[3].src = "./images/odisha9.jpg";

      var map1 = document.getElementById("topograph");
      map1.src = "./images/odimap.webp";
      map1.style.height = "400px";

      let pics3 = document.querySelectorAll(".wrapper");
      let caros3 = [
        "url(/images/odisha10.jpeg)",
        "url(/images/odisha11.webp)",
        "url(/images/odisha12.jpeg)",
      ];

      for (let j = 0; j < pics3.length; j++) {
        pics3[
          j
        ].style.background = ` linear-gradient(#ffffff00, #00000082), ${caros3[j]} center/cover no-repeat`;
      }
      break;

    case "hyderabad":
      document.title = "visit Hyderabad";
      let caro42 = [
        "url(/images/hyd1.jpg)",
        "url(/images/hyd2.jpg)",
        "url(/images/hyd3.avif)",
        "url(/images/hyd4.jpg)",
        "url(/images/hyd5.jpg)",
      ];
      let i33 = 0;
      let pic45 = document.querySelectorAll(".box.second");

      pic45.forEach((element) => {
        element.style.backgroundImage = caro42[i33];
        i33++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "Welcome to Hyderabad ! Explore a world of inspiration, knowledge, and creativity right at your fingertips. ";
      paragraph[1].textContent =
        "Dive into insightful articles covering a wide range of topics, from technology and science to lifestyle and travel. ";
      paragraph[2].textContent =
        "Stay updated with the latest trends and developments in your areas of interest, curated just for you.";
      paragraph[3].textContent =
        "Discover tips, tricks, and hacks to enhance your everyday life, whether it's mastering a new skill or simplifying your routine.";
      paragraph[4].textContent =
        "Engage with our vibrant community of readers and contributors, sharing ideas, experiences, and perspectives.";
      paragraph[5].textContent =
        "Immerse yourself in captivating stories and thought-provoking discussions that ignite curiosity and spark imagination.";
      paragraph[6].textContent =
        "Join us on a journey of discovery and exploration, uncovering hidden gems and uncovering the beauty of the world around us.";
      paragraph[7].textContent =
        "From expert advice to personal anecdotes, find the inspiration you need to pursue your passions and achieve your goals.";
      paragraph[8].textContent =
        " Thank you for being a part of our community. Together, let's embark on an enriching adventure of learning, growth, and connection.";
      paragraph[9].textContent =
        "Explore our archives to discover a treasure trove of content waiting to be explored, with something new to learn and enjoy with every click. ";

      let h133 = document.querySelectorAll("h1");
      h133[2].textContent = "Best of Hyderabad";
      h133[3].textContent = " Enchanting Hyderabad";
      h133[4].textContent = "Andhra Pradesh-Hyderabad";

      let h388 = document.querySelectorAll("h3");
      h388[0].textContent = "Hyderabad";
      h388[1].textContent = "Hyderabad";
      h388[2].textContent = "Ramoji-Film-City";
      h388[3].textContent = "Hyderabad";
      h388[4].textContent = "Hyderabad";
      h388[5].textContent = "high-flying";
      h388[6].textContent = "Dances";
      h388[8].textContent = "party";

      var map2 = document.getElementById("topograph");
      map2.src = "images/hydmapp.jpeg";
      map2.style.height = "400px";
      let pic77 = document.querySelectorAll(".wrapper");
      let caro55 = [
        "url(/images/hyd6.jpg)",
        "url(/images/hyd7.jpg)",
        "url(/images/hyd8.jpg)",
      ];

      for (let j = 0; j < pic77.length; j++) {
        pic77[
          j
        ].style.background = ` linear-gradient(#ffffff00, #00000082), ${caro55[j]} center/cover no-repeat`;
      }

      break;

    // case "delhi":
    //     document.title = "visit Delhi";

    //     let caro15=[ 'url(/images/delhi_red_fort.webp)', 'url(/images/india_gate.jpg)', 'url(/images/kutub_minar.jpg)', 'url(/images/lotus_temple.jpg)','url(/images/akshar_dham.jpg.jpg)']
    //     let i15 = 0
    //     let pic15= document.querySelectorAll(".box.second");

    //     pic15.forEach((element) => {
    //         element.style.backgroundImage = caro15[i15];
    //         i15++;
    //     });

    //     paragraph=document.querySelectorAll("p")
    //     paragraph[0].textContent="The Delhi Red Fort, a UNESCO World Heritage Site, is a majestic Mughal fortress dating back to the 17th century, renowned for its intricate architecture, lush gardens, and rich history, making it a must-visit destination for tourists seeking a glimpse into India's cultural heritage."
    //     paragraph[1].textContent="India Gate, located in the heart of New Delhi, is a prominent war memorial dedicated to soldiers who sacrificed their lives in World War I. Its imposing structure, surrounded by well-maintained lawns, serves as a popular tourist attraction, offering a poignant reminder of India's rich history and the bravery of its armed forces. "
    //     paragraph[2].textContent=   "The Qutub Minar, a UNESCO World Heritage Site in Delhi, India, is a towering symbol of ancient architectural brilliance and historical significance, drawing tourists worldwide. Standing at 73 meters tall, it represents the rich cultural heritage and architectural marvels of India, attracting visitors with its intricate carvings and centuries-old history. "
    //     paragraph[3].textContent=  "The Lotus Temple, located in New Delhi, India, is a breathtaking architectural marvel known for its distinctive lotus flower-like shape. It attracts tourists worldwide for its serene atmosphere and as a symbol of unity, welcoming people of all faiths to meditate and find solace."
    //     paragraph[4].textContent=   " Akshardham, a majestic Hindu temple complex in Delhi, India, is a captivating destination for tourists, offering stunning architecture, intricate carvings, and serene gardens, providing a glimpse into Indian culture and spirituality."
    //     paragraph[5].textContent=   "The city boasts vibrant markets like Chandni Chowk, Sarojini Nagar, Connaught Place, and Khan Market, where visitors can shop for everything from traditional handicrafts and textiles to modern fashion apparel and accessories."
    //     paragraph[6].textContent=   " Delhi Water Park offers an exhilarating escape from the city heat, featuring thrilling water slides, wave pools, and relaxing lounging areas, making it an ideal destination for tourists seeking aquatic adventures and leisurely fun in India's capital."
    //     paragraph[7].textContent=   "Delhi boasts an array of museums and galleries, including the National Museum, showcasing India's rich cultural heritage, and the National Gallery of Modern Art, housing contemporary Indian artworks, making it a haven for cultural tourism enthusiasts."
    //     paragraph[8].textContent=   " Delhi's night parties pulsate with electrifying beats, vibrant crowds, and a kaleidoscope of colors, blending modern flair with cultural richness, creating unforgettable experiences under the city lights."
    //     paragraph[9].textContent= "Delhi, the capital city of India, is a vibrant blend of history and modernity. Located in the northern part of the country, it is a major tourist destination. Iconic landmarks such as the Red Fort, Qutub Minar, India Gate, and Humayun's Tomb dot the cityscape, showcasing its rich Mughal and colonial heritage. Additionally, Delhi is renowned for its bustling markets like Chandni Chowk and Connaught Place, offering a myriad of shopping and culinary experiences. The city is well-connected with an extensive metro network, facilitating convenient travel to its various attractions. Overall, Delhi is a cultural and historical treasure trove, drawing visitors from around the globe."

    //     let h115=document.querySelectorAll("h1")
    //     h115[2].textContent="Best of Delhi"
    //     h115[3].textContent="Enchanting Delhi"
    //     h115[4].textContent="Uttar Pradesh - Delhi"

    //     let h315=document.querySelectorAll("h3")
    //     h315[0].textContent="Delhi"
    //     h315[1].textContent="Delhi"
    //     h315[2].textContent="Paradise"
    //     h315[3].textContent="Delhi"
    //     h315[4].textContent="Delhi"
    //     h315[5].textContent="Shopping"
    //     h315[6].textContent="Water Park"
    //     h315[7].textContent="Museums and Gallery"
    //     h315[8].textContent="Night Party"

    //  let adv15=document.querySelectorAll(".para")
    // adv15[0].src = "/images/shoping.jpg";
    // adv15[1].src = "./images/water_park.jpg";
    // adv15[2].src = "./images/Museums.jpg";
    // adv15[3].src = "./images/delhi_night_party.jpg";

    // var map15 = document.getElementById("topograph");
    // map15.src = "./images/delhi_map.jpg";
    // map15.style.height = "400px";

    // let pics15 = document.querySelectorAll(".wrapper");
    //   let caros15=['url(/images/bestOfDelhi.jpg)', 'url(/images/delhi_enchanting.jpg)','url(/images/delhi_rajastha.jpg)']

    //   for (let j = 0; j < pics15.length; j++) {
    //       pics15[j].style.background = `linear-gradient(#ffffff00, #00000082), ${caros15[j]} center/cover no-repeat`;
    //   }
    // break;

    case "rajasthan":
      document.title = "visit Rajasthan";

      let caro5004 = [
        "url(/images/rajs_hawamahal.jpg)",
        "url(/images/rajs_chittorgarh_fort.avif)",
        "url(/images/rajs_puskar_lake.avif)",
        "url(/images/rajdd.avif)",
      ];
      let i5004 = 0;
      let pic5004 = document.querySelectorAll(".box.second");

      pic5004.forEach((element) => {
        element.style.backgroundImage = caro5004[i5004];
        i5004++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "The Hawa Mahal, a striking palace in Rajasthan, India, renowned for its intricate facade resembling a honeycomb, is a major tourist attraction, offering a glimpse into the state's rich architectural heritage and history. Visitors flock to admire its unique design and learn about its purpose as a royal observatory for the women of the palace.";
      paragraph[1].textContent =
        "Jaigarh Fort in Rajasthan, India, renowned for its massive cannon, Jaivana, offers visitors a glimpse into the rich history of the region with its impressive architecture and panoramic views of the surrounding landscape, attracting tourists seeking cultural and historical experiences.";
      paragraph[3].textContent =
        "Chittorgarh Fort, located in Rajasthan, India, is a majestic symbol of Rajput valor and resilience, boasting a rich history and stunning architecture. It attracts tourists worldwide with its grandeur, sprawling over a vast area and offering panoramic views of the surrounding landscape.";
      paragraph[2].textContent =
        "The Pushkar Lake in Rajasthan is a sacred Hindu pilgrimage site surrounded by 52 ghats, drawing tourists for its religious significance, serene atmosphere, and vibrant annual Pushkar Camel Fair, making it a popular destination for cultural and spiritual exploration.";
      paragraph[4].textContent =
        "The City Palace in Udaipur, Rajasthan, is a majestic complex showcasing exquisite architecture, intricate artwork, and stunning views of Lake Pichola. It's a must-visit destination for tourists seeking a glimpse into the rich cultural heritage of Rajasthan.";
      paragraph[5].textContent =
        "Rajasthan camel safaris offer immersive journeys through the desert landscapes, allowing tourists to experience traditional desert life, stunning sunsets, and cultural encounters amidst the golden sands of India's largest state.";
      paragraph[6].textContent =
        "The Rajasthan Hot Air Balloon Festival offers a mesmerizing aerial experience amidst the vibrant landscapes of Rajasthan, attracting tourists worldwide with its breathtaking views and cultural immersion.";
      paragraph[7].textContent =
        "Rajasthani dance, a vibrant reflection of the state's rich cultural heritage, captivates tourists with its colorful costumes, rhythmic movements, and energetic performances, serving as a major attraction for cultural tourism in Rajasthan.";
      paragraph[8].textContent =
        "Desert camping offers adventurous tourists an immersive experience amidst vast, serene landscapes, providing a unique opportunity to connect with nature under clear starlit skies, creating unforgettable memories of solitude and tranquility.";
      paragraph[9].textContent =
        "Rajasthan, located in northwest India, is a treasure trove of tourism delights. Its map reveals a diverse landscape dotted with majestic forts like Amer Fort in Jaipur and Mehrangarh Fort in Jodhpur, showcasing the state's rich history. The Thar Desert, depicted in the map's western region, offers camel safaris and stunning sunsets. In the east, Ranthambore National Park is a prominent wildlife destination, known for its tiger population. Udaipur, marked in the south, boasts picturesque lakes and palaces, adding to Rajasthan's charm as a top tourist destination.";

      let h5004 = document.querySelectorAll("h1");
      h5004[2].textContent = "Best of Rajasthan";
      h5004[3].textContent = "Enchanting Rajasthan";
      h5004[4].textContent = "Uttar Pradesh - Rajasthan";

      let h5003 = document.querySelectorAll("h3");
      h5003[0].textContent = "Rajasthan";
      h5003[1].textConte = "Rajasthan";
      h5003[2].textContent = "Paradise";
      h5003[3].textContent = "Rajasthan";
      h5003[4].textContent = "Rajasthan";
      h5003[5].textContent = "Camel Safari";
      h5003[6].textContent = "Hot Air Balloon Festivals";
      h5003[7].textContent = "Dance";
      h5003[8].textContent = "Desert Camping";

      let adv5004 = document.querySelectorAll(".para");
      adv5004[0].src = "images/camelsafari.avif";
      adv5004[1].src = "images/balloon.jpg";
      adv5004[2].src = "images/rajadance.avif";
      adv5004[3].src = "images/descamp.avif ";

      var map5004 = document.getElementById("topograph");
      map5004.src = "./images/";
      map5004.style.height = "400px";

      let pics5004 = document.querySelectorAll(".wrapper");
      let caros5004 = [
        "url(/images/bestOfRajasthan.avif)",
        "url(/images/enchanting-rajasthan.avif)",
        "url(/images/delhi_rajasthan.avif)",
      ];

      for (let j = 0; j < pics5004.length; j++) {
        pics5004[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros5004[j]} center/cover no-repeat`;
      }
      break;

      case  "singapore":
        document.title = "visit Singapore";

        let caro5009=[ 'url(/images/Singapore Flyer.jpg)', 'url(/images/sing Chinatown.jpg)', 'url(/images/sing Gardens by the Bay.jpg)', 'url(/images/sing Marina Bay Sands.jpg)','url(/images/sing Sentosa Island.jpg)']
        let i5009 = 0
        let pic5009= document.querySelectorAll(".box.second");

        pic5009.forEach((element) => {
            element.style.backgroundImage = caro5009[i5009];
            i5009++;    
        });

        paragraph=document.querySelectorAll("p")
        paragraph[0].textContent="The Singapore Flyer stands as one of the world's tallest observation wheels, offering breathtaking panoramic views of the city's skyline and landmarks. Rising 165 meters above ground, it provides a unique perspective of Singapore's urban landscape and iconic attractions. A symbol of modern engineering and architectural prowess, it attracts visitors from around the globe seeking an unforgettable experience."
        paragraph[1].textContent="Chinatown in Singapore is a vibrant neighborhood pulsating with rich cultural heritage and bustling markets. Visitors are drawn to its narrow streets lined with traditional shophouses, offering an array of authentic Chinese cuisine, temples, and unique souvenir shops. It's a captivating blend of history, tradition, and modernity in the heart of the city."
        paragraph[2].textContent="Gardens by the Bay in Singapore is a breathtaking horticultural oasis spanning 101 hectares. It features futuristic Supertrees, towering vertical gardens, and two conservatories showcasing diverse flora from around the world. This iconic attraction seamlessly blends nature with cutting-edge technology, offering visitors a mesmerizing and educational experience."
        paragraph[3].textContent="Marina Bay Sands in Singapore is an iconic integrated resort renowned for its striking architecture and luxury amenities. It features a towering trio of hotel towers crowned by a magnificent rooftop SkyPark, offering breathtaking panoramic views of the city skyline. The resort also boasts a sprawling casino, world-class shopping mall, and a diverse array of dining and entertainment options."
        paragraph[4].textContent="Sentosa Island in Singapore is a vibrant resort island renowned for its pristine beaches, thrilling attractions, and lush landscapes. Visitors can indulge in a myriad of activities, from visiting Universal Studios Singapore to relaxing at luxurious beach clubs or exploring the underwater world at S.E.A. Aquarium. With its diverse entertainment options and stunning scenery, Sentosa Island offers an unforgettable escape for travelers of all ages."
        paragraph[5].textContent="The Cable Car Sky Network in Singapore offers breathtaking aerial views of the cityscape and Sentosa Island, connecting various attractions with ease and comfort. Glide above lush greenery and iconic landmarks for an unforgettable sightseeing experience."
        paragraph[6].textContent="Scuba of Singapore offers exhilarating underwater adventures, providing enthusiasts with top-notch diving experiences amidst the vibrant marine life of Singapore's waters. Explore hidden treasures beneath the surface with expert guidance and unmatched professionalism."
        paragraph[7].textContent="Segway of Singapore offers thrilling guided tours, showcasing the city's iconic landmarks on eco-friendly Segway PTs. Explore Singapore's vibrant streets and scenic waterfronts effortlessly with their expertly crafted experiences."
        paragraph[8].textContent="Experience adrenaline-pumping wakeboarding adventures against Singapore's stunning skyline, with world-class facilities and scenic waterways offering enthusiasts of all levels an unforgettable thrill."
        paragraph[9].textContent="Singapore, a dynamic city-state in Southeast Asia, is renowned for its vibrant blend of cultures, modern skyline, and lush greenery. From the iconic Marina Bay Sands to the historic neighborhoods of Chinatown and Little India, Singapore offers a captivating mix of old and new. Visitors can explore world-class attractions like Gardens by the Bay and Sentosa Island, or indulge in culinary delights at hawker centers and Michelin-starred restaurants. With its efficient public transportation system and impeccable cleanliness, Singapore is a haven for travelers seeking convenience and luxury alike. Whether you're drawn to its bustling shopping districts, cultural festivals, or tranquil nature reserves, Singapore promises an unforgettable experience for every traveler."
         
        let h5010=document.querySelectorAll("h1")
        h5010[2].textContent="Best of Rajasthan"
        h5010[3].textContent="Enchanting Rajasthan"
        h5010[4].textContent="Uttar Pradesh - Rajasthan"

        let h5009=document.querySelectorAll("h3")
        h5009[0].textContent="Singapore"
        h5009[1].textConte="Singapore"
        h5009[2].textContent="Paradise"
        h5009[3].textContent="Singapore"
        h5009[4].textContent="Singapore"
        h5009[5].textContent="Cable Car Sky Network"
        h5009[6].textContent="Scuba"
        h5009[7].textContent="Segway"
        h5009[8].textContent="Wakeboarding"
        
              
     let adv5009=document.querySelectorAll(".para")
    adv5009[0].src = "/images/sing_CableCarSkyNetwork.jpg";
    adv5009[1].src = "./images/sing_scuba.jpg";
    adv5009[2].src = "./images/sing_segway.jpg";
    adv5009[3].src = "./images/sing_Wakeboarding.jpg";

    var map5009 = document.getElementById("topograph");
    map5009.src = "./images/sing 3d map of singapore.jpg";
    map5009.style.height = "400px";            
     
    let pics5009 = document.querySelectorAll(".wrapper");
      let caros5009=['url(/images/bestOfSingapore.jpg)', 'url(/images/enchanting_singapore.jpg)','url(/images/singapore_china.jpg)']

      for (let j = 0; j < pics5009.length; j++) {
          pics5009[j].style.background = `linear-gradient(#ffffff00, #00000082), ${caros5009[j]} center/cover no-repeat`;
      }
break


    case "gujarat":
      document.title = "visit Gujarat";
      let caro14 = [
        "url(/images/gujrat1.jpg)",
        "url(/images/gujrat4.jpg)",
        "url(/images/gujrat2.jpg)",
        "url(/images/gujrat3.jpg)",
        ,
        "url(/images/gujrat5.jpg)",
      ];
      let i13 = 0;
      let pic13 = document.querySelectorAll(".box.second");

      pic13.forEach((element) => {
        element.style.backgroundImage = caro14[i13];
        i13++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Gujarat for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Gujarat, where tradition meets modernity, boasts rich history, stunning architecture, delectable cuisine, and the birthplace of Mahatma Gandhi.  ";
      paragraph[2].textContent =
        "Welcome to, and vibrant cultle cuisine, and endless possibilities for exploration and adventure.";
      paragraph[3].textContent =
        " Explore the Kutch district, known for its textile art, dense embroidery, pilgrimage centers, forts, palaces, and museums.";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "  Vibrant rhythms, diverse cultures, and spirited performances ignite the city's soul.  ";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the sea breeze, and embrace tranquility.  ";
      paragraph[8].textContent =
        " Witness the iconic Rann of Kutch, a mesmerizing salt desert, and immerse in lively festivals. ";

      let h113 = document.querySelectorAll("h1");
      h113[2].textContent = "Best of Gujarat";
      h113[3].textContent = "Enchanting Gujarat";
      h113[4].textContent = "Gujarat- Rajasthan";

      let h313 = document.querySelectorAll("h3");
      h313[0].textContent = "Gujarat";
      h313[1].textContent = "Gujarat";
      h313[2].textContent = "Paradise";
      h313[3].textContent = "Gujarat";
      h313[4].textContent = "Gujarat";
      h313[5].textContent = "Garba";
      h313[6].textContent = "Jamnagar";
      h313[7].textContent = "Gir";
      h313[8].textContent = "Rajkot";

      let adv13 = document.querySelectorAll(".para");
      adv13[0].src = "/images/gujrat6.webp";
      adv13[1].src = "./images/jamnagar.avif";
      adv13[2].src = "./images/gujrat7.avif";
      adv13[3].src = "./images/gujrat9.jpg";

      var map13 = document.getElementById("topograph");
      map13.src = "./images/gujratmap.png";
      map13.style.height = "400px";

      let pics13 = document.querySelectorAll(".wrapper");
      let caros13 = [
        "url(/images/gujratbox1.jpg)",
        "url(/images/gujratbox2.jpg)",
        "url(/images/gujratbox3.jpg)",
      ];
      for (let j = 0; j < pics13.length; j++) {
        pics13[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros13[j]} center/cover no-repeat`;
      }

      break;

    case "nagaland":
      document.title = "visit Nagaland";
      let caro22 = [
        "url(/images/nagaland1.jpg)",
        "url(/images/nagaland2.jpg)",
        "url(/images/nagaland3.jpeg)",
        "url(/images/nagaland4.jpg)",
        "url(/images/nagaland5.jpg)",
      ];
      let i21 = 0;
      let pic21 = document.querySelectorAll(".box.second");

      pic21.forEach((element) => {
        element.style.backgroundImage = caro22[i21];
        i21++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Nagaland for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Nagaland a northeastern Indian state with diverse ethnic communities.";
      paragraph[2].textContent =
        "The region’s deep valleys, highland plateaus, and the Great Himalayas make it a paradise for nature lovers.";
      paragraph[3].textContent =
        "It shares borders with Bhutan, China, and Myanmar";
      paragraph[4].textContent =
        "Terrain: Deep valleys, highland plateaus, and Great Himalayas";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "It boasts rich biodiversity, vibrant tribal cultures, and scenic landscapes.";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the searanquility.  ";
      paragraph[8].textContent =
        " A land steeped in mystery and vibrant culture.";

      let h121 = document.querySelectorAll("h1");
      h121[2].textContent = "Best of Nagaland";
      h121[3].textContent = "Enchanting Nagaland";
      h121[4].textContent = "Nagaland- Arunachal";

      let h321 = document.querySelectorAll("h3");
      h321[0].textContent = "Nagaland";
      h321[1].textContent = "Nagaland";
      h321[2].textContent = "Paradise";
      h321[3].textContent = "Nagaland";
      h321[4].textContent = "Nagaland";
      h321[5].textContent = "Dimapur";
      h321[6].textContent = "Nagaland Village";
      h321[8].textContent = "Pig Tailed Macaque";

      let adv21 = document.querySelectorAll(".para");
      adv21[0].src = "/images/nagaland6.jpg";
      adv21[1].src = "./images/nagaland7.jpg";
      adv21[2].src = "./images/nagaland8.jpg";
      adv21[3].src = "./images/nagaland9.jpg";

      var map21 = document.getElementById("topograph");
      map21.src = "./images/nagalandmap.png";
      map21.style.height = "400px";

      let pics21 = document.querySelectorAll(".wrapper");
      let caros21 = [
        "url(/images/nagalandbox1.jpg)",
        "url(/images/nagalandbox2.jpg)",
        "url(/images/nagalandbox3.jpg)",
      ];
      for (let j = 0; j < pics21.length; j++) {
        pics21[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros21[j]} center/cover no-repeat`;
      }

      break;

    case "tripura":
      document.title = "visit Tripura";
      let caro23 = [
        "url(/images/tripura1.jpg)",
        "url(/images/tripura2.jpg)",
        "url(/images/tripura3.jpg)",
        "url(/images/tripura4.jpg)",
        "url(/images/tripura5.jpg)",
      ];
      let i22 = 0;
      let pic22 = document.querySelectorAll(".box.second");

      pic22.forEach((element) => {
        element.style.backgroundImage = caro23[i22];
        i22++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Tripura for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Tripura a northeastern Indian state with diverse ethnic communities.";
      paragraph[2].textContent =
        "The region’s deep valleys, highland plateaus, and the Great Himalayas make it a paradise for nature lovers.";
      paragraph[3].textContent =
        "It shares borders with Bhutan, China, and Myanmar";
      paragraph[4].textContent =
        "Terrain: Deep valleys, highland plateaus, and Great Himalayas";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "It boasts rich biodiversity, vibrant tribal cultures, and scenic landscapes.";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the searanquility.  ";
      paragraph[8].textContent =
        "A hidden gem that seamlessly blends culture and nature.";

      let h122 = document.querySelectorAll("h1");
      h122[2].textContent = "Best of Tripura";
      h122[3].textContent = "Enchanting Tripura";
      h122[4].textContent = "Tripura- Arunachal";

      let h322 = document.querySelectorAll("h3");
      h322[0].textContent = "Tripura";
      h322[1].textContent = "Tripura";
      h322[2].textContent = "Paradise";
      h322[3].textContent = "Tripura";
      h322[4].textContent = "Tripura";
      h322[5].textContent = "Camping";
      h322[6].textContent = "Hill Climbing";
      h322[8].textContent = "Wildlife";

      let adv22 = document.querySelectorAll(".para");
      adv22[0].src = "/images/nagaland2.jpg";
      adv22[1].src = "./images/tripura7.jpg";
      adv22[2].src = "./images/tripura8.jpg";
      adv22[3].src = "./images/tripura9.jpg";

      var map22 = document.getElementById("topograph");
      map22.src = "./images/tripuramap.png";
      map22.style.height = "400px";

      let pics22 = document.querySelectorAll(".wrapper");
      let caros22 = [
        "url(/images/tripurabox1.jpg)",
        "url(/images/tripurabox2.jpg)",
        "url(/images/tripurabox3.jpg)",
      ];
      for (let j = 0; j < pics22.length; j++) {
        pics22[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros22[j]} center/cover no-repeat`;
      }

      break;

    case "meghalaya":
      document.title = "visit Meghalaya";
      let caro10 = [
        "url(/images/meghalaya1.jpg)",
        "url(/images/meghalaya2.jpg)",
        "url(/images/meghalaya3.jpg)",
        "url(/images/meghalaya4.jpg)",
        "url(/images/meghalaya5.jpg)",
      ];
      let i9 = 0;
      let pic9 = document.querySelectorAll(".box.second");

      pic9.forEach((element) => {
        element.style.backgroundImage = caro10[i9];
        i9++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Meghalaya for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Meghalaya, a state in northeast India, beckons with its enchanting landscapes, vibrant culture, and rich heritage";
      paragraph[2].textContent =
        "The region’s deep valleys, highland plateaus, and the Great Himalayas make it a paradise for nature lovers.";
      paragraph[3].textContent = "Let’s delve into this paradise of clouds:";
      paragraph[4].textContent =
        "Terrain: Deep valleys, highland plateaus, and Great Himalayas";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "It boasts rich biodiversity, vibrant tribal cultures, and scenic landscapes.";
      paragraph[7].textContent =
        "Stroll along serene shores, feel the searanquility.";
      paragraph[8].textContent =
        "Whether you’re an intrepid traveler or a culture enthusiast, Meghalaya has something magical to offer.";

      let h19 = document.querySelectorAll("h1");
      h19[2].textContent = "Best of Meghalaya";
      h19[3].textContent = "Enchanting Meghalaya";
      h19[4].textContent = "Meghalaya- Arunachal";

      let h39 = document.querySelectorAll("h3");
      h39[0].textContent = "Meghalaya";
      h39[1].textContent = "Meghalaya";
      h39[2].textContent = "Paradise";
      h39[3].textContent = "Meghalaya";
      h39[4].textContent = "Meghalaya";
      h39[5].textContent = "Dances";
      h39[6].textContent = "Sohra (Cherrapunji)";
      h39[8].textContent = "Culture";

      let adv9 = document.querySelectorAll(".para");
      adv9[0].src = "/images/meghalaya6.jpg";
      adv9[1].src = "./images/meghalaya7.jpg";
      adv9[2].src = "./images/meghalaya8.jpg";
      adv9[3].src = "./images/meghalaya9.jpg";

      var map9 = document.getElementById("topograph");
      map9.src = "./images/meghalayamap.png";
      map9.style.height = "400px";

      let pics8 = document.querySelectorAll(".wrapper");
      let caros8 = [
        "url(/meghalayabox1.jpg)",
        "url(/images/meghalayabox2.jpg)",
        "url(/images/meghalayabox3.jpg)",
      ];
      for (let j = 0; j < pics8.length; j++) {
        pics8[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros8[j]} center/cover no-repeat`;
      }

      break;

      
      case "krabi":
        document.title = "visit Krabi";

        let caro50011=[ 'url(/images/krabi_Koh_Lanta.jpg)', 'url(/images/krabi_Krabi_Town_Night_Market.jpg)', 'url(/images/krabi_Phi_Phi_Islands.jpg)', 'url(/images/krabi_Railay_Beach.jpg)','url(/images/Krabi_Hot_Springs.jpg)']
        let i50011 = 0
        let pic50011= document.querySelectorAll(".box.second");

        pic50011.forEach((element) => {
            element.style.backgroundImage = caro50011[i50011];
            i50011++;    
        });

        paragraph=document.querySelectorAll("p")
        paragraph[0].textContent="Krabi, home to stunning limestone cliffs and pristine beaches, offers adventure seekers activities like rock climbing and island hopping. Koh Lanta, a serene island nearby, beckons with its laid-back vibe, perfect for snorkeling, diving, and enjoying breathtaking sunsets."
        paragraph[1].textContent="Krabi Town Night Market is a vibrant hub of local culture and cuisine, offering a sensory delight for tourists. Visitors can explore an array of Thai street food stalls, shop for souvenirs, and immerse themselves in the lively atmosphere of this bustling night market."
        paragraph[2].textContent="Krabi, nestled on Thailand's Andaman coast, offers breathtaking landscapes and serves as a gateway to the stunning Phi Phi Islands, renowned for their turquoise waters, limestone cliffs, and vibrant marine life, making it a paradise for travelers seeking natural beauty and adventure."
        paragraph[3].textContent="Krabi's Railay Beach Islands offer a tropical paradise with stunning limestone cliffs, crystal-clear waters, and pristine beaches, attracting tourists for its renowned rock climbing spots and tranquil ambiance."
        paragraph[4].textContent="Explore the natural wonder of Krabi Hot Springs Islands, where soothing thermal pools amidst picturesque landscapes offer a rejuvenating escape for tourists seeking relaxation and tranquility."
        paragraph[5].textContent="Krabi Island Hopping offers visitors a breathtaking adventure, exploring pristine beaches, limestone cliffs, and hidden lagoons scattered across Thailand's Andaman Sea. Dive into crystal-clear waters and discover the captivating beauty of this tropical paradise."
        paragraph[6].textContent="Krabi offers thrilling opportunities for scuba diving and snorkeling, boasting vibrant coral reefs and diverse marine life. Explore the crystal-clear waters of the Andaman Sea, where underwater wonders await adventurers of all levels. With its stunning landscapes above and below the surface, Krabi promises unforgettable aquatic experiences for tourists seeking adventure and natural beauty."
        paragraph[7].textContent="Explore the lush jungles and towering limestone cliffs of Krabi through exhilarating trekking and hiking adventures. Traverse scenic trails, hidden waterfalls, and panoramic viewpoints while immersing yourself in the natural beauty of southern Thailand. Krabi offers a thrilling experience for outdoor enthusiasts seeking unforgettable encounters with nature."
        paragraph[8].textContent="Explore the exhilarating Krabi White Water Rafting experience, where adventurers navigate through thrilling rapids amidst stunning limestone cliffs and lush jungles, offering an unforgettable adventure in the heart of Thailand's natural beauty."
        paragraph[9].textContent="Krabi, a coastal province in southern Thailand, is a tropical paradise known for its stunning limestone cliffs, crystal-clear waters, and pristine beaches. Popular activities include island hopping to spots like Phi Phi Islands and Railay Beach, where visitors can indulge in snorkeling, rock climbing, and kayaking. The province is also home to lush jungles and natural attractions such as the Emerald Pool and Thung Teao Forest Natural Park. With its vibrant local culture, delectable cuisine, and plethora of outdoor adventures, Krabi offers an unforgettable experience for tourists seeking relaxation and adventure in equal measure."
         
        let h50009=document.querySelectorAll("h1")
        h50009[2].textContent="Best of Rajasthan"
        h50009[3].textContent="Enchanting Rajasthan"
        h50009[4].textContent="Uttar Pradesh - Rajasthan"

        let h50011=document.querySelectorAll("h3")
        h50011[0].textContent="Krabi"
        h50011[1].textConte="Krabi"
        h50011[2].textContent="Paradise"
        h50011[3].textContent="Krabi"
        h50011[4].textContent="Krabi"
        h50011[5].textContent="Island Hopping"
        h50011[6].textContent="Scuba Diving and Snorkeling"
        h50011[7].textContent="Trekking and Hiking"
        h50011[8].textContent="White Water Rafting"
        
              
     let adv50011=document.querySelectorAll(".para")
    adv50011[0].src = "/images/krabi_Island_Hopping.jpg";
    adv50011[1].src = "./images/krabi_Scuba_Diving_and_Snorkeling.jpg";
    adv50011[2].src = "./images/krabi_Trekking_and_Hiking.jpg";
    adv50011[3].src = "./images/karbi_White_Water_Rafting.jpg";

    var map50011 = document.getElementById("topograph");
    map50011.src = "./images/krabi_3d_map.jpg";
    map50011.style.height = "400px";            
     
    let pics50011 = document.querySelectorAll(".wrapper");
      let caros50011=['url(/images/besOfKrabi.jpg)', 'url(/images/enchanting_krabi.jpg)','url(/images/krabi_Thailand_Malaysia.jpg)']

      for (let j = 0; j < pics50011.length; j++) {
          pics50011[j].style.background = `linear-gradient(#ffffff00, #00000082), ${caros50011[j]} center/cover no-repeat`;
      }

      break

    case "sikkim":
      document.title = "visit Sikkim";
      let caro8 = [
        "url(/images/sikkim1.jpg)",
        "url(/images/sikkim2.jpg)",
        "url(/images/sikkim3.jpg)",
        "url(/images/sikkim4.jpg)",
        "url(/images/sikkim5.jpg)",
      ];
      let i7 = 0;
      let pic7 = document.querySelectorAll(".box.second");

      pic7.forEach((element) => {
        element.style.backgroundImage = caro8[i7];
        i7++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Sikkim for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Sikkim, nestled in the northeastern part of India, is a captivating state that beckons travelers with its pristine landscapes, ancient monasteries, and vibrant culture";
      paragraph[2].textContent =
        "Sikkim boasts numerous monasteries, each with its unique charm and spiritual significance.";
      paragraph[3].textContent =
        "Explore these serene havens and witness the blend of art, culture, and devotion.";
      paragraph[4].textContent =
        "Discover breathtaking pilgrimage sites where spirituality meets natural beauty.";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "It boasts rich biodiversity, vibrant tribal cultures, and scenic landscapes.";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the searanquility.  ";
      paragraph[8].textContent = " Sikkim has something magical to offer. ";

      let h17 = document.querySelectorAll("h1");
      h17[2].textContent = "Best of Sikkim";
      h17[3].textContent = "Enchanting Sikkim";
      h17[4].textContent = "Sikkim- Arunachal ";

      let h37 = document.querySelectorAll("h3");
      h37[0].textContent = "Sikkim";
      h37[1].textContent = "Sikkim";
      h37[2].textContent = "Paradise";
      h37[3].textContent = "Sikkim";
      h37[4].textContent = "Sikkim";
      h37[5].textContent = "Trecking";
      h37[6].textContent = "Snow Leopard";
      h37[8].textContent = "River Rafting";

      let adv7 = document.querySelectorAll(".para");
      adv7[0].src = "/images/sikkim6.jpg";
      adv7[1].src = "./images/sikkim7.jpg";
      adv7[2].src = "./images/sikkim8.jpg";
      adv7[3].src = "./images/sikkim9.jpg";

      var map7 = document.getElementById("topograph");
      map7.src = "./images/sikkimmap.png";
      map7.style.height = "400px";

      let pics7 = document.querySelectorAll(".wrapper");
      let caros7 = [
        "url(/images/sikkimbox1.jpg)",
        "url(/images/sikkimbox2.jpg)",
        "url(/images/sikkimbox3.jpg)",
      ];
      for (let j = 0; j < pics7.length; j++) {
        pics7[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros7[j]} center/cover no-repeat`;
      }

      break;

    case "arunachal":
      document.title = "visit Arunachal Pradesh";
      let caro9 = [
        "url(/images/arunachal1.jpg)",
        "url(/images/arunachal2.jpg)",
        "url(/images/arunachal3.jpg)",
        "url(/images/arunachal4.jpg)",
        "url(/images/arunachal5.jpg)",
      ];
      let i8 = 0;
      let pic8 = document.querySelectorAll(".box.second");

      pic8.forEach((element) => {
        element.style.backgroundImage = caro9[i8];
        i8++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Arunchal Pradesh for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Arunachal Pradesh, known as the “Land of the Rising Sun,” is a northeastern Indian state with diverse ethnic communities.";
      paragraph[2].textContent =
        "The region’s deep valleys, highland plateaus, and the Great Himalayas make it a paradise for nature lovers.";
      paragraph[3].textContent =
        "It shares borders with Bhutan, China, and Myanmar";
      paragraph[4].textContent =
        "Terrain: Deep valleys, highland plateaus, and Great Himalayas";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "It boasts rich biodiversity, vibrant tribal cultures, and scenic landscapes.";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the searanquility.  ";
      paragraph[8].textContent =
        "Arunachal Pradesh, the “Land of the Dawn-Lit Mountains";

      let h18 = document.querySelectorAll("h1");
      h18[2].textContent = "Best of Arunachal";
      h18[3].textContent = "Enchanting Arunachal";
      h18[4].textContent = "Arunachal- Kerala";

      let h38 = document.querySelectorAll("h3");
      h38[0].textContent = "Arunchal";
      h38[1].textContent = "Arunchal";
      h38[2].textContent = "Paradise";
      h38[3].textContent = "Arunchal";
      h38[4].textContent = "Arunchal";
      h38[5].textContent = "Zoro-Valley";
      h38[6].textContent = "Pakhui Sanctuary";
      h38[8].textContent = "Golden Pagoda";

      let adv8 = document.querySelectorAll(".para");
      adv8[0].src = "/images/arunachal8.jpg";
      adv8[1].src = "./images/arunachal7.jpg";
      adv8[2].src = "./images/arunachal6.jpg";
      adv8[3].src = "./images/arunachal9.jpg";

      var map9 = document.getElementById("topograph");
      map9.src = "./images/arunachalmap.png";
      map9.style.height = "400px";

      let pics9 = document.querySelectorAll(".wrapper");
      let caros9 = [
        "url(/images/arunachalbox1.jpg)",
        "url(/images/arunachalbox2.jpg)",
        "url(/images/arunachalbox3.jpg)",
      ];
      for (let j = 0; j < pics9.length; j++) {
        pics9[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros9[j]} center/cover no-repeat`;
      }

      break;

    case "andaman":
      document.title = "visit Andaman";
      let caro1717 = [
        "url(/images/cellularJail.jpg)",
        "url(/images/corals.jpg)",
        "url(/images/corbynsCoveBeach.jpg)",
        "url(/images/Mount-Harriet-National-Park.jpg)",
        "url(/images/culture.jpg)",
      ];
      let i1717 = 0;
      let pic1717 = document.querySelectorAll(".box.second");

      pic1717.forEach((element) => {
        element.style.backgroundImage = caro1717[i1717];
        i1717++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "The Cellular Jail, nicknamed 'Kālā Pānī' ('Black Water' in Hindi), was a British prison on the Andaman and Nicobar Islands, used for exiling criminals and political dissidents by the colonial government. Among its inmates were prominent independence activists, such as Sardar Singh Artillery, Vinayak Savarkar, and Batukeshwar Dutt. Now, it stands as a national memorial monument in India.";
      paragraph[1].textContent =
        "  The Andaman and Nicobar Islands boast an array of stunning marine life, featuring over 560 documented species of corals. The vibrant colors and vast diversity beneath the waves have the power to captivate anyone who explores these underwater wonders.";
      paragraph[2].textContent =
        "Corbyn’s Cove beach, situated six kilometers from Port Blair town, offers ideal conditions for swimming and sunbathing amidst coconut-fringed shores. Visitors can enjoy amenities like hotels, restaurants, water sports, and spot historical relics such as Japanese Bunkers along the way.";
      paragraph[3].textContent =
        "Mount Manipur National Park, formerly known as Mount Harriet National Park, spans 4.62 km2 in the Andaman and Nicobar Islands. Named after Harriet C. Tytler, it houses diverse fauna including Andaman wild pigs and saltwater crocodiles, and is famed for its butterfly diversity.";
      paragraph[4].textContent =
        "The Island boast a diverse cultural landscape, blending indigenous traditions with colonial influences. Home to indigenous tribes like the Jarawa, the islands also reflect the legacies of British and Japanese colonial rule.";
      paragraph[5].textContent =
        "While most islands belong to the Andaman and Nicobar Islands Union Territory of India, Coco Islands and Preparis Island fall under Myanmar's Yangon Region.";
      paragraph[6].textContent =
        "The Andaman Islands, with their lush tropical forests and pristine beaches, are renowned for their stunning natural beauty and rich biodiversity. These islands boast a diverse array of flora and fauna, including endemic species found nowhere else in the world. ";
      paragraph[7].textContent =
        "The Andaman Islands, comprising 200 islands in the northeastern Indian Ocean, lie approximately 130 km southwest of Myanmar's Ayeyarwady Region. ";
      paragraph[8].textContent =
        "The cuisine of the Andaman Islands is a delightful fusion of local flavors, seafood delicacies, and influences from neighboring regions. Known for its fresh seafood, coconut-infused dishes, and aromatic spices, Andaman cuisine offers a unique culinary experience. ";
      paragraph[9].textContent =
        "The Andaman Sea is also home to larger marine animals such as reef sharks, manta rays, and various species of sea turtles. Lucky divers may even spot gentle giants like whale sharks or elusive creatures like dugongs.";

      let adv1717 = document.querySelectorAll(".para");

      adv1717[0].src = "./images/scuba.jpg";
      adv1717[1].src = "./images/parasailing.jpg";
      adv1717[2].src = "./images/elephant-trekking.jpg";
      adv1717[3].src = "./images/sea-walking.jpg";

      let h31717 = document.querySelectorAll("h3");
      h31717[0].textContent = "Andaman";
      h31717[1].textContent = "Andaman";
      h31717[2].textContent = "Paradise";
      h31717[3].textContent = "Andaman";
      h31717[4].textContent = "Andaman";
      h31717[5].textContent = "Treking";
      h31717[6].textContent = "Dances";
      h31717[7].textContent = "Ocean walk";
      h31717[8].textContent = "Scuba diving";
      h31717[9].textContent = "Explore Andaman";

      let h11717 = document.querySelectorAll("h1");
      h11717[2].textContent = "Best of Andaman";
      h11717[3].textContent = "Enchanting Andaman";
      h11717[4].textContent = "Andaman - Port Blair";

      var head = document.getElementById("head");
      head.textContent = "Adventure Activities";

      var map1717 = document.getElementById("topograph");
      map1717.src = "./images/Anmap.jpg";

      let pics1717 = document.querySelectorAll(".wrapper");
      let caros1717 = [
        "url(/images/andaman-1.jpg)",
        "url(/images/ench.jpg)",
        "url(/images/a&n dance forms.jpg)",
      ];

      for (let j = 0; j < pics.length; j++) {
        pics1717.style.background = ` linear-gradient(#ffffff00, #00000082), ${caros1717[j]} center/cover no-repeat`;
      }
      break;

    case "sikkim":
      document.title = "visit Sikkim";
      let caro1718 = [
        "url(/images/sikkim1.jpg)",
        "url(/images/sikkim2.jpg)",
        "url(/images/sikkim3.jpg)",
        "url(/images/sikkim4.jpg)",
        "url(/images/sikkim5.jpg)",
      ];
      let i1718 = 0;
      let pic1718 = document.querySelectorAll(".box.second");

      pic1718.forEach((element) => {
        element.style.backgroundImage = caro1718[i1718];
        i1718++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "The Cellular Jail, nicknamed 'Kālā Pānī' ('Black Water' in Hindi), was a British prison on the Andaman and Nicobar Islands, used for exiling criminals and political dissidents by the colonial government. Among its inmates were prominent independence activists, such as Sardar Singh Artillery, Vinayak Savarkar, and Batukeshwar Dutt. Now, it stands as a national memorial monument in India.";
      paragraph[1].textContent =
        "  The Andaman and Nicobar Islands boast an array of stunning marine life, featuring over 560 documented species of corals. The vibrant colors and vast diversity beneath the waves have the power to captivate anyone who explores these underwater wonders.";
      paragraph[2].textContent =
        "Corbyn’s Cove beach, situated six kilometers from Port Blair town, offers ideal conditions for swimming and sunbathing amidst coconut-fringed shores. Visitors can enjoy amenities like hotels, restaurants, water sports, and spot historical relics such as Japanese Bunkers along the way.";
      paragraph[3].textContent =
        "Mount Manipur National Park, formerly known as Mount Harriet National Park, spans 4.62 km2 in the Andaman and Nicobar Islands. Named after Harriet C. Tytler, it houses diverse fauna including Andaman wild pigs and saltwater crocodiles, and is famed for its butterfly diversity.";
      paragraph[4].textContent =
        "The Island boast a diverse cultural landscape, blending indigenous traditions with colonial influences. Home to indigenous tribes like the Jarawa, the islands also reflect the legacies of British and Japanese colonial rule.";
      paragraph[5].textContent =
        "While most islands belong to the Andaman and Nicobar Islands Union Territory of India, Coco Islands and Preparis Island fall under Myanmar's Yangon Region.";
      paragraph[6].textContent =
        "The Andaman Islands, with their lush tropical forests and pristine beaches, are renowned for their stunning natural beauty and rich biodiversity. These islands boast a diverse array of flora and fauna, including endemic species found nowhere else in the world. ";
      paragraph[7].textContent =
        "The Andaman Islands, comprising 200 islands in the northeastern Indian Ocean, lie approximately 130 km southwest of Myanmar's Ayeyarwady Region. ";
      paragraph[8].textContent =
        "The cuisine of the Andaman Islands is a delightful fusion of local flavors, seafood delicacies, and influences from neighboring regions. Known for its fresh seafood, coconut-infused dishes, and aromatic spices, Andaman cuisine offers a unique culinary experience. ";
      paragraph[9].textContent =
        "The Andaman Sea is also home to larger marine animals such as reef sharks, manta rays, and various species of sea turtles. Lucky divers may even spot gentle giants like whale sharks or elusive creatures like dugongs.";

      let adv1718 = document.querySelectorAll(".para");

      adv1718[0].src = "./images/scuba.jpg";
      adv1718[1].src = "./images/parasailing.jpg";
      adv1718[2].src = "./images/elephant-trekking.jpg";
      adv1718[3].src = "./images/sea-walking.jpg";

      let h31718 = document.querySelectorAll("h3");
      h31718[0].textContent = "Sikkim";
      h31718[1].textContent = "Sikkim";
      h31718[2].textContent = "Paradise";
      h31718[3].textContent = "Sikkim";
      h31718[4].textContent = "Sikkim";
      h31718[5].textContent = "Treking";
      h31718[6].textContent = "Dances";
      h31718[7].textContent = "Ocean walk";
      h31718[8].textContent = "Scuba diving";
      h31718[9].textContent = "Explore Sikkim";

      let h11718 = document.querySelectorAll("h1");
      h11718[2].textContent = "Best of Sikkim";
      h11718[3].textContent = "Enchanting Sikkim";
      h11718[4].textContent = "Sikkim - Port Blair";

      var head = document.getElementById("head");
      head.textContent = "Adventure Activities";

      var map1718 = document.getElementById("topograph");
      map1718.src = "./images/Anmap.jpg";

      let pics1718 = document.querySelectorAll(".wrapper");
      let caros1718 = [
        "url(/images/andaman-1.jpg)",
        "url(/images/ench.jpg)",
        "url(/images/a&n dance forms.jpg)",
      ];

      for (let j = 0; j < pics.length; j++) {
        pics1718.style.background = ` linear-gradient(#ffffff00, #00000082), ${caros1718[j]} center/cover no-repeat`;
      }
      break;

    case "karnataka":
      document.title = "visit Karnataka";
      let caro19 = [
        "url(/images/karnataka1.jpg)",
        "url(/images/karnataka2.jpg)",
        "url(/images/karnataka3.jpg)",
        "url(/images/karnataka4.jpg)",
        "url(/images/karnataka5.jpg)",
      ];
      let i18 = 0;
      let pic18 = document.querySelectorAll(".box.second");

      pic18.forEach((element) => {
        element.style.backgroundImage = caro19[i18];
        i18++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        " Karnataka truly offers “One State. Many Worlds.” Whether you’re interested in history, nature, or culinary delights, there’s something for everyone in this vibrant state!  ";
      paragraph[1].textContent =
        "   This culturally rich state offers a diverse range of experiences for visitors: ";
      paragraph[2].textContent =
        "Bengaluru (Bangalore): Known as the Silicon Valley of India, Bengaluru is a bustling metropolis with a blend of modernity and green spaces. ";
      paragraph[3].textContent =
        " Explore its lakes, vibrant nightlife, and iconic landmarks like the Bangalore Palace and Cubbon Park";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "  Vibrant rhythms, diverse cultures, and spirited performances ignite the city's soul.  ";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the sea breeze, and embrace tranquility.  ";
      paragraph[8].textContent =
        " This city exudes royal splendor, with the magnificent Mysuru Palace as its centerpiece. Don’t miss the fragrant markets, delicious cuisine, and vibrant festivals. ";

      let h118 = document.querySelectorAll("h1");
      h118[2].textContent = "Best of Karnataka";
      h118[3].textContent = "Enchanting Karnataka";
      h118[4].textContent = "Karnataka- Hyderabad";

      let h318 = document.querySelectorAll("h3");
      h318[0].textContent = "Karnataka";
      h318[1].textContent = "Karnataka";
      h318[2].textContent = "Paradise";
      h318[3].textContent = "Karnataka";
      h318[4].textContent = "Karnataka";
      h318[5].textContent = "Hampi";
      h318[6].textContent = "Mysore Palace";
      h318[8].textContent = "Ishwara Temple";

      let adv18 = document.querySelectorAll(".para");
      adv18[0].src = "/images/karnataka6.jpg";
      adv18[1].src = "./images/karnataka7.jpg";
      adv18[2].src = "./images/karnataka8.jpg";
      adv18[3].src = "./images/karnataka9.jpg";

      var map18 = document.getElementById("topograph");
      map18.src = "./images/karnatakamap.png";
      map18.style.height = "400px";

      let pics18 = document.querySelectorAll(".wrapper");
      let caros18 = [
        "url(/images/karnatakabox1.jpg)",
        "url(/images/karnatakabox2.jpg)",
        "url(/images/karnatakabox3.jpg)",
      ];
      for (let j = 0; j < pics18.length; j++) {
        pics18[
          j
        ].style.background = `linear-gradient(#ffffff00, #00000082), ${caros18[j]} center/cover no-repeat`;
      }

      break;

    case "kashmir":
      document.title = "visit Kashmir";
      let caro84 = [
        "url(/images/kashmir1.avif)",
        "url(/images/kashmir2.jpeg)",
        "url(/images/kashmir3.jpeg)",
        "url(/images/kashmir4.jpeg)",
      ];
      let i45 = 0;
      let pic43 = document.querySelectorAll(".box.second");

      pic43.forEach((element) => {
        element.style.backgroundImage = caro84[i45];
        i45++;
      });

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Explore Kashmir for breathtaking landscapes, serene mountains, rich culture, adventure sports, spiritual retreats, and warm hospitality amidst natural beauty. ";
      paragraph[1].textContent =
        "  Kashmir, where tradition meets modernity, boasts rich history, stunning architecture, delectable cuisine, and the birthplace of many historical figures.  ";
      paragraph[2].textContent =
        "Welcome to Kashmir, a land of vibrant culture, exquisite cuisine, and endless possibilities for exploration and adventure.";
      paragraph[3].textContent =
        " Explore the Kashmir valley, known for its stunning natural beauty, lush gardens, pilgrimage sites, forts, palaces, and museums.";
      paragraph[5].textContent =
        "Explore lush hills, scenic trails, and panoramic vistas in Kashmir, embracing nature's beauty.  ";
      paragraph[6].textContent =
        "  Vibrant rhythms, diverse cultures, and spirited performances ignite Kashmir's soul.  ";
      paragraph[7].textContent =
        " Stroll along serene shores, feel the mountain breeze, and embrace tranquility in Kashmir.  ";
      paragraph[8].textContent =
        " Witness the iconic Dal Lake, a mesmerizing lake, and immerse in lively festivals held throughout Kashmir. ";

      var map13 = document.getElementById("topograph");
      map13.src = "./images/kashmirmap.webp";
      map13.style.height = "400px";

      break;

    case "thailand":
      document.title = "visit Thailand";
      let caro85 = [
        "url(/images/thailand1.jpeg)",
        "url(/images/thailand2.jpeg)",
        "url(/images/thailand3.jpeg)",
        "url(/images/thailand4.jpeg)",
      ];
      let i85 = 0;
      let pic85 = document.querySelectorAll(".box.second");

      pic85.forEach((element) => {
        element.style.backgroundImage = caro85[i85];
        i85++;
      });
      let adv85 = document.querySelectorAll(".para");

      adv85[0].src = "./images/paragliding.jpg";
      adv85[1].src = "./images/Thailand5.jpeg";
      adv85[2].src = "./images/thailand6.jpeg";
      adv85[3].src = "./images/scuba.jpg";

      var map85 = document.getElementById("topograph");
      map85.src = "./images/thaimap.avif";
      map85.style.height = "400px";

      let h385 = document.querySelectorAll("h3");
      h385[0].textContent = "Thailand";
      h385[1].textContent = "Thailand";
      h385[2].textContent = "Paradise";
      h385[3].textContent = "Thailand";
      h385[4].textContent = "Thailand";
      h385[5].textContent = "Paragliding";
      h385[6].textContent = "Dances";
      h385[7].textContent = "Yatching";
      h385[8].textContent = "Scuba diving";
      h385[9].textContent = "Explore Thailand";

      let h185 = document.querySelectorAll("h1");
      h185[2].textContent = "Best of Thailand";
      h185[3].textContent = "Enchanting Thailand";
      h185[4].textContent = "Bankok- Phuket";

      paragraph = document.querySelectorAll("p");
      paragraph[0].textContent =
        "  Discover Thailand for its stunning beaches, lush jungles, ancient temples, bustling cities, and exotic cuisine amidst breathtaking landscapes. ";
      paragraph[1].textContent =
        "  Thailand, where ancient traditions blend with modernity, boasts a rich cultural heritage, magnificent temples, mouthwatering street food, and the birthplace of Muay Thai.  ";
      paragraph[2].textContent =
        "Welcome to Thailand, a land of vibrant festivals, diverse cuisine, and endless adventures waiting to be explored.";
      paragraph[3].textContent =
        " Explore the northern region of Thailand, known for its hill tribes, lush forests, waterfalls, and ancient ruins.";
      paragraph[4].textContent =
        " Traditional dances of Thailand include the elegant and graceful Thai classical dance forms, such as Khon, Ram Thai, and Likay performances.";
      paragraph[5].textContent =
        "Embark on thrilling paragliding adventures, soaring over lush landscapes and enjoying breathtaking views of Thailand's natural beauty.";
      paragraph[6].textContent =
        " Experience the vibrant nightlife, diverse cultures, and colorful festivals that ignite the spirit of Thailand's cities.";
      paragraph[7].textContent =
        "Take a leisurely stroll along pristine beaches, feel the tropical breeze, and immerse yourself in the tranquility of Thailand's coastal areas.";
      paragraph[8].textContent =
        "Witness the majestic beauty of the Phi Phi Islands, renowned for their turquoise waters, limestone cliffs, and vibrant marine life.";

      break;

    default:
      window.location.href = "error.html";
      break;
  }
};

var swiper = new Swiper(".home-slider", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// -------------------------------------------to top scroller------------------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// -----------------------------------------------------------------review slider---------------------------------------
var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".clients-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// ----------------------------------products homepage js-------------------------------------------

var bg = document.querySelector(".item-bg");
var items = document.querySelectorAll(".news__item");
var item = document.querySelector(".news__item");

function cLog(content) {
  console.log(content);
}

if ($(window).width() > 800) {
  $(document).on("mouseover", ".news__item", function (_event, _element) {
    var newsItem = document.querySelectorAll(".news__item");
    newsItem.forEach(function (element, index) {
      element.addEventListener("mouseover", function () {
        var x = this.getBoundingClientRect().left;
        var y = this.getBoundingClientRect().top;
        var width = this.getBoundingClientRect().width;
        var height = this.getBoundingClientRect().height;

        $(".item-bg").addClass("active");
        $(".news__item").removeClass("active");
        // $('.news__item').removeClass('active');

        bg.style.width = width + "px";
        bg.style.height = height + "px";
        bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
      });

      element.addEventListener("mouseleave", function () {
        $(".item-bg").removeClass("active");
        $(".news__item").removeClass("active");
      });
    });
  });
}

var swiper = new Swiper(".news-slider", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  keyboard: true,
  spaceBetween: 0,
  slidesPerView: "auto",
  speed: 300,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false,
  },
  breakpoints: {
    480: {
      spaceBetween: 0,
      centeredSlides: true,
    },
  },
  simulateTouch: true,
  navigation: {
    nextEl: ".news-slider-next",
    prevEl: ".news-slider-prev",
  },
  pagination: {
    el: ".news-slider__pagination",
    clickable: true,
  },
  on: {
    init: function () {
      var activeItem = document.querySelector(".swiper-slide-active");

      var sliderItem = activeItem.querySelector(".news__item");

      $(".swiper-slide-active .news__item").addClass("active");

      var x = sliderItem.getBoundingClientRect().left;
      var y = sliderItem.getBoundingClientRect().top;
      var width = sliderItem.getBoundingClientRect().width;
      var height = sliderItem.getBoundingClientRect().height;

      $(".item-bg").addClass("active");

      bg.style.width = width + "px";
      bg.style.height = height + "px";
      bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
    },
  },
});

swiper.on("touchEnd", function () {
  $(".news__item").removeClass("active");
  $(".swiper-slide-active .news__item").addClass("active");
});

swiper.on("slideChange", function () {
  $(".news__item").removeClass("active");
});

swiper.on("slideChangeTransitionEnd", function () {
  $(".news__item").removeClass("active");
  var activeItem = document.querySelector(".swiper-slide-active");

  var sliderItem = activeItem.querySelector(".news__item");

  $(".swiper-slide-active .news__item").addClass("active");

  var x = sliderItem.getBoundingClientRect().left;
  var y = sliderItem.getBoundingClientRect().top;
  var width = sliderItem.getBoundingClientRect().width;
  var height = sliderItem.getBoundingClientRect().height;

  $(".item-bg").addClass("active");

  bg.style.width = width + "px";
  bg.style.height = height + "px";
  bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
});

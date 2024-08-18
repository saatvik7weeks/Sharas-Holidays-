const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
// const navigationItems = document.querySelector(".nav-items-container");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  
});

var data = [
  ['in-py', 0],
  ['in-ld', 1],
  ['in-wb', 2],
  ['in-or', 3],
  ['in-br', 4],
  ['in-sk', 5],
  ['in-ct', 6],
  ['in-tn', 7],
  ['in-mp', 8],
  ['in-2984', 9],
  ['in-ga', 10],
  ['in-nl', 11],
  ['in-mn', 12],
  ['in-ar', 13],
  ['in-mz', 14],
  ['in-tr', 15],
  ['in-3464', 16],
  ['in-dl', 17],
  ['in-hr', 18],
  ['in-ch', 19],
  ['in-hp', 20],
  ['in-jk', 21],
  ['in-kl', 22],
  ['in-ka', 23],
  ['in-dn', 24],
  ['in-mh', 25],
  ['in-as', 26],
  ['in-ap', 27],
  ['in-ml', 28],
  ['in-pb', 29],
  ['in-rj', 30],
  ['in-up', 31],
  ['in-ut', 32],
  ['in-jh', 33]
];


Highcharts.mapChart('containerr', {
  chart: {
      map: 'countries/in/in-all'
  },

  title: {
      text: ''
  },

  subtitle: {
      text: ''
  },
  legend: {
     enabled: false
   },
 tooltip: { enabled: false },
   navigation: {
      buttonOptions: {
          enabled: false
      }
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    series: {
        events: {
            click: function (e) {
                const clickedId = e.point.id;

                console.log('Clicked ID:', clickedId);
                const pageUrls = {
                   'highcharts-6095g90-23' : 'http://127.0.0.1:5500/kereladomestic.html?state=kerala',
                    // Add more mappings as needed for other data points
                };

                // console.log('Keys of pageUrls:', Object.keys(pageUrls));
                // const temp = 'highcharts-6095g90-23'
                const temp = 'highcharts-6095g90-23'
                console.log(pageUrls[temp])
                const pageUrl = pageUrls[temp];
                console.log('Page URL:', pageUrl);

                if (pageUrl) {
                    window.location.href = pageUrl;
                }
            }
        }
    }
},



  series: [{
      data: data,
      name: 'Random data',
       allowPointSelect: true,
       cursor: 'pointer',
       color: "#fff",
      states: {
          select: {
            color: 'blue'
          }
      },
      dataLabels: {
          enabled: false,
          format: '{point.name}'
      }
  }]
});




const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var currentSlide = 0;

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");

  currentSlide = manual;
};

function autoSlide() {
  const nextSlideIndex = (currentSlide + 1) % slides.length;
  sliderNav(nextSlideIndex);
}


const autoSlideInterval = setInterval(autoSlide, 8000);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(autoSlideInterval); 
    sliderNav(i);
  });
});


function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// GSAP Animation
gsap.from("#aboutImage", { opacity: 0, duration: 1, x: -50, ease: "power4.out" });

// Optional: You can add more animations or interactions here if needed


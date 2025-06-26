function startTour() {
  introJs().start();
}
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});

function startTour() {
  const intro = introJs();

  intro.setOptions({
    tooltipClass: 'customTooltip',
    showStepNumbers: false,
    scrollToElement: false,
    highlightClass: 'customHighlight',
    showBullets: false,
    exitOnOverlayClick: true,
    disableInteraction: true,
    steps: [
      {
        element: '#home',
        intro: "Welcome to Home Vista. Begin your journey here.",
        position: 'bottom'
      },
      {
        element: '#search-section',
        intro: "Search properties by city, area or type.",
        position: 'bottom'
      },
      {
        element: '#listings',
        intro: "Explore hand-picked luxury listings.",
        position: 'bottom'
      },
      {
        element: '#why',
        intro: "Why thousands of users trust us.",
        position: 'bottom'
      },
      {
        element: '#contact',
        intro: "Need help? Reach out here.",
        position: 'top'
      }
    ]
  });

  // ✅ Force scroll into view manually
  intro.onchange(function (targetElement) {
    setTimeout(() => {
      const section = targetElement.closest('section') || targetElement;
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100); // slight delay for layout to adjust
  });

  intro.start();
}

// script.js

// Smooth scrolling with Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Dark/Light Mode Toggle
const btn = document.getElementById('modeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Hero scene zoom-in on scroll
gsap.to('.scene1', {
  scale: 1.1,
  scrollTrigger: {
    trigger: '.scene1',
    start: 'top top',
    end: 'bottom center',
    scrub: true,
  }
});

// Animate sections in on scroll
document.querySelectorAll('.scene').forEach(section => {
  const content = section.querySelector('.section-content') || section.querySelector('.overlay');
  if (content) {
    gsap.from(content, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }
});

// Optional: Run intro.js tour
function startTour() {
  introJs().setOptions({
    steps: [
      { intro: "Welcome to Home Vista! Let's take a quick tour." },
      { element: document.querySelector("#hero"), intro: "This is our entry section — scroll down to explore more." },
      { element: document.querySelector(".scene2"), intro: "Here's the hallway scene." },
      { element: document.querySelector(".scene3"), intro: "Our luxury listings, always verified." },
      { element: document.querySelector(".scene4"), intro: "Why choose us? We're trusted by thousands." },
      { element: document.querySelector("#contact"), intro: "Need help? Get in touch easily." },
    ]
  }).start();
}

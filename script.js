gsap.registerPlugin(ScrollTrigger);

// Hero Entrance
gsap.from(".hero-content h1", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power4.out"
});

// Product Card Fade-in on Scroll
gsap.from(".product-card", {
    scrollTrigger: {
        trigger: ".product-grid",
        start: "top 80%"
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

// Nav transformation
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(5, 5, 5, 0.95)";
        nav.style.height = "70px";
    } else {
        nav.style.background = "transparent";
        nav.style.height = "90px";
    }
});

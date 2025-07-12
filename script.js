let animationDiv = document.querySelector(".anime");
let anime = document.querySelectorAll(".anime div h2");
let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let page1Content = document.querySelector(".page1Content");
let rejouice = document.querySelectorAll(".page1Content h1 span");
let textContent2 = document.querySelectorAll(".page2 .textContent p span");
let textContent3 = document.querySelectorAll(".page3 p span");
let textContent5 = document.querySelectorAll(".page5 .textContent p span");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let page5 = document.querySelector(".page5");
let seatspage = document.querySelector(".seats");
let nums = document.querySelector("#nums");

function start() {
  let tl = gsap.timeline();

  document.body.classList.add("noscroll");

  tl.from(anime, {
    x: 250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  tl.to(anime, {
    x: -250,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  tl.to(animationDiv, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  tl.call(() => {
    document.body.style.height = "auto";
    document.body.style.overflow = "auto"; // (optional, enables scrolling again)
  });
  tl.from(rejouice, {
    y: 100,
    stagger: 0.1,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  });
}

start();

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

gsap.from(textContent2, {
  opacity: 0,
  y: 80,
  duration: 0.4,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: page2,
    start: "top 30%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(textContent3, {
  opacity: 0,
  y: 80,
  delay: 0.2,
  duration: 0.4,
  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: page3,
    start: "top 30%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(textContent5, {
  opacity: 0,
  y: 80,
  duration: 0.4,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: page5,
    start: "top 30%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(nums, {
  y: -180,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: seatspage,
    start: "top 30%",
    toggleActions: "play none none reverse",
  },
})

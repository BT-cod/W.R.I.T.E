let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 6,
    ease: "linear",
  })
  .totalProgress(0.5);
let tween2 = gsap
  .to(".marquee__part2", {
    xPercent: +100,
    repeat: -1,
    duration: 6,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marquee__inner", { xPercent: -50 });
gsap.set(".marquee__inner2", { xPercent: -50 });

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;
});

gsap.to("#page3", {
  transform: "translate(-130%)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
gsap.to("#page2 img , #page2 video", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 10%",
    end: "top -100%",
    scrub: 2,
  },
});
gsap.from("#page4", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 20%",
    end: "top 100%",
    scrub: 2,
  },
});

gsap.from("#hero h1", {
  y: 200,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  stagger: 2,
});

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursr", {
      left: dets.x,
      top: dets.y,
    });
  });
}

cursorAnimation();

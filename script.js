// -----page-height-initiation----
const page = document.querySelectorAll(".page:not(.page1)");
const navHeight = document.querySelector(".page2 nav").offsetHeight;
const pageHeight = window.innerHeight - navHeight;

const furnitureImg = [
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f375fb3b2487762e34b_furniture4-p-500.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f29da4f9f67e8a96c62_furniture3-p-500.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f1b3ba972c74f0c68a1_furniture2-p-500.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f0fd78e9995d9b714ee_furniture1-p-500.jpeg",
];
const decorImg = [
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f9f007ec2ccc6825634_lighting6.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f91d645e7308f9b5dae_lighting5.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f84388c67087f759d3f_lighting4.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99f786d7824cf60e46d52_lighting3.jpeg",
];
const officeImg = [
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fd24de55716766ac7d2_office4.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fc651de80cb9502383f_office3-p-500.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99fbc5fb3b265f362e35d_office2-p-500.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a99faf237415ee73ed1ece_office1-p-500.jpeg",
];
const techImg = [
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a0473ba97226060c68d7_tech6.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a03c007ec2d9c68258da_tech5-p-500.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a0346d78241fdce46d73_tech4.jpeg",
  "https://assets.website-files.com/61a99f057627efc50e6b701e/61a9a023624de5a4e75d4694_tech3.jpeg",
];

page.forEach((elem, ind) => {
  //   console.log(elem, ind);
  if (ind == 0) {
    elem.style.height = 1.2 * pageHeight + "px";
  } else if (ind == 1) {
    // console.log(elem);
    elem.style.height = 1 * pageHeight + "px";
  } else {
    // console.log(pageHeight, elem);
    elem.style.height = 4 * pageHeight + "px";
  }
});

// --------menu-------
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("#sideMenu").style.left = "0";
});
document
  .querySelectorAll("#close, #sideMenu div:nth-child(2)")
  .forEach((elem) => {
    elem.addEventListener("click", () => {
      document.querySelector("#sideMenu").style.left = "-100vw";
    });
  });

//-------page4-h1-top-------------------
[...document.querySelectorAll(".page4 h1")].forEach((elem) => {
  elem.style.top =
    window.innerHeight - elem.offsetHeight - 0.02 * pageHeight + "px";
});
//--------page4-section-height----------
[...document.querySelectorAll(".page4 section")].forEach((elem) => {
  elem.style.height = pageHeight + "px";
});
document.querySelector(".tech").style.height = pageHeight * 1.2 + "px";
//----------page-2-center----------
document.querySelector(".page2 .center").style.top = 2 * pageHeight + "px";
// -----page3-img-top----
// document.querySelector(".page3 .img").style.top = navHeight + "px";
// -----functions----
const p2CH1 = document.querySelectorAll(".page2 .center h1");
const p2CH1Len = p2CH1.length;
Array.from(p2CH1).forEach((elem, ind) => {
  var zIndex = p2CH1Len - ind - 1;
  elem.style.zIndex = -zIndex;
});

// -----------------page4--sections-img-load------------

furnitureImg.forEach((elem, ind) => {
  document.querySelector(
    ".page4 .furniture .img"
  ).innerHTML += `<img src="${elem}" alt="">`;
});
decorImg.forEach((elem, ind) => {
  document.querySelector(
    ".page4 .decor .img"
  ).innerHTML += `<img src="${elem}" alt="">`;
});
officeImg.forEach((elem, ind) => {
  document.querySelector(
    ".page4 .office .img"
  ).innerHTML += `<img src="${elem}" alt="">`;
});
techImg.forEach((elem, ind) => {
  document.querySelector(
    ".page4 .tech .img"
  ).innerHTML += `<img src="${elem}" alt="">`;
});
// -----gsap-----
gsap.from(".page2 .title", {
  translateY: "-100%",
  top: "-3vh",
  scrollTrigger: {
    trigger: ".page2 .title",
    scroller: ".container",
    scrub: 2,
    // markers: true,
    start: "top 60%",
  },
});
gsap.from(".page2 svg", {
  width: "100%",
  scrollTrigger: {
    trigger: ".page2 .title",
    scroller: ".container",
    scrub: 3,
    // markers: true,
    start: "top 60%",
  },
});

gsap.to("nav", {
  position: "fixed",
  top: "0px",
  //   paddingRight: "2.5vw",
  scrollTrigger: {
    trigger: "nav",
    scroller: ".container",
    scrub: true,
    // markers: true,
    start: "top 0px",
  },
});

Array.from(document.querySelectorAll(".page2 .center h1")).forEach(
  (elem, ind) => {
    gsap.to(elem, {
      overflow: "hidden",
      height: 0,
      //   opacity: 0,
      scrollTrigger: {
        trigger: elem,
        scroller: ".container",
        scrub: 1,
        start: `top ${navHeight + 40}px`,
        // markers: true,
      },
    });
  }
);
gsap.to(".page2 .center", {
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".container",
    scrub: true,
    start: `top 0px`,
    // markers: true,
    // pin: true,
  },
});

gsap.to(".page3 .img", {
  top: 0,
  transform: "translate(-50%, 0%)",
  width: "96vw",
  height: pageHeight + "px",
  borderRadius: 1,
  scrollTrigger: {
    trigger: ".page3 ",
    scroller: ".container",
    scrub: 1,
    pin: true,
    start: `top ${navHeight}px`,
    // markers: true,
  },
});
Array.from(
  document.querySelectorAll(".page, nav, .title svg, .categories, #menu")
).forEach((elem) => {
  gsap.to(elem, {
    background: "#E8E2DA",
    color: "#2E2A27",
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".container",
      scrub: 1,
      //   markers: true,
      start: `top ${navHeight}px`,
      onEnter: () => {
        // document.querySelector(".page").style.backgroundColor = "#E8E2DA";
        // document.querySelector(".page").style.color = "#2E2A27";
        // document.querySelector("nav").style.backgroundColor = "#E8E2DA";
        // document.querySelector("nav").style.color = "#2E2A27";
        // document.querySelector(".title svg").style.backgroundColor = "#E8E2DA";
        // document.querySelector(".title svg").style.color = "#2E2A27";
      },
    },
  });
});

gsap.to(".nav-container", {
  borderBottom: "1px solid #2E2A27",
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".container",
    scrub: 1,
    // markers: true,
    start: `top ${navHeight}px`,
  },
});

gsap.to(".page4  h1", {
  scrollTrigger: {
    trigger: ".page4  ",
    scroller: ".container",
    // markers: true,
    scrub: true,
    start: "top 80%",
  },
});

// [...document.querySelectorAll(".page4 h1")].forEach((elem) => {
//   gsap.from(elem, {
//     // y: "200",
//     // opacity: 0,
//     scrollTrigger: {
//       trigger: elem,
//       scroller: ".container",
//       // markers: true,
//       scrub: true,
//       // start: "top 80%",
//       end: "top 80%",
//     },
//   });
// });

gsap.to(".furniture h1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".decor",
    scroller: ".container",
    scrub: true,
    // markers: true,
    end: "top 90%",
  },
});
gsap.to(".decor h1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".office",
    scroller: ".container",
    scrub: true,
    // markers: true,
    end: "top 90%",
  },
});
gsap.to(".office h1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".tech",
    scroller: ".container",
    scrub: 1,
    // markers: true,
    end: "top 90%",
  },
});

const p4Sections = document.querySelectorAll(".page4 section");
Array.from(
  document.querySelectorAll(
    ".furniture img:first-child, .decor img:first-child, .office img:first-child, .tech img:first-child"
  )
).forEach((elem, ind) => {
  gsap.from(elem, {
    y: "150",
    opacity: 0,

    scrollTrigger: {
      trigger: p4Sections[ind],
      scroller: ".container",
      scrub: 3,
      start: "top 80%",
      // markers: true,
    },
  });
});

Array.from(
  document.querySelectorAll(
    ".furniture img:nth-child(2), .decor img:nth-child(2), .office img:nth-child(2), .tech img:nth-child(2)"
  )
).forEach((elem, ind) => {
  gsap.from(elem, {
    opacity: 0,
    y: "-200",

    scrollTrigger: {
      trigger: p4Sections[ind],
      scroller: ".container",
      scrub: 3,
      start: "top 80%",
      // markers: true,
    },
  });
});

Array.from(
  document.querySelectorAll(
    ".furniture img:nth-child(3), .decor img:nth-child(3), .office img:nth-child(3), .tech img:nth-child(3)"
  )
).forEach((elem, ind) => {
  gsap.from(elem, {
    y: "250",
    opacity: 0,

    scrollTrigger: {
      trigger: p4Sections[ind],
      scroller: ".container",
      scrub: 3,
      start: "top 80%",
      // markers: true,
    },
  });
});

Array.from(
  document.querySelectorAll(
    ".furniture img:nth-child(4), .decor img:nth-child(4), .office img:nth-child(4), .tech img:nth-child(4)"
  )
).forEach((elem, ind) => {
  gsap.from(elem, {
    y: "100",
    opacity: 0,

    scrollTrigger: {
      trigger: p4Sections[ind],
      scroller: ".container",
      scrub: 3,
      start: "top 80%",
      // markers: true,
    },
  });
});

[
  ...document.querySelectorAll(
    ".page4 section, nav, .title svg, .container, #menu"
  ),
].forEach((elem) => {
  gsap.to(elem, {
    color: "#E8E2DA",
    background: "#2E2A27",
    scrollTrigger: {
      trigger: ".decor",
      scroller: ".container",
      start: "top 95%",
      end: "top 90%",
      scrub: true,
      // markers: true,
      onEnter: () => {
        document.querySelector(".nav-container").style.borderBottom =
          "1px solid #eee";
      },
      onLeaveBack: () => {
        document.querySelector("nav").style.backgroundColor = "#E8E2DA";
        document.querySelector("nav").style.color = "#2E2A27";
        document.querySelector(".title svg").style.backgroundColor = "#E8E2DA";
        document.querySelector(".title svg").style.color = "#2E2A27";
        document.querySelector(".nav-container").style.borderBottom =
          "1px solid #2e2A27";
        document.querySelector("#menu").style.background = " transparent";
        document.querySelector("#menu").style.color = "#2E2A27";
      },
    },
  });
});

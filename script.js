function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();

function loadreAnimations() {
  var tl = gsap.timeline();
  tl.from(".line h1, .blink, .waiting", {
    y: 100,
    stagger: 0.4,
    duration: 0.8,
  });
  tl.from("line1-part1 h4",{
      opacity: 0,
      duaration: 1,
      onStart: function () {
        let h4timer = document.querySelector(".line h4");
        let grow = 0;
        setInterval(function () {
          grow++;
          if (grow <= 100) {
            h4timer.textContent = grow++;
          } else {
            h4timer.textContent = 100;
          }
        }, 40);
      },
    },"-=0.5");
  tl.from(".waiting",{
    opacity:0,
    duration:0.1
  },"-=0.3")
  tl.to(
    ".blink h2",
    {
      opacity: 1,
      animationName: "blinkanim",
      duaration: 0.1,
    },
    "-=0.3"
  );

  tl.to(".line h1, .line1-part1, .blink, .blink h2, .waiting", {
    opacity: 0,
    duration: 0.3,
    stagger: {
      amount: 1,
    },
    delay: 1.5,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#page1", {
    y: 1200,
    opacity:0,
    duration: 0.8,
    ease: "power4",
  });

  tl.from("#nav",{
    opacity:0,
    duration:0.2
  })

  tl.from(".hero h1, .hero h2",{
    y: 100,
    stagger: {
      amount: 0.6
    },
    duration: 0.5,
    ease: "power4"
  })
}
loadreAnimations();

function cursorAnimation() {
  const cursor = document.getElementById('crsr');
document.addEventListener('mousemove', (event) => {
    gsap.to(cursor,{
      opacity:1,
      x: event.clientX,
      y: event.clientY,
    })
});

document.addEventListener('mouseleave', (event) => {
  gsap.to(cursor,{
    opacity:0,
  })
});
}
cursorAnimation();

function vidcrsrAnimation(){
  var flag = 0;
  const video = document.querySelector('.videoContainer video')
  const image = document.querySelector('.videoContainer img')
  const vidcrsr = document.querySelector('.vid-crsr');
  const vidcontainer = document.querySelector('.videoContainer');
  const cusror = document.querySelector('#crsr')
  
  vidcontainer.addEventListener('mouseenter', (event) => {
   gsap.to(cusror,{
    opacity:0,
    scale: 0
   }) 
   gsap.to(vidcrsr,{
    x: event.x - vidcontainer.getBoundingClientRect().x - 600,
    y: event.y - vidcontainer.getBoundingClientRect().y,
   })
  })

  vidcontainer.addEventListener('mousemove', (event) => {
    gsap.to(vidcrsr,{
      x: event.clientX - vidcontainer.getBoundingClientRect().x - 700,
      y: event.clientY - vidcontainer.getBoundingClientRect().y,
    })
  })

  vidcontainer.addEventListener('mouseleave', (event) => {
    gsap.to(cusror,{
      opacity:1,
      scale: 1
    }) 
    gsap.to(vidcrsr,{
      x: 0,
      y: 0,
    })
  })
  vidcrsr.addEventListener('click',function(){
    if(flag == 0){
      video.play();
      video.style.opacity = 1;
      image.style.opacity = 0;
      document.querySelector(".vid-crsr").innerHTML = `<i class="ri-pause-fill"></i>`;
      gsap.to(".vid-crsr",{
        scale:0.5,
      })
      flag = 1;
    }else{
      video.pause();
      video.style.opacity = 0;
      image.style.opacity = 1;
      document.querySelector(".vid-crsr").innerHTML = `<i class="ri-play-large-fill"></i>`;
      gsap.to(".vid-crsr",{
        scale:1,
      })
      flag = 0;
    }
  })
}

vidcrsrAnimation();

function sheryAnimation(){
  Shery.makeMagnet(".nav-part2 a", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 2,
  });

    Shery.imageEffect('.imgelem', {
      style: 5,
      config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7968602339095181},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.45,"range":[0,10]},"metaball":{"value":0.41,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":11,"range":[0,100]}},
      gooey: true,
  })
}
sheryAnimation();


function movingHeading(){

const elem1h1 = document.querySelectorAll('.elem1 h1');
const element1 = document.querySelectorAll('.elem1');
element1.forEach(function(elem){
  elem1h1.forEach(function(h1){
    elem.addEventListener('mouseenter',() => {
      gsap.to(h1,{
        transform: "translateY(-100%)",
      })
    })
  
    elem.addEventListener('mouseleave',() => {
      gsap.to(h1,{
        transform: "translateY(0%)",
      })
    })
  })
})

const elem2h1 = document.querySelectorAll('.elem2 h1');
const element2 = document.querySelectorAll('.elem2');
element2.forEach(function(elem){
  elem2h1.forEach(function(h1){
    elem.addEventListener('mouseenter',() => {
      gsap.to(h1,{
        transform: "translateY(-100%)",
      })
    })
  
    elem.addEventListener('mouseleave',() => {
      gsap.to(h1,{
        transform: "translateY(0%)",
      })
    })
  })
})

const elem3h1 = document.querySelectorAll('.elem3 h1');
const element3 = document.querySelectorAll('.elem3');
element3.forEach(function(elem){
  elem3h1.forEach(function(h1){
    elem.addEventListener('mouseenter',() => {
      gsap.to(h1,{
        transform: "translateY(-100%)",
      })
    })
  
    elem.addEventListener('mouseleave',() => {
      gsap.to(h1,{
        transform: "translateY(0%)",
      })
    })
  })
})

const elem4h1 = document.querySelectorAll('.elem4 h1');
const element4 = document.querySelectorAll('.elem4');
element4.forEach(function(elem){
  elem4h1.forEach(function(h1){
    elem.addEventListener('mouseenter',() => {
      gsap.to(h1,{
        transform: "translateY(-100%)",
      })
    })
  
    elem.addEventListener('mouseleave',() => {
      gsap.to(h1,{
        transform: "translateY(0%)",
      })
    })
  })
})

const elem5h1 = document.querySelectorAll('.elem5 h1');
const element5 = document.querySelectorAll('.elem5');
element5.forEach(function(elem){
  elem5h1.forEach(function(h1){
    elem.addEventListener('mouseenter',() => {
      gsap.to(h1,{
        transform: "translateY(-100%)",
      })
    })
  
    elem.addEventListener('mouseleave',() => {
      gsap.to(h1,{
        transform: "translateY(0%)",
      })
    })
  })
})

const elem6h1 = document.querySelectorAll('.elem6 h1');
const element6 = document.querySelectorAll('.elem6');
element6.forEach(function(elem){
  elem6h1.forEach(function(h1){
    elem.addEventListener('mouseenter',() => {
      gsap.to(h1,{
        transform: "translateY(-100%)",
      })
    })
  
    elem.addEventListener('mouseleave',() => {
      gsap.to(h1,{
        transform: "translateY(0%)",
      })
    })
  })
})

const social1h2 = document.querySelectorAll('.socialdiv1 h2');
const social1 = document.querySelectorAll('.socialdiv1');
social1.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    social1h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    social1h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})

const social2h2 = document.querySelectorAll('.socialdiv2 h2');
const social2 = document.querySelectorAll('.socialdiv2');
social2.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    social2h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    social2h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})

const social3h2 = document.querySelectorAll('.socialdiv3 h2');
const social3 = document.querySelectorAll('.socialdiv3');
social3.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    social3h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    social3h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})

const social4h2 = document.querySelectorAll('.socialdiv4 h2');
const social4 = document.querySelectorAll('.socialdiv4');
social4.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    social4h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    social4h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})

const social5h2 = document.querySelectorAll('.socialdiv5 h2');
const social5 = document.querySelectorAll('.socialdiv5');
social5.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    social5h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    social5h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})

const social6h2 = document.querySelectorAll('.socialdiv6 h2');
const social6 = document.querySelectorAll('.socialdiv6');
social6.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    social6h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    social6h2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})

const emailh2 = document.querySelectorAll('.email h2');
const email = document.querySelectorAll('.email');
email.forEach(function(elem){
  elem.addEventListener('mouseenter',() => {
    emailh2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(-100%)",
      })
    })
  })
  
  elem.addEventListener('mouseleave',() => {
    emailh2.forEach(function(h2){
      gsap.to(h2,{
        transform: "translateY(0)",
      })
    })
  })
})



}
movingHeading();

function flagAnimation(){
  document.addEventListener('mousemove',(dets) => {
    gsap.to('#flag',{
      x:dets.clientX,
      y:dets.clientY,
    })
  })
  
  document.querySelector('#hero3').addEventListener('mouseenter',() => {
    gsap.to('#flag',{
      opacity:1
    })
  })
  
  document.querySelector('#hero3').addEventListener('mouseleave',() => {
    gsap.to('#flag',{
      opacity:0
    })
  })
}
flagAnimation();

function scrollAnimation(){
  const page3underline = document.querySelector('.page3Underline');
  gsap.from(page3underline,{
    width: 0,
    duration: 1.2,
    transformOrigin: "right left",
    scrollTrigger:{
      trigger: ".page3Underline",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
      // markers: true
    }
  })

var elemUnderlines = gsap.utils.toArray('.elemUnderline');
elemUnderlines.forEach((underline) => {
  gsap.from(underline, {
    width: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: underline,
        scroller: "#main",
        start: "top 90%",
        end: "top 80%",
        scrub: 2,
    }
});
})

  gsap.from('.elem-circle',{
    y: 50,
    opacity:0,
    duration: 1.2,
    scrollTrigger:{
      trigger: ".elem-circle",
      scroller: "#main",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
      // markers: true
    }
  })

  gsap.from('.elem-circle2',{
    y: 50,
    opacity:0,
    duration: 1.2,
    scrollTrigger:{
      trigger: ".elem-circle2",
      scroller: "#main",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
      // markers: true
    }
  })

  gsap.from('.elem-circle3',{
    y: 50,
    opacity:0,
    duration: 1.2,
    scrollTrigger:{
      trigger: ".elem-circle3",
      scroller: "#main",
      start: "top 50%",
      end: "top 30%",
      scrub: 2,
      // markers: true
    }
  })

  const page4underline = document.querySelector('.page4Underline');
  gsap.from(page4underline,{
    width: 0,
    duration: 1.2,
    transformOrigin: "right left",
    scrollTrigger:{
      trigger: ".page4Underline",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
      // markers: true
    }
  })

  const page4h4 = document.querySelector('.page4-textArea h4');
  gsap.from(page4h4,{
    opacity: 0,
    y: 80,
    duration: 1.2,
    scrollTrigger:{
      trigger: page4h4,
      scroller: "#main",
      start: "top 85%",
      end: "top 60%",
      scrub: 2,
      // markers: true
    }
  })

  const page4_underline = document.querySelector('.page4-underline');
  gsap.from(page4_underline,{
    width: "10%",
    duration: 1.2,
    transformOrigin: "right left",
    scrollTrigger:{
      trigger: ".page4-underline",
      scroller: "#main",
      start: "top 100%",
      end: "top 80%",
      scrub: 2,
    }
  })

  const page6underline = document.querySelector('.page6Underline');
  gsap.from(page6underline,{
    width: 0,
    duration: 1.2,
    transformOrigin: "right left",
    scrollTrigger:{
      trigger: ".page6Underline",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      scrub: 2,
      // markers: true
    }
  })

  const page6_underline = document.querySelector('.page6-underline');
  gsap.from(page6_underline,{
    width: 0,
    duration: 1.2,
    transformOrigin: "right left",
    scrollTrigger:{
      trigger: ".page6-underline",
      scroller: "#main",
      start: "top 100%",
      end: "top 90%",
      scrub: 2,
    }
  })
}

scrollAnimation();

function textAnimation() {

  document.addEventListener("DOMContentLoaded", function() {
    var clutter = "";
    var clutter2 = "";

    document.querySelector(".page6-head h1").textContent.split("").forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
    });
    document.querySelector(".page6-head h1").innerHTML = clutter;

    document.querySelector(".page6-head h2").textContent.split("").forEach(function (elem) {
        clutter2 += `<span>${elem}</span>`;
    });
    document.querySelector(".page6-head h2").innerHTML = clutter2;

    document.querySelector(".letsCreate").addEventListener("mouseenter", function () {
        gsap.to(".page6-head h1 span", {
            opacity: 0,
            stagger: 0.05
        });
        gsap.to(".page6-head h2 span", {
            delay: 0.35,
            opacity: 1,
            stagger: 0.1
        });
    });

    document.querySelector(".letsCreate").addEventListener("mouseleave", function () {
        gsap.to(".page6-head h1 span", {
            opacity: 1,
            stagger: 0.1,
            delay: 0.35
        });
        gsap.to(".page6-head h2 span", {
            opacity: 0,
            stagger: 0.05
        });
    });
});

}

textAnimation();

function touch(){
  document.addEventListener('touchmove', function(event) {
    event.preventDefault(); // Avoid this unless necessary
}, { passive: false });
}

touch();
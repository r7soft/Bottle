function st_lm(){
    gsap.registerPlugin(ScrollTrigger);
  
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
    }

    st_lm();

var it=gsap.timeline();
 it.to("#batli",{
  scrollTrigger:{
    trigger:"#batli",  
    scroller:"#main",
    start:"top 5%",
    end:"top -544%",
    scrub: 1,
    pin:true,
  },
  rotate:0,
  stagger:0.05,
 },)  
 it.to("#batli",{
  scrollTrigger:{
    trigger:"#batli",
    scroller:"#main",
    start:"top 4.8%",
    end:"top -56%",
    pin:true,
    scrub: 1.3,
  },
  opacity:0,
  scale:0.4,
  // y:"30px",
  stagger:0.05,
 },)       
 // gsap.to("#batli",{
  //   scrollTrigger: {
  //     trigger: "#batli",
  //     scroller: "#main",
  //     start:"top 5%",
  //     end:"top -544%",
  //     pin:true,
  //     scrub: 1,
  //     // markers: true
  // },
  // rotate: 0,
  // stagger: 0.05,
  // })
  
  // gsap.to("#batli",{
  //   scrollTrigger: {
  //     trigger: "#batli",
  //     scroller: "#main",
  //     start:"top 4.8%",
  //     end:"top -56%",
  //     scrub: 1.2,
  //     pin:true,
  //     // markers: true
  // },  
  // scale: .4,
  // stagger: 0.05,
  // },)    
//  it.to("#batli",{
//     transform:`rotate(0deg)`,
//      y:"400%",
//      ease: Expo.easeINOut,
//     duration:4,
//  }) 
//  it.to("#batli",{
//     transform:`rotate(0deg)`,
//      y:"100%",
//      ease: Expo.easeINOut,
//     duration:20,
//  })                                                                                                                                
// var i = 0;
// var batli=document.querySelector("#batli");
// window.addEventListener('scroll',function(){ 
//     batli.style.transform=`rotate(0deg)`;
    

//     console.log("scrolling");
// } );

// gsap.to("#batli",{
//       transform:`rotate(0deg)`,
//        y:"100%",
//        ease: Expo.easeINOut,
//       duration:20,
//    })
// var batli=document.querySelector("#batli");
//  window.addEventListener('scroll',function(){ 
  
//    gsap.to("#batli",{
//    scrollTrigger: "batli", 
//     scrollTrigger: {trigger: ".line-1", 
//     toggleActions: "play none none none",
//      start: "top bottom",
//       end: "bottom top"},
//       rotate:0,
//       y:"600%",
//       opacity:0,
//    ease: Expo.easeINOut,
//    })})








   //    mix-blend-mode: difference;
  //  document.addEventListener("mousemove", function(dets){
    // document.querySelector("#container").style.left = `${(dets.x*0.25)}px`
    // document.querySelector("#container").style.top = `${dets.y*0.25}px`
//     document.querySelector("#container").style.transform = `translate(${(dets.x)*0.2}px, ${(dets.y)*0.2}px)`;

// })

// document.addEventListener("mousemove" ,function (dets){
//   document.querySelector("#cursor").style.left=`${(dets.x)}px`
//   document.querySelector("#cursor").style.top=`${(dets.y)}px`
// })





// gsap.to("#batli",{
//   scrollTrigger: {
//     trigger: "#batli",
//     scroller: "#main",
//     start:"top 5%",
//     end:"top -544%",
//     pin:true,
//     scrub: 1,
//     // markers: true
// },
// rotate: 0,
// stagger: 0.05,
// })

// gsap.to("#batli",{
//   scrollTrigger: {
//     trigger: "#batli",
//     scroller: "#main",
//     start:"top 4.8%",
//     end:"top -56%",
//     scrub: 1.2,
//     pin:true,
//     // markers: true
// },  
// scale: .4,
// stagger: 0.05,
// },)
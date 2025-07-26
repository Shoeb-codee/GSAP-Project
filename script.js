let crsr = document.getElementById("crsr")


function loaderAnimation(){
  var tl = gsap.timeline();

tl.from(".line h1",{
  y: 80,
  opacity:0,
  duration:1,
  delay:0.2,
 

})
tl.from('#line1-part1',{
  opacity:0,
  duration:3,
  onStart:function(){
    var h5tiimer = document.querySelector('#line1-part1 h5',)
var grow = 0;
setInterval(()=>{
  if(grow < 100){
     h5tiimer.innerHTML = grow++
    }else{
     h5tiimer.innerHTML = grow
  }
},28)
  }
});

gsap.to('.line h2',{
  animationName: "anime",
  opacity:1,
  delay:1.7
})

tl.to('#loader',{
  opacity:0,
  duration:1,
  delay:1
})
tl.from('#page1',{
  opacity:0,
  delay:0.2,
  y:1500,
  duration:0.8,
})

tl.to('#loader',{
  display:'none'
})
tl.from("#nav",{
  opacity: 0,
  delay:0.5,
  y:-10,
  duration:1.5,
}).from(".hero h1",{
  y:120,
  stagger:0.2,
},"<")

}
function cursorAnimation(){
  // Cursor Movement
document.addEventListener("mousemove", function(dets){
  gsap.to(crsr,{
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.1,
    ease: "power2.out"
  })
})
  // Magnetic effect
  document.querySelectorAll(".magnetic").forEach((btn) => {
    const strength = 30; // distance of attraction

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x / 2,
        y: y / 2,
        duration: 0.2
      });

      gsap.to(crsr, {
        x: e.clientX,
        y: e.clientY,
        scale: 1,
        duration: 0.2
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
      gsap.to(crsr, { scale: 1, duration: 0.3 });
    });
  });
}
loaderAnimation();
cursorAnimation();



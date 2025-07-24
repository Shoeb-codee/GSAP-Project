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
},30)
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
}

loaderAnimation();

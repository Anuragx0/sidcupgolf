var crsr = document.querySelector("#cursor");
var crbl = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px",
    crsr.style.top = dets.y +"px",
    crbl.style.left = dets.x - 200 +"px",
    crbl.style.top = dets.y- 200 +"px"
})

var h3all = document.querySelectorAll("#nav h3");
h3all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3,
        crsr.style.border ="1px solid #fff",
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1,
        crsr.style.border ="0px solid #95c11e ",
        crsr.style.backgroundColor = "#95c11e"
    })
})

var crsrelem = document.querySelectorAll("#page4 .elem");
crsrelem.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3,
        crsr.style.border = "1px solid #fff",
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #95c11e",
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to("#nav", {
    backgroundColor :"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -18%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }

})


gsap.from(".card",{
    scale:0,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:1
    }

})

gsap.from("#image-up",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#image-up",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 65%",
        scrub:4
    }
})

gsap.from("#image-dn",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#image-dn",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:"100px",
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2
    }
})
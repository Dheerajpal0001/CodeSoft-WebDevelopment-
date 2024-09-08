// smooth locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector(".body"),
    smooth: true
});

function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(e){
        // console.log(e);
        // console.log(e.clientX, e.clientY);
        document.querySelector('.minicircle').style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${xscale},${yscale})`;
    })
}
circlemousefollower();


function firstPageAnimation(){
    // gsap.from('#h1',{duration: 1, y:'100%', ease:'smooth', opacity: '0', delay: 0.7})
    // gsap.from('#h2',{duration: 1, y:'100%', ease:'smooth', opacity: '0', delay: 1})
    // gsap.from('#h3',{duration: 1, y:'100%', ease:'smooth', opacity: '0', delay: 1.5})
    // gsap.from('.headings',{duration: 1, y:'100%', ease:'smooth', opacity: '0', delay: 1, stagger: 1})
    
    var t1 = gsap.timeline();
    t1
    .from('#h1',{ y:'100%', ease:Expo.easeInOUt, opacity: '0'})
    .from('#h2',{y:'50%', ease:Expo.easeInOUt, opacity: '0'})
    .from('#h3',{y:'-100%', ease:Expo.easeInOUt, opacity: '0'})
    
    var t2 =gsap.timeline({defaults:{duration:'0.7',delay:'0.1'}});
    t2
    .from('#s1',{y:'-150%',ease:Expo.easeInOUt,opacity:'0',})
    .from('.links',{y:'100%', opacity:'0', ease: Expo.easeInOUt})
    .from('#s2',{y:'-150%',ease: Expo.easeInOUt, opacity:'0'},'<')
}    
firstPageAnimation();


function circleSkew(){

    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 1;
    window.addEventListener("mousemove",function(e){
        clearTimeout(timeout);
        var xdiff = e.clientX - xprev;
        var ydiff = e.clientY - yprev;

        xprev = e.clientX;
        yprev = e.clientY;

        // console.log(xdiff,ydiff);
        // console.log(gsap.utils.clamp(0.8, 1.2, xdiff));
        // console.log(gsap.utils.clamp(0.8, 1.2, ydiff));
        
        xscale = gsap.utils.clamp(0.9, 1.1, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);
        
        circlemousefollower(xscale, yscale);
    })


    timeout = setTimeout(function(e){
        document.querySelector('.minicircle').style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(1,1})`;
    
    },100)
}
circleSkew();


document.querySelectorAll(".elem").forEach(function(elem){

    var rot  = 0;
    var diffrot = 0;
    
    elem.addEventListener("mousemove", function(el){
        // console.log(el.clientX,el.clientY);
        // console.log(el.clientY - elem.getBoundingClientRect().top);
        var diff = el.clientY - elem.getBoundingClientRect().top;
        // console.log(diff);
        diffrot  = el.clientX - rot;
        rot = el.clientX;
        var ans = gsap.utils.clamp(-20, 20, diffrot);
        
            gsap.to(elem.querySelector("img"),{opacity: 1, ease:Power3, top: diff, left: el.clientX, rotate: ans})
        });

        elem.addEventListener("mouseleave", function(el){
            // console.log("hello");
            // console.log(el.clientX,el.clientY);
            gsap.to(elem.querySelector("img"),{opacity: 0, ease:Power3})
        });


});





var rect=document.querySelector("#center")

rect.addEventListener("mousemove",function(details){
  

    var reactangleLocation=rect.getBoundingClientRect();


    var insiderectval=Math.floor(details.clientX-reactangleLocation.left+1);
   
    console.log(insiderectval)
    if(insiderectval<reactangleLocation.width/2){
        
        // console.log("red")

        var redColor=gsap.utils.mapRange(0,reactangleLocation.width/2,255,0,insiderectval);
        
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0 )`,
            ease: Power4 ,
        })
    }
    else{
        // console.log("blue")

        var bluecolor=gsap.utils.mapRange(reactangleLocation.width/2,reactangleLocation.width,0,255,insiderectval);

        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4
        })
    }


})

rect.addEventListener("mouseleave",function(){
     gsap.to(rect,{
        backgroundColor:"white"
     })
})
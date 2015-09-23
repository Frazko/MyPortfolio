
var cont = 0;
var speed = .1;

/////////////Animation

function startAd() {
//    
    
    /*========================  CLICKTAG  =============================*/
    
    // var clickTag = "http://www.merrilledge.com/";
    // var adBtn = document.getElementById("ad");

    // function OPENW(){
    //     window.open(clickTag);
    // }

    // adBtn.addEventListener("click", OPENW, false);
    /*================================================================*/
    var screen = document.getElementById('screen');
    
    //Set positions and attributes


    var adContainer = document.getElementById("container");
    var ctaShimmer = document.getElementById("ctaShimmer");
    
    TweenMax.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    init();
    listeners();
    
    function listeners(){
        container.addEventListener('mouseenter', ctaOver, false);
        container.addEventListener('mouseleave', ctaOut, false);
    }
    
    function ctaOver(){
        TweenLite.to(shine, .35, {left:146, ease:Sine.easeIn});

    }
    
    function ctaOut(){
        TweenLite.to(shine, 0, {left:-37, ease:Sine.easeIn});

    }
}



function init(){
    TweenLite.set(frame1_coppy1,{opacity:0});
    TweenLite.set(frame1_coppy2,{opacity:0,left:-262});
    TweenLite.set(frame1_coppy4,{opacity:0,left:-262});
    TweenLite.set(gold_card,{bottom:-92});

    setTimeout (function(){animation1()}, 20);
    
    
};




function animation1(){
    TweenMax.to( "#gold_bar", .4, {opacity:1,ease:Sine.easeOut});
    TweenMax.to( "#gold_card", .4, {bottom:-2,ease:Sine.easeOut,delay:1});
    TweenMax.to( "#frame1_coppy1", .4, {opacity:1,ease:Sine.easeOut,delay:1.5});
    TweenMax.to( "#frame1_coppy2", .4, {opacity:1,left:18,ease:Sine.easeIn,delay:2});
    TweenMax.to( "#frame1_coppy3", .4, {opacity:1,ease:Sine.easeOut,delay:3});
    TweenMax.to( "#frame1_coppy4", .4, {opacity:1,left:18,ease:Sine.easeIn,delay:3.5});
   TweenLite.delayedCall(5,animation2);

};

function animation2(){
    TweenMax.to( "#frame1_coppy1", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame1_coppy2", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame1_coppy3", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame1_coppy4", .4, {opacity:0,ease:Sine.easeOut});

    TweenMax.to( "#frame2_coppy1", .4, {opacity:1,ease:Sine.easeOut,delay:1});
    TweenMax.to( "#frame2_coppy2", .4, {opacity:1,left:17,ease:Sine.easeIn,delay:1.5});
    TweenMax.to( "#frame2_coppy3", .4, {opacity:1,ease:Sine.easeOut,delay:2});
    TweenLite.delayedCall(3.5,animation3);


}

function animation3(){

    TweenMax.to( "#frame2_coppy1", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame2_coppy2", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame2_coppy3", .4, {opacity:0,ease:Sine.easeOut});

    TweenMax.to( "#frame3_coppy1", .4, {opacity:1,ease:Sine.easeOut,delay:1});
    TweenMax.to( "#frame3_coppy2", .4, {opacity:1,ease:Sine.easeOut,delay:1});
    TweenMax.to( "#frame3_coppy3", .4, {opacity:1,left:18,ease:Sine.easeIn,delay:1.5});
    TweenLite.delayedCall(3.5,animation4);

}

function animation4(){
    TweenMax.to( "#frame3_coppy1", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame3_coppy2", .4, {opacity:0,ease:Sine.easeOut});
    TweenMax.to( "#frame3_coppy3", .4, {opacity:0,ease:Sine.easeOut});


    TweenMax.to( "#gold_bar", .4, {bottom:65,ease:Sine.easeOut,delay:1});
    TweenMax.to( "#gold_card", .4, {bottom:65,ease:Sine.easeOut,delay:1});
    TweenMax.to( "#cta_container", .4, {bottom:0, ease:Sine.easeOut,delay:1});

    TweenMax.to( "#frame4_copy1", .4, {opacity:1,ease:Sine.easeOut,delay:1.5});
    TweenMax.to( "#frame4_copy2", .4, {opacity:1,ease:Sine.easeOut,delay:1.5});

    TweenMax.to("#welcome_promo", .2, {delay:2.5, top:0, ease:Bounce.easeOut});
    TweenLite.to(shine, .35, {delay:3,left:146, ease:Sine.easeIn});

}








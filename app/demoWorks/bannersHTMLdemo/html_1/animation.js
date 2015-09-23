//************************************************************************************
//DC ENABLER - POLITE LOAD
//************************************************************************************
// If true, start function. If false, listen for INIT.
window.onload = function() {
    //setupDom();
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
      }
}

//The following code out of the enablerInitHandler function:

function pageLoadedHandler() {
    addListeners();
     if (Enabler.isVisible()) {
        adVisibilityHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
      }
}

/*function enablerInitHandler() {
    addListeners();
    adVisibilityHandler();
}*/

//The following code out of the enablerInitHandler function:


function adVisibilityHandler() {
    document.getElementById("banner").style.visibility = "visible";
   // dooranimation();
    frame1();
}

//**********************
//Set up DOM
//**********************


//*************
//listener
//************
function addListeners(){
       document.getElementById("banner").addEventListener('click', bgExitHandler, false);
}

function bgExitHandler(e){
    Enabler.exit('Background Exit');
}

function frame1(){
    Enabler.startTimer('Animation Timer');
    TweenLite.delayedCall(4, frame2);
}

function frame2(){
    TweenLite.to(copy1, .5, {opacity:0, ease:Sine.easeIn});
    TweenLite.to(copy2, .5, {opacity:1, ease:Sine.easeIn, delay:.2});
    
    TweenLite.delayedCall(4, frame3);
}

function frame3(){
    
    TweenLite.to(doors, .4, {opacity:1, ease:Sine.easeIn});
    TweenLite.to(glow, .4, {opacity:1, ease:Sine.easeIn, delay:.4});
    TweenLite.to([copy2, bg], .2,{opacity:0, ease:Sine.easeIn, delay:.3});
    TweenLite.to(lDoor, 1.6, {left:-158, ease: Sine.easeIn, delay:.4});
    TweenLite.to(rDoor, 1.6, {right:-158, ease: Sine.easeIn, delay:.4});
    
    //TweenLite.to(glow, .6, {scaleX:3, ease:Sine.easeIn, delay:.6});
    TweenLite.to(glow, .6, {opacity:0, ease:Sine.easeIn, delay:.6});
    TweenLite.to([lDoorBorder, rDoorBorder], 1.3, {width:9, ease: Sine.easeIn, delay:.8});
    
    TweenLite.to(lShadow, .8, {right:9, ease:Sine.easeIn, delay:.7});
    TweenLite.to(rShadow, .8, {left:9, ease:Sine.easeIn, delay:.7});
    TweenLite.to([lShadow, rShadow], 1, {width:9, ease: Sine.easeIn, delay:.7});
    
    TweenLite.to([lCloseHandle, rCloseHandle], .6, {opacity:0, ease:Sine.easeIn, delay:.7});
    TweenLite.to(lCloseHandle, .6, {right:-2, ease:Sine.easeIn, delay:.7});
    TweenLite.to(rCloseHandle, .6, {left:-2, ease:Sine.easeIn, delay:.7});
    
    TweenLite.to([lOpenHandle, rOpenHandle], .6, {opacity:1, ease:Sine.easeIn, delay:.7});
    TweenLite.to(lOpenHandle, .6, {right:-4, ease:Sine.easeIn, delay:.7});
    TweenLite.to(rOpenHandle, .6, {left:-4, ease:Sine.easeIn, delay:.7});

    TweenLite.delayedCall(4, frame4);
}

function frame4(){
    TweenLite.to(final_bg, 3, {top:68, ease:Sine.easeIn, onComplete:endTimer});
    TweenLite.to(copy4, .5, {opacity:1, ease:Sine.easeIn, delay:1});
    TweenLite.to(divider1, .5, {opacity:.4, ease:Sine.easeIn, delay:1.5});
    TweenLite.to(copy5, .5, {opacity:1, ease:Sine.easeIn, delay:2});
    TweenLite.to(divider2, .5, {opacity:.4, ease:Sine.easeIn, delay:2.5});
    TweenLite.to(copy6, .5, {opacity:1, ease:Sine.easeIn, delay:3});
}

function endTimer(){
    Enabler.stopTimer('Animation Timer');
}
var x = 0;
var y = 0;
var y2 = 0;
var scrollPos = 0;
var gabru = document.getElementById("gabru");
var biker = document.getElementById("biker");
var pilot = document.getElementById("pilot");
var gabik = document.getElementById("gabik");
var blane = document.getElementById("blane");
var grain = document.getElementById("grain");
var gabra = document.getElementById("para");
var fgab = true;
var fbik = false;
var fpil = false;
var fpar = false;

$(document).keydown(function(e) {

  if (e.keyCode == "39") {
    rightt();
  }
  if (e.keyCode == "37") {
    noMove();
  }
});
$(document).keyup(function(){noMove();});

// window.setTimeout(function() {
  window.addEventListener('scroll', function(){

  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    noMove();
  }
  else if ((document.body.getBoundingClientRect()).top < scrollPos) {
    rightt();
  }
  else if ((document.body.getBoundingClientRect()).top == scrollPos) {
    noMove();
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});
// },10);


function leftt() {
  runningLeft = 1;
  gabru.classList.remove("lookingRight");
  gabru.classList.remove("runningRight");
  gabru.classList.add("lookingLeft");
  gabru.classList.add("runningLeft");
  biker.classList.remove("lookingRight");
  biker.classList.remove("runningRight");
  biker.classList.add("lookingLeft");
  biker.classList.add("runningLeft");
  pilot.classList.remove("runningRight");
  pilot.classList.add("runningLeft");
  x = x - 20;
  if (x >= -17470) {

      if (x < -4300 && x > -4700) {

      }
      else if (x <= -4700 && x > -13280) {

      }
      else if (x <= -13280 && x >-13480) {

    }

      else if (x <= -13480 && x >-14500) {

    }

      else if (x <= -14500 && x >-16200) {

    }

      else if(x <= 17300 && x >- 17350) {

    }
      else if(x <= -17350) {

    }

  }
  else if ( y > -2940){
    y-=20;
}
  else {
    x=-17470;
    y=-2940;
}
  $(".floor").css("transform", "translate(" + x + "px," + 0 + "px)");
  $(".khy").css("transform", "translate(" + x + "px," + 0 + "px)");
  $(".midg").css("transform", "translate(" + (x * 1.25) + "px," + 0 + "px)");
  $("#end-stats").css("transform", "translate(" + x + "px," + y + "px)");
  $("#black").css("transform", "translate(" + x + "px," + y + "px)");
  $(".katpu").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl1").css("transform", "translate(" + (x - 24) + "px," + (y - 164) + "px) perspective(500px) rotateY(-25deg) rotateZ(-1deg) scale(1.1,1.5)");
  $("#cl2").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl3").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl3e").css("transform", "translate(" + x + "px," + y + "px)");
}

function rightt() {
  runningRight = 1;
  gabru.classList.remove("lookingLeft");
  gabru.classList.remove("runningLeft");
  gabru.classList.add("lookingRight");
  gabru.classList.add("runningRight");
  biker.classList.remove("lookingLeft");
  biker.classList.remove("runningLeft");
  biker.classList.add("lookingRight");
  biker.classList.add("runningRight");
  pilot.classList.remove("runningLeft");
  pilot.classList.add("runningRight");
  x = x - 20;
  if (x >= -17470) {
 
      if (x < -4300 && x > -4500) {
        if(fgab && !fbik && !fpil && !fpar){
            gabru.classList.add("hide");
            gabik.classList.remove("hide");
        }

      }
      else if (x <= -4500 && x > -13280) {
        if(fgab && !fbik && !fpil && !fpar){
            gabik.classList.add("hide");
            biker.classList.remove("hide");
            fgab=false;
            fbik=true;
        }
      }

      else if (x <= -13280 && x >-13320) {
        if(!fgab && fbik && !fpil && !fpar){
            biker.classList.add("hide");
            blane.classList.remove("hide");
        }
    }

    // to lift pilot
      else if (x <= -13320 && x >-14000) {
        if(!fgab && fbik && !fpil && !fpar){
            blane.classList.add("hide");
            pilot.classList.remove("hide");
            fbik=false;
            fpil=true;

            if(fpil){
              y2-=8;
            $("#pilot").css("transform","translate(" + 0 + "px," + y2 + "px) scale(0.9,0.9)");
            }
        }
    }
  
    else if (x <= -14000 && x >-16200) {
      y2=-416;
     $("#pilot").css("transform","translate(" + 0 + "px," + y2 + "px) scale(0.7,0.7)");
    }
      else if(x <= -17350) {
        if(!fgab && !fbik && fpil && !fpar){
            pilot.classList.add("hide");
            gabra.classList.remove("hide");
            fpil=false;
            fpar=true;
        }
    }
  }
  else if ( y > -2940){
    x+=20;
    y-=20;
}
  else {
    x=-17470;
    y=-2940;
}
  
  $(".floor").css("transform", "translate(" + x + "px," + 0 + "px)");
  $(".khy").css("transform", "translate(" + x + "px," + 0 + "px)");
  $(".midg").css("transform", "translate(" + (x * 1.25) + "px," + 0 + "px)");
  $("#end-stats").css("transform", "translate(" + x + "px," + y + "px)");
  $("#black").css("transform", "translate(" + x + "px," + y + "px)");
  $(".katpu").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl1").css("transform", "translate(" + (x - 24) + "px," + (y - 164) + "px) perspective(500px) rotateY(-25deg) rotateZ(-1deg) scale(1.1,1.5)");
  $("#cl2").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl3").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl3e").css("transform", "translate(" + x + "px," + y + "px)");
}

function noMove() {
  x += 0;
  y += 0;
  runningRight = 0;
	runningLeft = 0;
  gabru.classList.remove("runningLeft");
  gabru.classList.remove("runningRight");
  biker.classList.remove("runningLeft");
  biker.classList.remove("runningRight");  
}

$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

// how to call it (with a 1000ms timeout):
$(window).scrollEnd(function(){
    noMove();
}, 100);
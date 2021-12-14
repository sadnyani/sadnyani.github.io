var x = 0;
var y = 0;
var y1 = 0;
var x1 = 0;
var scrollPos=0;
var y2=0;
var y2t=false;
var y3t=false;
var gabru = document.getElementById("gabru");
var biker = document.getElementById("biker");
var pilot = document.getElementById("pilot");
var gabik = document.getElementById("gabik");
var blane = document.getElementById("blane");
var grain = document.getElementById("grain");
var gabra = document.getElementById("para");


$(document).keydown(function(e) {

  if (e.keyCode == "39") {
    rightt();
  }
  if (e.keyCode == "37") {
    leftt();
  }
});
$(document).keyup(function(){noMove();});

// window.setTimeout(function() {
  window.addEventListener('scroll', function(){

  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    leftt();
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
  
  if (x < -35) {
    x = x + 20;
  }

  if (x >= -17470 && y >= -2940) {
    // up the stairs
    if (x < -900 && x > -1740) {
      y1 = y1 - 9.5;
      // $("#gabru").css("transform", "translate(" + 0 + "px," + y1 + "px)");
      x = x + 20;
    }
    
    // walk
    else if (x <= -1740 && x >= -16200) {
      
        y1 = 380;
      
      // $("#gabru").css("transform", "translate(" + 0 + "px," + y1 + "px)");
      x = x + 20;
    }

    // down the stairs
    else if (x < -16220 && x > -17040) {
      y1 = y1 + 8;
      // $("#gabru").css("transform", "translate(" + 0 + "px," + y1 + "px)");
      x = x + 20;
    }

    // walk 2
    else if (x <= -17040) {
      x1 = x1 - 2;
      // $("#gabru").css("transform", "translate(" + x1 + "px," + y1 + "px)");
      x = x + 20;
      if(x>=-17450 && x<-17350){
        gabra.classList.add("hide");
        grain.classList.add("ExG");
        grain.classList.remove("hide");
      }
      else if(x>=-17350){
        grain.classList.add("hide");
        grain.classList.remove("EnP")
        grain.classList.add("EnG");
        gabru.classList.remove("hide");
      }
    }

    else {
      x = x + 20;
      y=0;
    }
  } 

  else if (y >= -2945 && y < 0){  
    // x = x + 20;
    y = y + 20;
  }
  else {
    x += 20;
  }
  $(".floor").css("transform", "translate(" + x + "px," + 0 + "px)");
  $(".midg").css("transform", "translate(" + (x * 1.25) + "px," + 0 + "px)");
  $("#end-stats").css("transform", "translate(" + x + "px," + y + "px)");
  $("#black").css("transform", "translate(" + x + "px," + y + "px)");
  $(".katpu").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl1").css("transform", "translate(" + (x - 24) + "px," + (y - 19) + "px) perspective(500px) rotateY(-25deg) rotateZ(-1deg) scale(1.1,1.5)");
  $("#cl2").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl3").css("transform", "translate(" + x + "px," + y + "px)");
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

    if (x < -920 && x > -1760) {
      y1 = y1 + 8;
      // $("#gabru").css("transform", "translate(" + 0 + "px," + y1 + "px)");
    }

    // walk
    else if (x <= -1760 && x >= -16200) {
      if (x < -4300 && x > -4700) {
      gabru.classList.add("hide");
        if (pilot.classList.contains("hide") && biker.classList.contains("hide"))
      gabik.classList.remove("hide");
      }
      else if (x <= -4700 && x > -13280) {
        gabik.classList.add("hide");
        if (pilot.classList.contains("hide"))
        biker.classList.remove("hide");
      }
      else if (x <= -13280 && x >-13480) {
        biker.classList.add("hide");
        if (pilot.classList.contains("hide"))
          blane.classList.remove("hide");
      }
      else if (x <= -13480 && x >-14500) {
        blane.classList.add("hide");
        if(pilot.classList.contains("hide") && !y2t)
        y2t=true;
        pilot.classList.remove("hide");
        if(y2t){
          y2-=8;
        $("#pilot").css("transform","translate(" + 0 + "px," + y2 + "px) scale(1,1)");
        }
      }
      else if (x <= -14500 && x >-16200) {
        y2=-416;
        $("#pilot").css("transform","translate(" + 0 + "px," + y2 + "px) scale(0.7,0.7)");
        y2t=false;
      }

      else {
        y1 = 380;
      }
      // $("#gabru").css("transform", "translate(" + 0 + "px," + y1 + "px)");
    }

    // up the stairs
    else if (x < -16220 && x > -17040) {
      y1 = y1 - 8;
    }

    // walk 2
    else if (x <= -17040) {
      x1 = x1 + 2;
      // $("#gabru").css("transform", "translate(" + x1 + "px,0)");
      if(x<=17350 && x>-17400) {
          pilot.classList.add("hide");
          y2t=true;
          grain.classList.remove("hide");
    }
      else if(x <= -17400){
          grain.classList.add("hide");
          gabra.classList.remove("hide");
        }
    x = x - 20;
    }
  }
  else if ( y > -2940){
    x = x + 20;
    y = y - 20;
  }
  else {
    x = -17470;
    y = -2940;
  }
  
  $(".floor").css("transform", "translate(" + x + "px," + 0 + "px)");
  $(".midg").css("transform", "translate(" + (x * 1.25) + "px," + 0 + "px)");
  $("#end-stats").css("transform", "translate(" + x + "px," + y + "px)");
  $("#black").css("transform", "translate(" + x + "px," + y + "px)");
  $(".katpu").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl1").css("transform", "translate(" + (x - 24) + "px," + (y - 19) + "px) perspective(500px) rotateY(-25deg) rotateZ(-1deg) scale(1.1,1.5)");
  $("#cl2").css("transform", "translate(" + x + "px," + y + "px)");
  $("#cl3").css("transform", "translate(" + x + "px," + y + "px)");
}

function noMove() {
  x+=0;
  y+=0;
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
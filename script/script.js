window.onload=function(){
      document.getElementById("my_audio").play();
    }

function changecolor(){
  var clr = document.getElementById("button");
  clr.style.fontWeight = 'bold';
  var audio = new Audio('sons/son4.mp3');
  audio.play();
  if (clr.innerHTML === "1 LIGNE COMPLETE") {
      clr.className = 'button3';
      clr.innerHTML = "2 LIGNES COMPLETES";
  } else if (clr.innerHTML === "2 LIGNES COMPLETES") {
      clr.className = 'button4';
      clr.innerHTML = "GRILLE COMPLETE";
  } else {
        clr.className = 'button2';
        clr.innerHTML = "1 LIGNE COMPLETE";
  }
}

var elems = document.getElementsByClassName("grid-item");
var clr = document.getElementById("button");
for (var i = 0; i < elems.length; i++) {
  elems[i].onclick = function() {
if (this.className === clr.className) {
    this.className = 'grid-item';
    document.getElementById("centered").innerHTML = " ";
} else if (clr.className !== 'button') {
    this.className = clr.className;
    document.getElementById("centered").innerHTML = this.innerHTML;
    var audio = new Audio('sons/son3.mp3');
    audio.play();
  } 
  };
};

const d = new Date().toLocaleDateString();
document.getElementById("ddate").innerHTML = document.title + " - " + d;


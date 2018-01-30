/* Confetti for Thank You Pages
	Modified from https://codepen.io/anon/pen/JMOQzE
	January 7, 2018
	*/


for (var i = 0; i < 200; i++) {
  create(i);
}

function create(i) {
  var width = Math.random() * 15;
  var height = width * 0.6;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  jQuery('<div class="confetti-'+i+' '+colour+'"></div>').css({
    "width" : width+"px",
    "height" : height+"px",
    "top" : -Math.random()*50+"%",
    "left" : Math.random()*100+"%",
    "opacity" : Math.random()+0.5,
    "transform" : "rotate("+Math.random()*360+"deg)"
  }).appendTo('body');
  drop(i);
}

function drop(x) {
  jQuery('.confetti-'+x).animate({
    top: "200%",
    left: "+="+Math.random()*8+"%"
  }, Math.random()*3500 + 3500, function() {
	 // Uncomment to make continuous
   //reset(x);
	 remove(x);
  });
}

// Uncomment to make continuous
/*function reset(x) {
  jQuery('.confetti-'+x).animate({
    "top" : -Math.random()*20+"%",
    "left" : "-="+Math.random()*15+"%"
  }, 0, function() {
    drop(x);
  });
}*/

function remove(x) {
	jQuery('.confetti-'+x).remove();
}

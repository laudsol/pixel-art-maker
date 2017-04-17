var body = document.getElementsByTagName('body')[0];
var base = document.createElement('section');
base.className = 'base';
body.appendChild(base);

var whichColor = '';

/*Pixel Grid ==================================*/

for (i = 1; i <= 625; i++) {
  var tile = document.createElement('div');
    tile.addEventListener('mouseenter', paint);
    tile.addEventListener('click', function() {
      event.target.style.backgroundColor=whichColor;
    });

  tile.className='tile';
  base.appendChild(tile);
}

/*Drag mouse listener ==================================*/

function paint () {
  base.addEventListener('mousedown',function() {
    mouseState = true;
  });
  base.addEventListener('mouseup',function() {
    mouseState = false;
  });
  if (mouseState === true) {
    event.target.style.backgroundColor=whichColor;
  }
}

/*Color Palette ==================================*/

var palette = document.createElement('div');
palette.className = 'palette';

body.appendChild(palette);

var colorBlue = document.createElement('div');
colorBlue.className = 'color';
var blue = colorBlue.setAttribute('id','blue');
palette.appendChild(colorBlue);

var colorRed = document.createElement('div');
colorRed.className = 'color';
var red = colorRed.setAttribute('id','red');
palette.appendChild(colorRed);

var colorYellow = document.createElement('div');
colorYellow.className = 'color';
var yellow = colorYellow.setAttribute('id','yellow');
palette.appendChild(colorYellow);

var colorGreen = document.createElement('div');
colorGreen.className = 'color';
var green = colorGreen.setAttribute('id','green');
palette.appendChild(colorGreen);

var colorOrange = document.createElement('div');
colorOrange.className = 'color';
var yellow = colorOrange.setAttribute('id','orange');
palette.appendChild(colorOrange);

/*Reset button ==================================*/
var reset = document.createElement('button');
reset.className='reset';
reset.innerHTML="RESET";

reset.addEventListener('click', function () {
  window.location.reload(false);
});

body.appendChild(reset);

/* Current color display panel ==================================*/

var colorDisplayPanel = document.createElement('div');
colorDisplayPanel.className='colorDisplayPanel';
colorDisplayPanel.innerHTML="Current color";

body.appendChild(colorDisplayPanel);

/*Color seclector events ==================================*/

// colorBlue.addEventListener('click',function(event){
//   whichColor = #3498DB;
// });

colorRed.addEventListener('click',function(event){
  whichColor = '#E74C3C';
  colorDisplayPanel.style.backgroundColor= '#E74C3C';
});

colorBlue.addEventListener('click',function(event){
  whichColor = '#3498DB';
  colorDisplayPanel.style.backgroundColor='#3498DB'
});

colorYellow.addEventListener('click',function(event){
  whichColor = '#F1C40F';
  colorDisplayPanel.style.backgroundColor='#F1C40F'
});

colorGreen.addEventListener('click',function(event){
  whichColor = '#1ECD97';
  colorDisplayPanel.style.backgroundColor='#1ECD97'
});

colorOrange.addEventListener('click',function(event){
  whichColor = '#F39C12';
  colorDisplayPanel.style.backgroundColor='#F39C12'
});




//if can't get synax - set whichColor to array, and run loop saying if click on whichColor[i] then set global variable to color.

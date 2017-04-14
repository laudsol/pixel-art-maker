var body = document.getElementsByTagName('body')[0];
var base = document.createElement('section');
base.className = 'base';
body.appendChild(base);

var whichColor = '';

/*Pixel Grid ==================================*/

for (i = 1; i <= 625; i++) {
  var tile = document.createElement('div');

  tile.addEventListener('click',function(event){
    event.target.style.backgroundColor=whichColor;
  });
  tile.className='tile';
  base.appendChild(tile);
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

/*Color seclector events ==================================*/

colorBlue.addEventListener('click',function(event){
  whichColor = 'blue';
});

colorRed.addEventListener('click',function(event){
  whichColor = 'red';
});

colorYellow.addEventListener('click',function(event){
  whichColor = 'yellow';
});

colorGreen.addEventListener('click',function(event){
  whichColor = 'green';
});

colorOrange.addEventListener('click',function(event){
  whichColor = 'orange';
});

//if can't get synax - set whichColor to array, and run loop saying if click on whichColor[i] then set global variable to color.

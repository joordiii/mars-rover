
var Rover = {
  position: [0,0],
  direction: 'N'
};
var taula = [];

function putRoverNewPosition(taula,x,y){
  var divABorrar = taula[Rover.position[0]][Rover.position[1]];
  divABorrar.innerHTML = '';

  var divAPosar = taula[x][y];
  var divRover = document.createElement('div');
  divRover.id = 'rover';
  divAPosar.appendChild(divRover);
  Rover.position[0] = x;
  Rover.position[1] = y;
}


function initialize() {
  for (var a=0; a<10; a=a+1) {
    var fila = [];
    for (var b=0; b<10; b=b+1) {
      var iDiv = document.createElement('div');
      fila.push(iDiv);
      iDiv.id = 'c' + a + b;
      iDiv.className = 'rectangle';
      var grid = document.getElementById("grid");
      grid.appendChild(iDiv);

      if (a === 0 && b===0){
        var divRover = document.createElement('div');
        divRover.id = 'rover';
        iDiv.appendChild(divRover);
      }
    }
    taula.push(fila);
  }
}
function setPosition() {
  /*document.getElementById("rover").style.marginTop = myRover.iniTopPosition+'px';
  document.getElementById("rover").style.marginLeft = myRover.iniLeftPosition+'px';*/
  document.getElementById("rover").style.marginTop = 415+'px';
  document.getElementById("rover").style.marginLeft = 24+'px';
}

//gets the position and displays the pixels in X: Y: screen


//function forward
function goForward(myRover,pixLeftPf,pixTopPf) {
  switch(myRover.direction) {
    case 'N':
      /*myRover.position=gridPix[pixLeftPf, pixTopPf-50];*/
    //  myRover.position=gridPix[20, 50];
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRoverr.position[0]--;
      break;
    case 'W':
      myRover.position[1]--;
      break;
  }
}
/*goForward(myRover);*/

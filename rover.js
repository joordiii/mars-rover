var Rover = {
  position: [0,0],
  direction: 'N'
};

var Rover2 = {
  position: [9,9],
  direction: 'N'
};

var taula = [];
for (var a=0; a<10; a++) {
  var fila = [];
  for (var d=0; d<10; d++) {
    var iDiv = document.createElement('div');
    iDiv.className='rec';
    iDiv.id='c'+a+d;
    var grid = document.getElementById('grid');
    grid.appendChild(iDiv);
    fila.push(iDiv);
  }
  taula.push(fila);
}

//Creo el div del rover (div doble fletxa)
var myRover = document.createElement('div');
myRover.id='rover';
var posIni =taula[0][0];
posIni.appendChild(myRover);

//Creo el div del rover2 (div doble fletxa amb fons blau)
var myRover2 = document.createElement('div');
myRover2.id='rover2';
var posIni2 =taula[9][9];
posIni2.appendChild(myRover2);


/*setTimeout(function(){
      ff(taula);
}, 3000);*/

//funció per crear obstacles per teclat, OBSTACLE1
var rock1 = document.createElement('div');
var scanDiv1 ='';
var posRock1 ='';
function createObstacle1(){
  var xPos1 = document.getElementById('obsXPos1').value;
  var yPos1 = document.getElementById('obsYPos1').value;
  /*rock1.className='rock';*/
  posRock1 = taula[yPos1][xPos1];
  posRock1.className='rock';
  /*posRock1.appendChild(rock1);*/
  /*scanDiv1 = document.getElementByClassname('rock');*/
}

//funció per crear obstacles per teclat, OBSTACLE2
var rock2 = document.createElement('div');
var scanDiv2 ='';
var posRock2 ='';
function createObstacle2(){
  var xPos2 = document.getElementById('obsXPos2').value;
  var yPos2 = document.getElementById('obsYPos2').value;
  rock2.id='rock';
  posRock2 = taula[yPos2][xPos2];
  posRock2.className='rock';
  posRock2.appendChild(rock2);
  /*scanDiv2 = document.getElementById('rock');*/
}
//funció per crear obstacles per teclat, OBSTACLE3
var rock3 = document.createElement('div');
var scanDiv3 ='';
var posRock3 ='';
function createObstacle3(){
  var xPos3 = document.getElementById('obsXPos3').value;
  var yPos3 = document.getElementById('obsYPos3').value;
  rock3.id='rock';
  posRock3 = taula[yPos3][xPos3];
  posRock3.className='rock';
  posRock3.appendChild(rock3);
/*  scanDiv3 = document.getElementById('rock');*/
}
//funció per crear obstacles per teclat, OBSTACLE2
var rock4 = document.createElement('div');
var scanDiv4 ='';
var posRock4 = '';
function createObstacle4(){
  var xPos4 = document.getElementById('obsXPos4').value;
  var yPos4 = document.getElementById('obsYPos4').value;
  rock4.id='rock';
  posRock4 = taula[yPos4][xPos4];
  posRock4.className='rock';
  posRock4.appendChild(rock4);
  /*scanDiv4 = document.getElementById('rock');*/
}


//forward function
function f(){
    var pos2='';
    var pos3='';

    switch (Rover.direction){
      case 'N':
        if (Rover.position[0]===0) {
          //Amb aquest if miro si el rover2 està en posició de xoc o no
          if (Rover2.position[0]===Rover.position[0]+9 && Rover2.position[1]===Rover.position[1]){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsA=taula[Rover.position[0]+9] [Rover.position[1]];
          if (posObsA.className!=='rock'){
            var divABorrar2=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar2.innerHTML='';
            var divAPosar2=document.createElement('div');
            divAPosar2.id='rover';
            divAPosar2.style.backgroundImage = "url('images/doble_fletxa_N.png')";
            pos2=taula[Rover.position[0]+9] [Rover.position[1]];
            pos2.appendChild(divAPosar2);
            Rover.position[0]=Rover.position[0]+9;
            Rover.position[1]=Rover.position[1];
          }
          else {
            window.alert('STOP -- Collission Alert');
          }
          break;
      }

      if (Rover.position[0]!==0) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0]-1 && Rover2.position[1]===Rover.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsB=taula[Rover.position[0]-1] [Rover.position[1]];
        if (posObsB.className!=='rock'){
          var divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
          divABorrar3.innerHTML='';
          var divAPosar3=document.createElement('div');
          divAPosar3.id='rover';
          divAPosar3.style.backgroundImage = "url('images/doble_fletxa_N.png')";
          pos3=taula[Rover.position[0]-1] [Rover.position[1]];
          pos3.appendChild(divAPosar3);
          Rover.position[0]=Rover.position[0]-1;
          Rover.position[1]=Rover.position[1];
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
    }
    break;
      case 'S':
      if (Rover.position[0]===9) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0]-9 && Rover2.position[1]===Rover.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsC=taula[Rover.position[0]-9] [Rover.position[1]];
        if (posObsC.className!=='rock'){
          var divABorrar4=taula[Rover.position[0]] [Rover.position[1]];
          divABorrar4.innerHTML='';
          var divAPosar4=document.createElement('div');
          divAPosar4.id='rover';
          divAPosar4.style.backgroundImage = "url('images/doble_fletxa_S.png')";
          pos2=taula[Rover.position[0]-9] [Rover.position[1]];
          pos2.appendChild(divAPosar4);
          Rover.position[0]=Rover.position[0]-9;
          Rover.position[1]=Rover.position[1];
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
      if (Rover.position[0]!==9) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0]+1 && Rover2.position[1]===Rover.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsD=taula[Rover.position[0]+1] [Rover.position[1]];
        if (posObsD.className!=='rock'){
          var divABorrar5=taula[Rover.position[0]] [Rover.position[1]];
          divABorrar5.innerHTML='';
          var divAPosar5=document.createElement('div');
          divAPosar5.id='rover';
          divAPosar5.style.backgroundImage = "url('images/doble_fletxa_S.png')";
          pos3=taula[Rover.position[0]+1] [Rover.position[1]];
          pos3.appendChild(divAPosar5);
          Rover.position[0]=Rover.position[0]+1;
          Rover.position[1]=Rover.position[1];
        }
          else {
            window.alert('STOP -- Collission Alert');
          }
          break;
      }
      break;
      case 'E':
      if (Rover.position[1]===9) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]-9){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsE=taula[Rover.position[0]] [Rover.position[1]-9];
        if (posObsE.className!=='rock'){
          var divABorrar6=taula[Rover.position[0]] [Rover.position[1]];
          divABorrar6.innerHTML='';
          var divAPosar6=document.createElement('div');
          divAPosar6.id='rover';
          divAPosar6.style.backgroundImage = "url('images/doble_fletxa_E.png')";
          pos2=taula[Rover.position[0]] [Rover.position[1]-9];
          pos2.appendChild(divAPosar6);
          Rover.position[0]=Rover.position[0];
          Rover.position[1]=Rover.position[1]-9;
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
      if (Rover.position[1]!==9) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]+1){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsF=taula[Rover.position[0]] [Rover.position[1]+1];
        if (posObsF.className!=='rock'){
          var divABorrar7=taula[Rover.position[0]] [Rover.position[1]];
          divABorrar7.innerHTML='';
          var divAPosar7=document.createElement('div');
          divAPosar7.id='rover';
          divAPosar7.style.backgroundImage = "url('images/doble_fletxa_E.png')";
          pos3=taula[Rover.position[0]] [Rover.position[1]+1];
          pos3.appendChild(divAPosar7);
          Rover.position[0]=Rover.position[0];
          Rover.position[1]=Rover.position[1]+1;
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
break;
      case 'W':
      if (Rover.position[1]===0) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]+9){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsG=taula[Rover.position[0]] [Rover.position[1]+9];
        if (posObsG.className!=='rock'){
          var divABorrar8=taula[Rover.position[0]] [Rover.position[1]];
          divABorrar8.innerHTML='';
          var divAPosar8=document.createElement('div');
          divAPosar8.id='rover';
          divAPosar8.style.backgroundImage = "url('images/doble_fletxa_W.png')";
          pos2=taula[Rover.position[0]] [Rover.position[1]+9];
          pos2.appendChild(divAPosar8);
          Rover.position[0]=Rover.position[0];
          Rover.position[1]=Rover.position[1]+9;
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
      if (Rover.position[1]!==0) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]-1){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsH=taula[Rover.position[0]] [Rover.position[1]-1];
        if (posObsH.className!=='rock'){
        var divABorrar9=taula[Rover.position[0]] [Rover.position[1]];
        divABorrar9.innerHTML='';
        var divAPosar9=document.createElement('div');
        divAPosar9.id='rover';
        divAPosar9.style.backgroundImage = "url('images/doble_fletxa_W.png')";
        pos3=taula[Rover.position[0]] [Rover.position[1]-1];
        pos3.appendChild(divAPosar9);
        Rover.position[0]=Rover.position[0];
        Rover.position[1]=Rover.position[1]-1;
      }
      else {
        window.alert('STOP -- Collission Alert');
      }
      break;
    }
break;
  }
  coordVisor();
}

//backward function
  function b(){
      var pos2='';
      var pos3='';
      switch (Rover.direction){
        case 'N':
          if (Rover.position[0]===9) {
            //Amb aquest if miro si el rover2 està en posició de xoc o no
            if (Rover2.position[0]===Rover.position[0]-9 && Rover2.position[1]===Rover.position[1]){
              window.alert('STOP -- Collission Alert');
              break;
            }
            var posObsA=taula[Rover.position[0]-9][Rover.position[1]];
            if (posObsA.className!=='rock'){
              var divABorrar2=taula[Rover.position[0]] [Rover.position[1]];
              divABorrar2.innerHTML='';
              var divAPosar2=document.createElement('div');
              divAPosar2.id='rover';
              divAPosar2.style.backgroundImage = "url('images/gris_doble_fletxa_N.png')";
              pos2=taula[Rover.position[0]-9] [Rover.position[1]];
              pos2.appendChild(divAPosar2);
              Rover.position[0]=Rover.position[0]-9;
              Rover.position[1]=Rover.position[1];
            }
            else {
              window.alert('STOP -- Collission Alert');
            }
          break;
          }
          if (Rover.position[0]!==9) {
            //Amb aquest if miro si el rover2 està en posició de xoc o no
            if (Rover2.position[0]===Rover.position[0]+1 && Rover2.position[1]===Rover.position[1]){
              window.alert('STOP -- Collission Alert');
              break;
            }
            var posObsB=taula[Rover.position[0]+1][Rover.position[1]];
            if (posObsB.className!=='rock'){
              var divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
              divABorrar3.innerHTML='';
              var divAPosar3=document.createElement('div');
              divAPosar3.id='rover';
              divAPosar3.style.backgroundImage = "url('images/gris_doble_fletxa_N.png')";
              pos3=taula[Rover.position[0]+1] [Rover.position[1]];
              pos3.appendChild(divAPosar3);
              Rover.position[0]=Rover.position[0]+1;
              Rover.position[1]=Rover.position[1];
            }
            else {
              window.alert('STOP -- Collission Alert');
            }
            break;
          }
    break;
        case 'S':
        if (Rover.position[0]===0) {
          //Amb aquest if miro si el rover2 està en posició de xoc o no
          if (Rover2.position[0]===Rover.position[0]+9 && Rover2.position[1]===Rover.position[1]){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsC=taula[Rover.position[0]+9][Rover.position[1]];
          if (posObsC.className!=='rock'){
            var divABorrar4=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar4.innerHTML='';
            var divAPosar4=document.createElement('div');
            divAPosar4.id='rover';
            divAPosar4.style.backgroundImage = "url('images/gris_doble_fletxa_S.png')";
            pos2=taula[Rover.position[0]+9] [Rover.position[1]];
            pos2.appendChild(divAPosar4);
            Rover.position[0]=Rover.position[0]+9;
            Rover.position[1]=Rover.position[1];
          }
          else {
          window.alert('STOP -- Collission Alert');
          }
        break;
      }
      if (Rover.position[0]!==0) {
        //Amb aquest if miro si el rover2 està en posició de xoc o no
        if (Rover2.position[0]===Rover.position[0]-1 && Rover2.position[1]===Rover.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsD=taula[Rover.position[0]-1][Rover.position[1]];
        if (posObsD.className!=='rock'){
            var divABorrar5=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar5.innerHTML='';
            var divAPosar5=document.createElement('div');
            divAPosar5.id='rover';
            divAPosar5.style.backgroundImage = "url('images/gris_doble_fletxa_S.png')";
            pos3=taula[Rover.position[0]-1] [Rover.position[1]];
            pos3.appendChild(divAPosar5);
            Rover.position[0]=Rover.position[0]-1;
            Rover.position[1]=Rover.position[1];
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
            break;
          }
    break;
        case 'E':
        if (Rover.position[1]===0) {
          //Amb aquest if miro si el rover2 està en posició de xoc o no
          if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]+9){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsE=taula[Rover.position[0]][Rover.position[1]+9];
          if (posObsE.className!=='rock'){
            var divABorrar6=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar6.innerHTML='';
            var divAPosar6=document.createElement('div');
            divAPosar6.id='rover';
            divAPosar6.style.backgroundImage = "url('images/gris_doble_fletxa_E.png')";
            pos2=taula[Rover.position[0]] [Rover.position[1]+9];
            pos2.appendChild(divAPosar6);
            Rover.position[0]=Rover.position[0];
            Rover.position[1]=Rover.position[1]+9;
          }
          else {
          window.alert('STOP -- Collission Alert');
          }
        break;
        }
        if (Rover.position[1]!==0) {
          //Amb aquest if miro si el rover2 està en posició de xoc o no
          if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]-1){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsF=taula[Rover.position[0]][Rover.position[1]-1];
          if (posObsF.className!=='rock'){
            var divABorrar7=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar7.innerHTML='';
            var divAPosar7=document.createElement('div');
            divAPosar7.id='rover';
            divAPosar7.style.backgroundImage = "url('images/gris_doble_fletxa_E.png')";
            pos3=taula[Rover.position[0]] [Rover.position[1]-1];
            pos3.appendChild(divAPosar7);
            Rover.position[0]=Rover.position[0];
            Rover.position[1]=Rover.position[1]-1;
          }
          else {
            window.alert('STOP -- Collission Alert');
          }
              break;
            }
      break;
        case 'W':
        if (Rover.position[1]===9) {
          //Amb aquest if miro si el rover2 està en posició de xoc o no
          if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]-9){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsG=taula[Rover.position[0]][Rover.position[1]-9];
          if (posObsG.className!=='rock'){
            var divABorrar8=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar8.innerHTML='';
            var divAPosar8=document.createElement('div');
            divAPosar8.id='rover';
            divAPosar8.style.backgroundImage = "url('images/gris_doble_fletxa_W.png')";
            pos2=taula[Rover.position[0]] [Rover.position[1]-9];
            pos2.appendChild(divAPosar8);
            Rover.position[0]=Rover.position[0];
            Rover.position[1]=Rover.position[1]-9;
          }
          else {
          window.alert('STOP -- Collission Alert');
          }
        break;
        }
        if (Rover.position[1]!==9) {
          //Amb aquest if miro si el rover2 està en posició de xoc o no
          if (Rover2.position[0]===Rover.position[0] && Rover2.position[1]===Rover.position[1]+1){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsH=taula[Rover.position[0]][Rover.position[1]+1];
          if (posObsH.className!=='rock'){
            var divABorrar9=taula[Rover.position[0]] [Rover.position[1]];
            divABorrar9.innerHTML='';
            var divAPosar9=document.createElement('div');
            divAPosar9.id='rover';
            divAPosar9.style.backgroundImage = "url('images/gris_doble_fletxa_W.png')";
            pos3=taula[Rover.position[0]] [Rover.position[1]+1];
            pos3.appendChild(divAPosar9);
            Rover.position[0]=Rover.position[0];
            Rover.position[1]=Rover.position[1]+1;
        }
        else {
        window.alert('STOP -- Collission Alert');
        }
      break;
      }
  }
  coordVisor();
}

function turnRight(){
  var divABorrar3='';
  var divAPosar3='';
  var pos3='';
  switch (Rover.direction){
    case 'N':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='roverE';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='E';
      break;
    case 'S':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='roverW';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='W';
      break;
    case 'E':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='roverS';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='S';
      break;
    case 'W':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='N';
      break;
  }
}

function turnLeft(){
  var divABorrar3='';
  var divAPosar3='';
  var pos3='';
  switch (Rover.direction){
    case 'N':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='roverW';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='W';
      break;
    case 'S':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='roverE';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='E';
      break;
    case 'E':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='N';
      break;
    case 'W':
      divABorrar3=taula[Rover.position[0]] [Rover.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='roverS';
      pos3=taula[Rover.position[0]] [Rover.position[1]];
      pos3.appendChild(divAPosar3);
      Rover.direction='S';
      break;
  }
}


//Funcions forward backward dreta i esquerra pel rover2
//forward function
function f2(){
    var pos2='';
    var pos3='';
    var divAPosar2='';
    switch (Rover2.direction){
      case 'N':
        if (Rover2.position[0]===0) {
          //Amb aquest if miro si el rover1 està en posició de xoc o no
          if (Rover.position[0]===Rover2.position[0]+9 && Rover.position[1]===Rover2.position[1]){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsA=taula[Rover2.position[0]+9] [Rover2.position[1]];
          if (posObsA.className!=='rock'){
            var divABorrar2=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar2.innerHTML='';
            divAPosar2=document.createElement('div');
            divAPosar2.id='rover2';
            divAPosar2.style.backgroundImage = "url('images/doble_fletxa_N.png')";
            pos2=taula[Rover2.position[0]+9] [Rover2.position[1]];
            pos2.appendChild(divAPosar2);
            Rover2.position[0]=Rover2.position[0]+9;
            Rover2.position[1]=Rover2.position[1];
          }
          else {
            window.alert('STOP -- Collission Alert');
          }
          break;
      }

      if (Rover2.position[0]!==0) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0]-1 && Rover.position[1]===Rover2.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsB=taula[Rover2.position[0]-1] [Rover2.position[1]];
        if (posObsB.className!=='rock'){
          var divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
          divABorrar3.innerHTML='';
          var divAPosar3=document.createElement('div');
          divAPosar3.id='rover2';
          divAPosar3.style.backgroundImage = "url('images/doble_fletxa_N.png')";
          pos3=taula[Rover2.position[0]-1] [Rover2.position[1]];
          pos3.appendChild(divAPosar3);
          Rover2.position[0]=Rover2.position[0]-1;
          Rover2.position[1]=Rover2.position[1];
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
    }
    break;
      case 'S':
      if (Rover2.position[0]===9) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0]-9 && Rover.position[1]===Rover2.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsC=taula[Rover2.position[0]-9] [Rover2.position[1]];
        if (posObsC.className!=='rock'){
          var divABorrar4=taula[Rover2.position[0]] [Rover2.position[1]];
          divABorrar4.innerHTML='';
          var divAPosar4=document.createElement('div');
          divAPosar4.id='rover2';
          divAPosar4.style.backgroundImage = "url('images/doble_fletxa_S.png')";
          pos2=taula[Rover2.position[0]-9] [Rover2.position[1]];
          pos2.appendChild(divAPosar4);
          Rover2.position[0]=Rover2.position[0]-9;
          Rover2.position[1]=Rover2.position[1];
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
      if (Rover2.position[0]!==9) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0]+1 && Rover.position[1]===Rover2.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsD=taula[Rover2.position[0]+1] [Rover2.position[1]];
        if (posObsD.className!=='rock'){
          var divABorrar5=taula[Rover2.position[0]] [Rover2.position[1]];
          divABorrar5.innerHTML='';
          var divAPosar5=document.createElement('div');
          divAPosar5.id='rover2';
          divAPosar5.style.backgroundImage = "url('images/doble_fletxa_S.png')";
          pos3=taula[Rover2.position[0]+1] [Rover2.position[1]];
          pos3.appendChild(divAPosar5);
          Rover2.position[0]=Rover2.position[0]+1;
          Rover2.position[1]=Rover2.position[1];
        }
          else {
            window.alert('STOP -- Collission Alert');
          }
          break;
      }
      break;
      case 'E':
      if (Rover2.position[1]===9) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]-9){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsE=taula[Rover2.position[0]] [Rover2.position[1]-9];
        if (posObsE.className!=='rock'){
          var divABorrar6=taula[Rover2.position[0]] [Rover2.position[1]];
          divABorrar6.innerHTML='';
          var divAPosar6=document.createElement('div');
          divAPosar6.id='rover2';
          divAPosar6.style.backgroundImage = "url('images/doble_fletxa_E.png')";
          pos2=taula[Rover2.position[0]] [Rover2.position[1]-9];
          pos2.appendChild(divAPosar6);
          Rover2.position[0]=Rover2.position[0];
          Rover2.position[1]=Rover2.position[1]-9;
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
      if (Rover2.position[1]!==9) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]+1){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsF=taula[Rover2.position[0]] [Rover2.position[1]+1];
        if (posObsF.className!=='rock'){
          var divABorrar7=taula[Rover2.position[0]] [Rover2.position[1]];
          divABorrar7.innerHTML='';
          var divAPosar7=document.createElement('div');
          divAPosar7.id='rover2';
          divAPosar7.style.backgroundImage = "url('images/doble_fletxa_E.png')";
          pos3=taula[Rover2.position[0]] [Rover2.position[1]+1];
          pos3.appendChild(divAPosar7);
          Rover2.position[0]=Rover2.position[0];
          Rover2.position[1]=Rover2.position[1]+1;
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
break;
      case 'W':
      if (Rover2.position[1]===0) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]+9){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsG=taula[Rover2.position[0]] [Rover2.position[1]+9];
        if (posObsG.className!=='rock'){
          var divABorrar8=taula[Rover2.position[0]] [Rover2.position[1]];
          divABorrar8.innerHTML='';
          var divAPosar8=document.createElement('div');
          divAPosar8.id='rover2';
          divAPosar8.style.backgroundImage = "url('images/doble_fletxa_W.png')";
          pos2=taula[Rover2.position[0]] [Rover2.position[1]+9];
          pos2.appendChild(divAPosar8);
          Rover2.position[0]=Rover2.position[0];
          Rover2.position[1]=Rover2.position[1]+9;
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
        break;
      }
      if (Rover2.position[1]!==0) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]-1){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsH=taula[Rover2.position[0]] [Rover2.position[1]-1];
        if (posObsH.className!=='rock'){
        var divABorrar9=taula[Rover2.position[0]] [Rover2.position[1]];
        divABorrar9.innerHTML='';
        var divAPosar9=document.createElement('div');
        divAPosar9.id='rover2';
        divAPosar9.style.backgroundImage = "url('images/doble_fletxa_W.png')";
        pos3=taula[Rover2.position[0]] [Rover2.position[1]-1];
        pos3.appendChild(divAPosar9);
        Rover2.position[0]=Rover2.position[0];
        Rover2.position[1]=Rover2.position[1]-1;
      }
      else {
        window.alert('STOP -- Collission Alert');
      }
      break;
    }
break;
  }
  coordVisor2();
}

//backward function
  function b2(){
      var pos2='';
      var pos3='';
      switch (Rover2.direction){
        case 'N':
          if (Rover2.position[0]===9) {
            //Amb aquest if miro si el rover1 està en posició de xoc o no
            if (Rover.position[0]===Rover2.position[0]-9 && Rover.position[1]===Rover2.position[1]){
              window.alert('STOP -- Collission Alert');
              break;
            }
            var posObsA=taula[Rover2.position[0]-9][Rover2.position[1]];
            if (posObsA.className!=='rock'){
              var divABorrar2=taula[Rover2.position[0]] [Rover2.position[1]];
              divABorrar2.innerHTML='';
              var divAPosar2=document.createElement('div');
              divAPosar2.id='rover2';
              divAPosar2.style.backgroundImage = "url('images/gris_doble_fletxa_N.png')";
              pos2=taula[Rover2.position[0]-9] [Rover2.position[1]];
              pos2.appendChild(divAPosar2);
              Rover2.position[0]=Rover2.position[0]-9;
              Rover2.position[1]=Rover2.position[1];
            }
            else {
              window.alert('STOP -- Collission Alert');
            }
          break;
          }
          if (Rover2.position[0]!==9) {
            //Amb aquest if miro si el rover1 està en posició de xoc o no
            if (Rover.position[0]===Rover2.position[0]+1 && Rover.position[1]===Rover2.position[1]){
              window.alert('STOP -- Collission Alert');
              break;
            }
            var posObsB=taula[Rover2.position[0]+1][Rover2.position[1]];
            if (posObsB.className!=='rock'){
              var divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
              divABorrar3.innerHTML='';
              var divAPosar3=document.createElement('div');
              divAPosar3.id='rover2';
              divAPosar3.style.backgroundImage = "url('images/gris_doble_fletxa_N.png')";
              pos3=taula[Rover2.position[0]+1] [Rover2.position[1]];
              pos3.appendChild(divAPosar3);
              Rover2.position[0]=Rover2.position[0]+1;
              Rover2.position[1]=Rover2.position[1];
            }
            else {
              window.alert('STOP -- Collission Alert');
            }
            break;
          }
    break;
        case 'S':
        if (Rover2.position[0]===0) {
          //Amb aquest if miro si el rover1 està en posició de xoc o no
          if (Rover.position[0]===Rover2.position[0]+9 && Rover.position[1]===Rover2.position[1]){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsC=taula[Rover2.position[0]+9][Rover2.position[1]];
          if (posObsC.className!=='rock'){
            var divABorrar4=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar4.innerHTML='';
            var divAPosar4=document.createElement('div');
            divAPosar4.id='rover2';
            divAPosar4.style.backgroundImage = "url('images/gris_doble_fletxa_S.png')";
            pos2=taula[Rover2.position[0]+9] [Rover2.position[1]];
            pos2.appendChild(divAPosar4);
            Rover2.position[0]=Rover2.position[0]+9;
            Rover2.position[1]=Rover2.position[1];
          }
          else {
          window.alert('STOP -- Collission Alert');
          }
        break;
      }
      if (Rover2.position[0]!==0) {
        //Amb aquest if miro si el rover1 està en posició de xoc o no
        if (Rover.position[0]===Rover2.position[0]-1 && Rover.position[1]===Rover2.position[1]){
          window.alert('STOP -- Collission Alert');
          break;
        }
        var posObsD=taula[Rover2.position[0]-1][Rover2.position[1]];
        if (posObsD.className!=='rock'){
            var divABorrar5=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar5.innerHTML='';
            var divAPosar5=document.createElement('div');
            divAPosar5.id='rover2';
            divAPosar5.style.backgroundImage = "url('images/gris_doble_fletxa_S.png')";
            pos3=taula[Rover2.position[0]-1] [Rover2.position[1]];
            pos3.appendChild(divAPosar5);
            Rover2.position[0]=Rover2.position[0]-1;
            Rover2.position[1]=Rover2.position[1];
        }
        else {
          window.alert('STOP -- Collission Alert');
        }
            break;
          }
    break;
        case 'E':
        if (Rover2.position[1]===0) {
          //Amb aquest if miro si el rover1 està en posició de xoc o no
          if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]+9){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsE=taula[Rover2.position[0]][Rover2.position[1]+9];
          if (posObsE.className!=='rock'){
            var divABorrar6=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar6.innerHTML='';
            var divAPosar6=document.createElement('div');
            divAPosar6.id='rover2';
            divAPosar6.style.backgroundImage = "url('images/gris_doble_fletxa_E.png')";
            pos2=taula[Rover2.position[0]] [Rover2.position[1]+9];
            pos2.appendChild(divAPosar6);
            Rover2.position[0]=Rover2.position[0];
            Rover2.position[1]=Rover2.position[1]+9;
          }
          else {
          window.alert('STOP -- Collission Alert');
          }
        break;
        }
        if (Rover2.position[1]!==0) {
          //Amb aquest if miro si el rover1 està en posició de xoc o no
          if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]-1){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsF=taula[Rover2.position[0]][Rover2.position[1]-1];
          if (posObsF.className!=='rock'){
            var divABorrar7=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar7.innerHTML='';
            var divAPosar7=document.createElement('div');
            divAPosar7.id='rover2';
            divAPosar7.style.backgroundImage = "url('images/gris_doble_fletxa_E.png')";
            pos3=taula[Rover2.position[0]] [Rover2.position[1]-1];
            pos3.appendChild(divAPosar7);
            Rover2.position[0]=Rover2.position[0];
            Rover2.position[1]=Rover2.position[1]-1;
          }
          else {
            window.alert('STOP -- Collission Alert');
          }
              break;
            }
      break;
        case 'W':
        if (Rover2.position[1]===9) {
          //Amb aquest if miro si el rover1 està en posició de xoc o no
          if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]-9){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsG=taula[Rover2.position[0]][Rover2.position[1]-9];
          if (posObsG.className!=='rock'){
            var divABorrar8=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar8.innerHTML='';
            var divAPosar8=document.createElement('div');
            divAPosar8.id='rover2';
            divAPosar8.style.backgroundImage = "url('images/gris_doble_fletxa_W.png')";
            pos2=taula[Rover2.position[0]] [Rover2.position[1]-9];
            pos2.appendChild(divAPosar8);
            Rover2.position[0]=Rover2.position[0];
            Rover2.position[1]=Rover2.position[1]-9;
          }
          else {
          window.alert('STOP -- Collission Alert');
          }
        break;
        }
        if (Rover2.position[1]!==9) {
          //Amb aquest if miro si el rover1 està en posició de xoc o no
          if (Rover.position[0]===Rover2.position[0] && Rover.position[1]===Rover2.position[1]+1){
            window.alert('STOP -- Collission Alert');
            break;
          }
          var posObsH=taula[Rover2.position[0]][Rover2.position[1]+1];
          if (posObsH.className!=='rock'){
            var divABorrar9=taula[Rover2.position[0]] [Rover2.position[1]];
            divABorrar9.innerHTML='';
            var divAPosar9=document.createElement('div');
            divAPosar9.id='rover2';
            divAPosar9.style.backgroundImage = "url('images/gris_doble_fletxa_W.png')";
            pos3=taula[Rover2.position[0]] [Rover2.position[1]+1];
            pos3.appendChild(divAPosar9);
            Rover2.position[0]=Rover2.position[0];
            Rover2.position[1]=Rover2.position[1]+1;
        }
        else {
        window.alert('STOP -- Collission Alert');
        }
      break;
      }
  }
  coordVisor2();
}

function turnRight2(){
  var divABorrar3='';
  var divAPosar3='';
  var pos3='';
  switch (Rover2.direction){
    case 'N':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2E';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='E';
      break;
    case 'S':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2W';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='W';
      break;
    case 'E':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2S';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='S';
      break;
    case 'W':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='N';
      break;
  }
}

function turnLeft2(){
  var divABorrar3='';
  var divAPosar3='';
  var pos3='';
  switch (Rover2.direction){
    case 'N':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2W';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='W';
      break;
    case 'S':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2E';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='E';
      break;
    case 'E':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='N';
      break;
    case 'W':
      divABorrar3=taula[Rover2.position[0]] [Rover2.position[1]];
      divABorrar3.innerHTML='';
      divAPosar3=document.createElement('div');
      divAPosar3.id='rover2S';
      pos3=taula[Rover2.position[0]] [Rover2.position[1]];
      pos3.appendChild(divAPosar3);
      Rover2.direction='S';
      break;
  }
}


//Visualitzar coordenades

function coordVisor() {
var visor1 = document.getElementById('visor1');
visor1.innerHTML=Rover.position[0];

var visor2 = document.getElementById('visor2');
visor2.innerHTML=Rover.position[1];
}

//Visualitzar coordenades Rover2

function coordVisor2() {
var visor3 = document.getElementById('visor1');
visor3.innerHTML=Rover2.position[0];

var visor4 = document.getElementById('visor2');
visor4.innerHTML=Rover2.position[1];
}


var commandsInput ='';
function save( ) {
  commandsInput=document.getElementById('commands').value;
  for (var c=0; c<commandsInput.length; c++) {
    var d = commandsInput[c];
    if (d==='f'){
      setTimeout(f,1000*c);
    }
    if (d==='b'){
      setTimeout(b,1000*c);
    }
    if (d==='r'){
      setTimeout(turnRight,1000*c);
    }
    if (d==='l'){
      setTimeout(turnLeft,1000*c);
    }
    if ( d!=='f' && d!=='b' && d!=='r' && d!=='l') {
      alert(d + " character NOT allowed");
      break;
    }
  }
}







/*setTimeout(function(){f(taula);},3000);
setTimeout(function(){b(taula);},3000);
setTimeout(function(){turnRight(taula);},3000);
setTimeout(function(){turnLeft(taula);},3000);*/

/*setTimeout(function(){
      setDelay();
}, 5000);*/

/*var myVar;
function setDelay(){
  myVar = setTimeout(emptyFunction, 3000);
  }

function emptyFunction(){
}*/

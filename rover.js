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
function createObstacle1(){
  var posRock1 ='';
  var xPos1 = document.getElementById('obsXPos1').value;
  var yPos1 = document.getElementById('obsYPos1').value;
  posRock1 = taula[yPos1][xPos1];
  posRock1.className='rock';
  document.getElementById('obsYPos1').value='';
  document.getElementById('obsXPos1').value='';
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

//Creació obstacles Random
function randomObstacle(){
  for (var count1=0;count1<100;count1++){
  setTimeout(innerRandomObs,100*count1);
    }
}
var gridBox=[];
var griBoxPos='';
var posRock ='';
var count2=0;
var xPos=0;
var yPos=0;

function innerRandomObs1(){
  var a=0;
  xPos = Math.floor(Math.random()*10);
  yPos = Math.floor(Math.random()*10);
  if(gridBox.length === 0){
    gridBox.push(taula[yPos][xPos]);
    posRock = taula[yPos][xPos];
    posRock.className='rock';
    count2=0;
    return;
  }
    for (a=0;a<=gridBox.length;a++){
      posRock = taula[yPos][xPos];
      gridBoxPos=gridBox[a];
      if(gridBoxPos.id !== posRock.id ){
        count2=count2+1;
      }
      else {
        count2 = 0;
        innerRandomObs();
        break;
      }
      if (count2==gridBox.length){
        gridBox.push(taula[yPos][xPos]);
        posRock.className='rock';
        count2=0;
      break;
    }
    }
}

function innerRandomObs(){
  /*var a=0;*/
  xPos = Math.floor(Math.random()*10);
  yPos = Math.floor(Math.random()*10);
  posRock = taula[yPos][xPos];
  if(posRock.className === "rock"){
      innerRandomObsLau();
  }else{
      posRock.className = "rock";
  }
}

//funció per crear 4 obstacles que es mouen aleatòriament

function movingObstacles(){
  var e=0;
  for (var d=0;d<100;d++){
  setTimeout(mRock1,1000*(d+e));
  setTimeout(mRock2,1000*(d+e+1));
  setTimeout(mRock3,1000*(d+e+2));
  setTimeout(mRock4,1000*(d+e+3));
  e=e+3;
    }
}

var xPosition1=1;
var yPosition1=1;
var posMRock1=[];
function mRock1(){
  var divABorrar11 = taula[yPosition1] [xPosition1];
  if (divABorrar11.className!=='rover' && divABorrar11.className!=='rover2') {
    divABorrar11.innerHTML='';
    divABorrar11.className='rec';
    xPosition1 = Math.floor(Math.random()*10);
    yPosition1 = Math.floor(Math.random()*10);
    posMRock1 = taula[yPosition1][xPosition1];
    posMRock1.className='rock';
  }
  else{
    mRock1();
  }
}

var xPosition2=2;
var yPosition2=2;
var posMRock2=[];
function mRock2(){
  var divABorrar12 = taula[yPosition2] [xPosition2];
  if (divABorrar12.className!=='rover' && divABorrar12.className!=='rover2') {
    divABorrar12.innerHTML='';
    divABorrar12.className='rec';
    xPosition2 = Math.floor(Math.random()*10);
    yPosition2 = Math.floor(Math.random()*10);
    posMRock2 = taula[yPosition2][xPosition2];
    posMRock2.className='rock';
  }
  else{
    mRock2();
  }
}

var xPosition3=3;
var yPosition3=3;
var posMRock3=[];
function mRock3(){
  var divABorrar13 = taula[yPosition3] [xPosition3];
  if (divABorrar13.className!=='rover' && divABorrar13.className!=='rover2') {
    divABorrar13.innerHTML='';
    divABorrar13.className='rec';
    xPosition3 = Math.floor(Math.random()*10);
    yPosition3 = Math.floor(Math.random()*10);
    posMRock3 = taula[yPosition3][xPosition3];
    posMRock3.className='rock';
  }
  else{
    mRock3();
  }
}

var xPosition4=4;
var yPosition4=4;
var posMRock4=[];
function mRock4(){
  var divABorrar14 = taula[yPosition4] [xPosition4];
  if (divABorrar14.className!=='rover' && divABorrar14.className!=='rover2') {
    divABorrar14.innerHTML='';
    divABorrar14.className='rec';
    xPosition4 = Math.floor(Math.random()*10);
    yPosition4 = Math.floor(Math.random()*10);
    posMRock4 = taula[yPosition4][xPosition4];
    posMRock4.className='rock';
  }
  else{
    mRock4();
  }
}

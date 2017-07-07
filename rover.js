var dir="";
var pos="";
var myRover = {
  iniPos :"" ,
  iniTopPosition: "",
  iniLeftPosition: "" ,
  direction: dir,
  position: pos
};

var pixTop="";
var pixTopPf="";
var pixLeft="";
var pixLeftPf="";
//rover goes at the starting point onload
function initialize() {
  myRover = {
  iniPos : gridPix[10][0],
  iniTopPosition: gridPix[10][0][0],
  iniLeftPosition: gridPix[10][0][1],
  direction: 'N'
  };
  document.getElementById("rover").style.marginTop = myRover.iniTopPosition+'px';
  document.getElementById("rover").style.marginLeft = myRover.iniLeftPosition+'px';
  pixTop = document.getElementById("rover").style.marginTop;
  pixTopPf= parseFloat(pixTop);
  document.getElementById("currentY").innerHTML=pixTopPf;
  pixLeft = document.getElementById("rover").style.marginLeft;
  pixLeftPf= parseFloat(pixLeft);
  document.getElementById("currentX").innerHTML=pixLeftPf;
}
function setPosition() {
  /*document.getElementById("rover").style.marginTop = myRover.iniTopPosition+'px';
  document.getElementById("rover").style.marginLeft = myRover.iniLeftPosition+'px';*/
  document.getElementById("rover").style.marginTop = 415+'px';
  document.getElementById("rover").style.marginLeft = 24+'px';
}

//gets the position and displays the pixels in X: Y: screen

function getTopPosition() {
  pixTop = document.getElementById("rover").style.marginTop;
  pixTopPf= parseFloat(pixTop);
  document.getElementById("currentY").innerHTML = pixTopPf;
  return pixTopPf;
  }

function getLeftPosition() {
  pixLeft = document.getElementById("rover").style.marginLeft;
  pixLeftPf= parseFloat(pixLeft);
  document.getElementById("currentX").innerHTML = pixLeftPf;
  return pixLeftPf;
}
console.log(getTopPosition());
console.log(getLeftPosition());
//Grid that contain pixels (padding-top and padding-left) position
var gridPix = [];
var count1=-85;
var count2=-76;
for (var i=0; i<=10; i++){
  gridPix[i]=new Array(10);
  count1=count1+50;
  count2=-76;
    for (var j=0; j<=10; j++){
      count2=count2+50;
      gridPix[i][j]=[count1,count2];
    }
}
console.log("gridPix");
console.log(gridPix);
//Grid that contain coordinates position
var gridCoor = [];
var count3=11;
var count4=-1;
for (var i=0; i<=10; i++){
  gridCoor[i]=new Array(10);
    count3=count3-1;
    count4=-1;
    for (var j=0; j<=10; j++){
      count4=count4+1;
      gridCoor[i][j]=[count4,count3];
    }
}
console.log("gridCoor");
console.log(gridCoor);
console.log(gridPix.length);
var len=gridPix.length;
//Grid that contain array position
var gridPos = [];
var count5=-1;
var count6=-1;
for (var i=0; i<=10; i++){
  gridPos[i]=new Array(10);
    count5=count5+1;
    count6=-1;
    for (var j=0; j<=10; j++){
      count6=count6+1;
      gridPos[i][j]=[count5,count6];
    }
}
console.log("gridPos");
console.log(gridPos);
// Looking for an element into the array
var item2 =[pixTopPf,pixLeftPf];
var item = parseFloat(item2);
console.log(item);
function isItemInArray(gridPix,item){
    document.getElementById("proves").innerHTML=item;
  for (var j=0; j<gridPix.length; j++){
    for (var k=0; k<gridPix.length; k++) {
      if (gridPix[j][k][0]===item[0] && gridPix[j][k][1]===item[1] ) {
        document.getElementById("currentX").innerHTML = gridPos[j][k][0];
        document.getElementById("currentY").innerHTML = gridPos[j][k][1];
        console.log(j);
        console.log(k);
        break;
        }

    }
}
}
console.log(item2);


//from pixels to coordinates
pixToCoor();
var a = getLeftPosition();
var b = getTopPosition();
function pixToCoor(gridPix,a,b) {
  var item = [a,b];
  console.log(item);
  for (var j=0; j<len; j++){
    for (var k=0; k<len; k++) {
      if (gridPix[j][k][0]===item[0] && gridPix[j][k][1]===item[1] ) {
        document.getElementById("currentX").innerHTML = gridPos[j][k][0];
        document.getElementById("currentY").innerHTML = gridPos[j][k][1];
        console.log(gridPix[j][k][0]);
        console.log(j);
        console.log(k);
        document.getElementById("proves").innerHTML=item;
        break;
        }

    }
}
}

//function forward
function goForward(myRover,pixLeftPf,pixTopPf) {
  switch(myRover.direction) {
    case 'N':
      /*myRover.position=gridPix[pixLeftPf, pixTopPf-50];*/
      myRover.position=gridPix[20, 50];
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

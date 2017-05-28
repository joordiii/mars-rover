var dir="";
var myRover = {
  iniPos :"" ,
  iniTopPosition: "",
  iniLeftPosition: "" ,
  direction: dir
};

/*var dir="";
var myRover = {
direction: dir,
};*/

//rover goes at the starting point onload
function initialize() {
  myRover = {
  iniPos : gridPix[10][0],
  iniTopPosition: gridPix[10][0][0],
  iniLeftPosition: gridPix[10][0][1],
  direction: 'N'
  };
  /*document.getElementById("rover").style.marginLeft = -26+'px';
  document.getElementById("rover").style.marginTop = 465+'px';
  document.getElementById("proves").innerHTML = gridPix[10][0][0];
  document.getElementById("proves").innerHTML = gridPix[10][0][1];
  var myRover2 = document.getElementById('rover');*/
  document.getElementById("rover").style.marginTop = myRover.iniTopPosition+'px';
  document.getElementById("rover").style.marginLeft = myRover.iniLeftPosition+'px';
}

function setPosition() {
  document.getElementById("rover").style.marginTop = myRover.iniTopPosition+'px';
  document.getElementById("rover").style.marginLeft = myRover.iniLeftPosition+'px';
}


//gets the position and displays the pixels in X: Y: screen
function getPosition() {
  var pixTop = document.getElementById("rover").style.marginTop;
  var pixLeft = document.getElementById("rover").style.marginLeft;
  var pixTopPf= parseFloat(pixTop);
  var pixLeftPf= parseFloat(pixLeft);
  document.getElementById("currentX").innerHTML = pixLeftPf;
  document.getElementById("currentY").innerHTML = pixTopPf;
}

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
//Grid that contain array position
var gridPos = [];
var count5=-1;
var count6=-1;
for (var i=0; i<=10; i++){
  gridPos[i]=new Array(10);
    count5=count5+1;
    count5=-1;
    for (var j=0; j<=10; j++){
      count6=count6+1;
      gridPos[i][j]=[count5,count6];
    }
}
// Looking for an element into the array
var a = document.getElementById("rover").style.marginTop;
var b = document.getElementById("rover").style.marginLeft;
document.getElementById("proves").innerHTML=b;
var item =[a,b];

function isItemInArray(){
  for (var j=0; j<gridPix.length; j++){
    for (var k=0; k<gridPix.length; k++)
      if (gridPix[j][k][0]===item[0] && gridPix[j][k][1]===item[1] ) {
        console.log(j);
        console.log(gridPix[j][k]);
    }
  }
}

isItemInArray(gridPix,item);

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
goForward(myRover);

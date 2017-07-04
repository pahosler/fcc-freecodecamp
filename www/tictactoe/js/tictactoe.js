//var init = (function() {
var game = {
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  BOARD: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  WINS: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  tokenH: 115,
  tokenW: 115,
  xyCanvas: {
    0: [5, 15],
    1: [130, 15],
    2: [250, 15],
    3: [5, 135],
    4: [130, 135],
    5: [250, 135],
    6: [5, 260],
    7: [130, 255],
    8: [250, 255]
  },
  xyObjMap: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ],
  setAI: 0,
  toggleAI: 0,
  mouseClick: 0,
  catsImg: "https://raw.githubusercontent.com/pahosler/images/master/simonscat.gif",
  dumbAI: function() {
    return Math.floor(Math.random(10) * 8)
  }
}

// cache DOM
var message = document.getElementById("message")
var winToken = document.getElementById("xo")
var buttonAI = document.getElementById("AI")
var buttonPlayer = document.getElementById("player")
// canvas vars
var canvas = document.getElementById("tictactoe");
var ctx = canvas.getContext("2d");
var xImg = new Image();
var oImg = new Image();
var img = [xImg, oImg];
xImg.src = "https://raw.githubusercontent.com/pahosler/images/master/x.gif";
oImg.src = "https://raw.githubusercontent.com/pahosler/images/master/o.gif";
oImg.onload = function() {
  drawBoard()
}
// events
canvas.addEventListener("mousedown", function(evt) {
  var mousePos = getMousePos(canvas, evt);
  playerMove(mousePos)
});
buttonAI.addEventListener("click",function(){
  // toggle AI
  reset()
})
buttonPlayer.addEventListener("click",function(){
  //toggle player
  reset()
})

function drawBoard() {
  ctx.fillStyle = "#ff5555";
  ctx.fillRect(120, 0, 10, 360);
  ctx.fillRect(0, 120, 360, 10);
  ctx.fillRect(240, 0, 10, 360);
  ctx.fillRect(0, 240, 360, 10);
  return
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

function playerMove(mousePos) {
  var x = Math.floor(mousePos.x / 120)
  var y = Math.floor(mousePos.y / 120)
  var tokenX = game.xyCanvas[game.xyObjMap[x][y]][0];
  var tokenY = game.xyCanvas[game.xyObjMap[x][y]][1];
  var boardPos = game.xyObjMap[x][y]
  if(game.mouseClick %2 === 1){
    return
  }
  if (validMove(boardPos)) {
    ctx.drawImage(img[(player())], tokenX, tokenY, game.tokenH, game.tokenW);
    game.board[boardPos] = (player() === 0) ? "X" : "O"
    ++game.mouseClick
  }else {
    return
  }
  if (won() || boardFull()){
    console.log("player board",game.board)
    wonBoard()
  } else {
    turnAI()
  }
  return
}

// begin Smart AI Block
function smartAI(humanMove) {
let move
let tokenAI = player()===0 ? "X" : "O"
let tokenHuman = tokenAI === "X" ? "O":"X"
let movesLeft = moveNum()
// always check if AI can win first
  for (let index = 0; index < game.WINS.length; ++index) {
   if(chkArr(game.WINS[index],tokenAI) === 2){
    move = addMove(game.WINS[index])
     console.log("MOVE WIN",move)
    return move
    }
  }


// check for doubles and block them
  for (var index=0; index< game.WINS.length; ++index){
   if(chkArr(game.WINS[index],tokenHuman) === 2){
     move = addMove(game.WINS[index])
     console.log("MOVE DOUBLES",move)
     return move
   }
  }

  //check for singles
for (let index=0; index< game.WINS.length; ++index){
   if(chkArr(game.WINS[index],tokenHuman) === 1){
     if (validMove(4)){
    return move = 4
  } else if(movesLeft === 8){
      return [0,2,6,8][Math.floor(Math.random(10)*4)]
  } else if(movesLeft === 6 && validMove(2)){
      return move = 2
  } else {
     move = game.board.findIndex(getMoveAI)
    console.log("MOVE SINGLE",move)
     return move
   }
  }
}
}

function chkArr(arr,token){
  if(arr.filter(e => game.board[e] !== " ").length < 3){
    return arr.filter(e => game.board[e] === token).length
  }
  return
}

function addMove(arr){
  let moveAI
  moveAI = arr.map(e => game.board[e] )
  let move = arr[moveAI.indexOf(" ")]
  console.log("addMove",move)
  return move
}

function getMoveAI(element){
  return element === " "
}

function turnAI() {

  var move= 0
  var tokenX=0
  var tokenY=0
  if (player() === -1) wonBoard()
  if(player() === 1){
    winToken.src = (player() === 0 ? xImg.src : oImg.src)
    do{
      if(!buttonAI.checked){
        move = game.dumbAI()
        if(validMove(4)){
          move = 4
        }else if (validMove(2)){
          move = 2
        }
      }else {
        move = smartAI()
        console.log("smartAI move = ",move)
      }
    } while(!validMove(move))
      console.log("moves left:", moveNum()-1)
   setTimeout(function(){

      tokenX = game.xyCanvas[move][0]
      tokenY = game.xyCanvas[move][1]
      ctx.drawImage(img[(player())],tokenX,tokenY,game.tokenH,game.tokenW)
      game.board[move] = "O"
      winToken.src = (player() === 0 ? xImg.src : oImg.src)
      if(won() || boardFull()){
        wonBoard()
      }else{
      ++game.mouseClick
      }
    },1000)
  }
  return
}

function wonBoard(){
  var delay = 2000
  if(winner()){
    winToken.src = (winner() === "X" ? xImg.src : oImg.src)
    message.innerHTML = "Won!"
  } else {
    winToken.src = game.catsImg
    message.innerHTML = "CATS!"
    delay = 9500
  }
  reset(delay)
}

function reset(delay) {
  setTimeout(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    winToken.src = xImg.src
    message.innerHTML = "Let's Play!"
    game.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    game.mouseClick = 0
    game.setAI = buttonAI.check ? 1:0
    drawBoard()
  }, delay)
  return
}

// tic tac toe engine
function cat() {
  return boardFull() && !won() ? true : false;
}

function boardFull() {
  return game.board.every(e => e !== " ");
}

function moveNum(){
  return game.board.filter(e => e === " ").length
}

function won() {
  var t = [];
  for (var w = 0; w < game.WINS.length; ++w) {
    game.WINS[w].map(a => t.push(game.board[a]));
    if (t.every(a => a === "X") || t.every(a => a === "O")) {
      return t[0];
    }
    t = [];
  }
  return false;
}

function winner() {
  return won();
}

function player() {
  var token = game.board.filter(e => e === " ");
  console.log("token", (token.length) %2)
  return Math.floor((token.length - 1) % 2);
}

function validMove(position) {
  //console.log("valid move?", position)
  return game.board[position] === "X" || game.board[position] === "O" ? false : true;
}

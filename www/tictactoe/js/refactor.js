var Player = {
    token: !buttonChecked ? "X":"O",
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key) {
            instance[key] = values[key];
        });
        return instance;
    },
    sayToken: function() {
        console.log(this.token)
    }
};

var human = Player.create({
  playerMove: function(mousePos){
    let x = Math.floor(mousePos.x / 120);
    let y = Math.floor(mousePos.y / 120);
    let tokenX = game.xyCanvas[game.xyObjMap[x][y]][0];
    let tokenY = game.xyCanvas[game.xyObjMap[x][y]][1];
    let boardPos = game.xyObjMap[x][y];


  }

});

var ai = Player.create({
    token: !buttonChecked ? "O" : "X"
});

var board = new Engine();

events.on("playerPosition", human.getPosition());
events.on("aiPosition", ai.getPosition());

//events - a super-basic Javascript (publish subscribe) pattern

var events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  },
  off: function(eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};

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
var switchAI = document.getElementById("easy")
var switchPlayer = document.getElementById("ox")
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
  switchAI.innerHTML=(buttonAI.checked ? "AI":"EASY")
  reset()
})
buttonPlayer.addEventListener("click",function(){
  //toggle player
  switchPlayer.innerHTML= (buttonPlayer.checked ? "O" : "X")
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

// begin player code block

function playerMove(mousePos) {
  console.log("instance of", mousePos instanceof getMousePos)
  var x = Math.floor(mousePos.x / 120)
  var y = Math.floor(mousePos.y / 120)
  var tokenX = game.xyCanvas[game.xyObjMap[x][y]][0];
  var tokenY = game.xyCanvas[game.xyObjMap[x][y]][1];
  var boardPos = game.xyObjMap[x][y]
  var token = player() === "X" ? "X" : "O"
  if(game.mouseClick %2 === 1){
    return
  }
  if (validMove(boardPos)) {
    ctx.drawImage(img[(token === "X" ? 0:1)], tokenX, tokenY, game.tokenH, game.tokenW);
    game.board[boardPos] = token
    ++game.mouseClick
  }else {
    return
  }
  if (won() || boardFull()){
    wonBoard()
  } else {
    turnAI()
  }
  return
}

// end player code block

// begin Smart AI Block

function smartAI() {
let move
let tokenAI = player()=== "X" ? "X" : "O"
let tokenHuman = tokenAI === "X" ? "O":"X"
let movesLeft = moveNum()
// always check if AI can win first
  for (let index = 0; index < game.WINS.length; ++index) {
   if(chkArr(game.WINS[index],tokenAI) === 2){
    move = addMove(game.WINS[index])
    return move
    }
  }

// check for doubles and block them
  for (var index=0; index< game.WINS.length; ++index){
   if(chkArr(game.WINS[index],tokenHuman) === 2){
     move = addMove(game.WINS[index])
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
   } else if(movesLeft === 6 && validMove(1)){
       return move = 1
   } else {
      move = game.board.findIndex(getMoveAI)
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
  let moveAI = arr.map(e => game.board[e] )
  let move = arr[moveAI.indexOf(" ")]
  return move
}

// this is a call back for findIndex
function getMoveAI(element){
  return element === " "
}

function turnAI() {

  var move= 0
  var token = player() === "O" ? 1:0
  var tokenX=0
  var tokenY=0
  //if (player() === -1) wonBoard()
  if(!buttonPlayer.checked && token === 1 || buttonPlayer.checked && token ===0){
    winToken.src = (token === 0 ? xImg.src : oImg.src)
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
      ctx.drawImage(img[(token === "X" ? 0:1)],tokenX,tokenY,game.tokenH,game.tokenW)
      game.board[move] = "O"
      winToken.src = (token === "X" ? xImg.src : oImg.src)
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
    message.innerHTML = "CAT!"
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
    //game.setAI = buttonAI.check ? 1:0
    drawBoard()
  }, delay)
  return
}

// tic tac toe engine
var Engine = {
  create: function(values) {
      var instance = Object.create(this);
      Object.keys(values).forEach(function(key) {
          instance[key] = values[key];
      });
      return instance;
  },
  board: [" "," "," "," "," "," "," "," "," "],
  setBoard: function(newBoard){
    board = newBoard;
  },
  getBoard: function(){
    return board;
  },
  cat: function(){}
};
  this.board =
  var WINS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  function setBoard(newBoard){
    board = newBoard
  }
  function getBoard(){
    return board
  }
  var state = {
    cat: function() {
      return state.boardFull() && !state.won() ? true :false
    },
    boardFull: function() {
      return board.every(e => e !== " ")
    },
    moveNum: function() {
      return board.filter(e => e === " ").length
    },
    won: function() {
      var t = [];
      for (var w = 0; w < WINS.length; ++w) {
        WINS[w].map(a => t.push(board[a]))
        if (t.every(a => a === "X") || t.every(a => a === "O")) {
        return t[0]
        }
        t = []
      }
      return false
    },
    winner: function(){
      return state.won()
    },
    player: function(){
      var token = board.filter(e => e === " ");
      return (Math.floor((token.length - 1) % 2)) === 0 ? "X" : "O";
    },
    validMove: function(position){
      return board[position] === "X" || board[position] === "O" ? false : true;
    }
  }
  return {
    cat : state.cat,
    boardFull: state.boardFull,
    moveNum: state.moveNum,
    won: state.won,
    winner: state.winner,
    player: state.player,
    validMove: state.validMove,
    setBoard: setBoard,
    board: getBoard
  }
})

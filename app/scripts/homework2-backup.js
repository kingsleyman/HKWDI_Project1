function changeSquareContent(location, className) {
	document.getElementById('cell' + location).classList.add(className); 
	document.getElementById('cell' + location).innerHTML = className;
};


var currentPlayer = "x";

function makeNextMoveAt(location) {
  markSquareAsOccupiedAt(location);
  swapCurrentPlayerToOpponent();
};

function markSquareAsOccupiedAt(location) {
  if (currentPlayer == "x") {
  	changeSquareContent(location, "x");
  } else {
  	changeSquareContent(location, "o");
  }
}

function swapCurrentPlayerToOpponent() {
  if (currentPlayer == "x") {
  	currentPlayer = "o";
  } else {
  	currentPlayer = "x";
  }	
}

function handleClick(location) {
	if (currentSquareClickedAlready(location)) {
		// do nothing
	} else {
		makeNextMoveAt(location)
	}
}
// Homework 1
// this function needs to return true or false
function currentSquareClickedAlready(location) {
  // TODO
  // check if the square at location has been occupied
  // 
  // ... your code here

 // is square at location being marked before ?
  // return true if cell has value
if(document.getElementById('cell' + location).innerHTML){
	return true
}
 
  // return false if cell is empty
  return false;



}






// Homework 2
// this function need to return true or false
function isTopHorizontalThreeOccupiedByMe() {
  // TODO
  // check if the top three square is occupied by X
  // 
  // ... your code here

  // is the 3 squares being marked by x
}





















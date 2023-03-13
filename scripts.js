const board = [
  ['','',''],
  ['','',''],
  ['','',''],
]

let currentMarker = 'X';


const handleClick = (element) => {

  console.log(`The element you clicked on has an id:  ${element.id}`);

  if (!document.getElementById(element.id).innerHTML) {
    addMarker(element.id);
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
  
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  document.getElementById(id).innerHTML = currentMarker

  const row = parseInt(id.charAt(0))
  const column = parseInt(id.charAt(2))
  board[row][column] = currentMarker
  
  checkForWin()
}

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if (currentMarker === "X") {
    currentMarker = "O"
    // document.getElementById(id).style.color ='red'
  } else {
    currentMarker = "X"
  }
}


// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
 
  const squares = document.getElementsByTagName("TD")

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i = 0; i < squares.length; i++) {
    console.log(squares[i].id)
    squares[i].innerHTML = null
  }
  board === [
    ['','',''],
    ['','',''],
    ['','',''],
  ]
}
  const checkForWin = () => {
    if(horizontalWin() || verticalWin() || diagonalWin()) {
      window.alert(`Player ${currentMarker} won!`)
    } else {
      changeMarker()
    }
  }

  const horizontalWin = () => {
    // Your code here to check for horizontal wins
    if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")){
      return true
    }

    else if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
      return true
    }

    else if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
      return true
    }

  }

  const verticalWin = () => {
    // Your code here to check for vertical wins
    if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")){
      return true
    }

    else if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")){
      return true
    }

    else if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
      return true
    }
  }

  const diagonalWin = () => {
    // Your code here to check for diagonal wins
    if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")){
      return true
    }

    else if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
      return true
    }
  
}
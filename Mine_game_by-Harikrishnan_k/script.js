document.addEventListener('DOMContentLoaded', function() {
      // Select the grid, flagsLeft, and result elements from the DOM

    const grid = document.querySelector('.grid')
    const flagsLeft = document.querySelector('#flags-left')
    const result = document.querySelector('#result')

      // Set the width of the grid and the number of bombs
    const width = 10
    let bombAmount = 10
     // Initialize the squares array, the game over flag, and the flags counter
    let squares = []
    let isGameOver = false 
    let flags = 0

     // Function to create the game board
    function createBoard() {
        // number of flags left
        flagsLeft.innerHTML = 'Flags : ' + bombAmount;
 // Create arrays for the bombs and the empty squares
        const bombArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('valid')


      // Concatenate the bomb and empty arrays, and shuffle them

        const gameArray = emptyArray.concat(bombArray)
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)

        
        // Create the squares of the grid
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            square.id = i
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)
            // left click
            square.addEventListener('click', function(e) {
                click(square)
            })
            // right click
            square.oncontextmenu = function(e) {
                e.preventDefault()
                addFlag(square)
            }
        }
         // Calculate the number of bombs around each square
        for (let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1)

            if (squares[i].classList.contains('valid')) {
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++
                if (i > 10 && squares[i - width].classList.contains('bomb')) total++
                if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++
                if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total++
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++
                if (i < 89 && squares[i + width].classList.contains('bomb')) total++
                squares[i].setAttribute('data', total)
            }
        }
    }

    // call to to start the game
    createBoard()

  // Function to add a flag to a square
    function addFlag(square) {
        if (isGameOver) return
        if (!square.classList.contains('checked') && (flags < bombAmount)) {

            // If the square doesn't have a flag, add one
            if (!square.classList.contains('flag')) {
                square.classList.add('flag')
                square.innerHTML = ' 🚩'
                flags++
                flagsLeft.innerHTML = 'Flags : ' + (bombAmount - flags);
                checkForWin()
            } else {
                //  If the square already has a flag, remove it
                square.classList.remove('flag')
                square.innerHTML = ''
                flags--
                flagsLeft.innerHTML = 'Flags : ' + (bombAmount - flags);
            }
        }
    }

    // Function to handle a click on a square

    function click(square) {
        let currentId = square.id
        if (isGameOver) return
        if (square.classList.contains('checked') || square.classList.contains('flag')) return
        if (square.classList.contains('bomb')) {
            gameOver(square)
        } else {

               // If the square doesn't have a bomb, display the number of bombs around it
           
               let total = square.getAttribute('data')
            if (total != 0) {
                square.classList.add('checked')
                if (total == 1) square.classList.add('one')
                if (total == 2) square.classList.add('two')
                if (total == 3) square.classList.add('three')
                if (total == 4) square.classList.add('four')
                square.innerHTML = total
                return
            }
            checkSquare(square)
        }
        square.classList.add('checked')
    }
// Function to check the squares around a square

    function checkSquare(square) {
        const currentId = square.id
        const isLeftEdge = (currentId % width === 0)
        const isRightEdge = (currentId % width === width - 1)

        setTimeout(() => {
            if (currentId > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId > 9 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1 - width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId > 10) {
                const newId = squares[parseInt(currentId - width)].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId > 11 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1 - width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 98 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 90 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 88 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentId < 89) {
                const newId = squares[parseInt(currentId) + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
        }, 10)
    }
    // Function to end the game when a bomb is clicked

    function gameOver(square) {
        result.innerHTML = 'BOOM! 💥 GAME OVER'
        isGameOver = true

        squares.forEach(square => {
            if (square.classList.contains('bomb')) {
                square.innerHTML = '💣'
            }
        })
    }

// Function to check if the player has won

    function checkForWin() {
        let matches = 0

        // For each square, if it contains a flag and a bomb, increment the matches counter

        for (let i = 0; i < squares.length; i++) {
            if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
                matches++
            }
              // If the number of matches equals the number of bombs, the player wins
              
            if (matches === bombAmount) {
                result.innerHTML = 'YOU WIN!'
                isGameOver = true
            }
        }
    }
})

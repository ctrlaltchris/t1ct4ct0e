// $(function(){

    // Trigger options modal on page load to prompt user for 1P/2P gameplay
    $('.modal-trigger').leanModal();

    var p1mark = "X";
    var p2mark = "O";
    var p1 = 0;
    var p2 = 0;
    var p1wins = 0;
    var p2wins = 0;
    var nextPlayer = "p1";
    var currentPlayerMark;
    var roundCounter = 0;
    var random = 0;
    var cpuMoves = [1, 2, 4, 8, 16, 32, 64, 128, 256];
    var wins = [7, 56, 448, 73, 146, 292, 273, 84];

    // Set event listeners for gameplay buttons
    $('#new').on('click', function(event){
            newGame();
    });
    $('#reset').on('click', function(event){
        resetGame();
    });
    $('#1p').on('click', function(event){
        // play1pGame();
    });
    $('#2p').on('click', function(event){
        // play2pGame();
    });

    // Run 1P/2P game depending on user selection
    playGame();

    function playGame(){
        $('.cell').on('click', function(event){
            // Player 1 turn
            if (nextPlayer === "p1"){
                currentPlayerMark = p1mark;
                nextPlayer = "p2";

                if ($(this).text() === "") {
                    $(this).append(currentPlayerMark);
                    p1 += Number(this.id);
                    console.log("p1 score is: " + p1);
                    checkWinner(p1, nextPlayer);
                } else {
                    return;
                }
            // Player 2 turn
            } else {
                currentPlayerMark = p2mark;
                nextPlayer = "p1";

                if ($(this).text() === "") {
                    $(this).append(currentPlayerMark);
                    p2 += Number(this.id);
                    console.log("p2 score is: " + p2);
                    checkWinner(p2, nextPlayer);
                } else {
                    return;
                }
            }
        });
    }

    function getRandom() {
        return Math.floor(Math.random() * (10 - 0));
    }

    // CPU player
    function cpuPlayer() {
        var random = Math.floor(Math.random() * (9 - 0));
        console.log(random);
        if ($('#' + cpuMoves[random]).text() === "") {
            console.log(cpuMoves[random]);
            nextPlayer = "p1"
            $('#' + cpuMoves[random]).text(p2mark);
            checkWinner(p2, nextPlayer)
        }else {
            cpuPlayer()
        }
    }

    // Check for a win
    function checkWinner(score, nextPlayer) {
        roundCounter++
        for (var i = 0; i < wins.length; i++) {
            if ((wins[i] & score) === wins[i]) {
                console.log("WINNAR!");
                if (nextPlayer === "p1"){
                    p2wins++;
                    $('h1').text("<< p2 WINS! >>");
                    $('#p2score').text("p2 [0] Score: " + p2wins);
                    $('.cell').off('click');
                }else if (nextPlayer === "p2"){
                    p1wins++;
                    $('h1').text("<< p1 WINS! >>");
                    $('#p1score').text("p1 [X] Score: " + p1wins);
                    $('.cell').off('click');
                }
            } else if (roundCounter === 9) {
                $('h1').text("<< IT'S A DRAW! >>");
            }
        }
    };

    // Triggered from "New Game" button, resets game board
    function newGame() {
        $('.cell').empty();
        $('h1').text(" \\\\ Tic Tac Toe! >");
        p1 = 0;
        p2 = 0;
        playGame();
    }

    // Triggered from "Reset Game" button, resets game board and player scores
    function resetGame() {
        newGame();
        p1score = 0;
        p2score = 0;
        $('#p1score').text("p1 [X] Score: 0");
        $('#p2score').text("p2 [X] Score: 0");
    }

// });

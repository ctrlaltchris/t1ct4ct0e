$(function(){
    var p1mark = "X";
    var p2mark = "O";
    var p1 = 0;
    var p2 = 0;
    var p1wins = 0;
    var p2wins = 0;
    var nextPlayer = "p1";
    var roundCounter = 0;
    var random = 0;
    var cpuMoves = [1, 2, 4, 8, 16, 32, 64, 128, 256];
    var wins = [7, 56, 448, 73, 146, 292, 273, 84];
    var playMode;
    var winner;

    // Trigger options modal on page load to prompt user for 1P/2P gameplay
    function openModal() {
        $('#welcomeModal').openModal();
    }
    openModal();

    // Set event listeners for gameplay buttons
    $('#new').on('click', function(event){
        newGame();
    });
    $('#reset').on('click', function(event){
        resetGame();
    });
    $('#1p').on('click', function(event){
        playMode = "1p";
        resetGame();
    });
    $('#2p').on('click', function(event){
        playMode = "2p";
        resetGame();
    });
    $('#options').on('click', openModal);

    // Run 1P/2P game depending on user selection
    function play2PGame(){
        $('.cell').on('click', function(event){
            // Player 1 turn
            if (nextPlayer === "p1"){
                nextPlayer = "p2";

                if ($(this).text() === "") {
                    $(this).append(p1mark);
                    p1 += Number(this.id);
                    console.log("p1 score is: " + p1);
                    checkWinner(p1, nextPlayer);
                } else {
                    return;
                }
            // Player 2 turn
            } else {
                nextPlayer = "p1";

                if ($(this).text() === "") {
                    $(this).append(p2mark);
                    p2 += Number(this.id);
                    console.log("p2 score is: " + p2);
                    checkWinner(p2, nextPlayer);
                } else {
                    return;
                }
            }
        });
    }

    function play1PGame() {
        $('.cell').on('click', function(event){
            // Player 1 turn
            nextPlayer = "p2";
            if ($(this).text() === "") {
                $(this).append(p1mark);
                p1 += Number(this.id);
                console.log("p1 score is: " + p1);
                checkWinner(p1, nextPlayer);
                if(roundCounter < 9){
                    cpuPlayer();
                }
            } else {
                return;
            }
        });
    }

    // CPU player
    function cpuPlayer() {
        var random = Math.floor(Math.random() * (9 - 0));
        if ($('#' + cpuMoves[random]).text() === "") {
            nextPlayer = "p1";
            p2 += Number(cpuMoves[random]);
            console.log("p2 score is: " + p2);
            $('#' + cpuMoves[random]).text(p2mark);
            checkWinner(p2, nextPlayer);
        }else if (roundCounter < 9){
            cpuPlayer();
        }
    }

    // Check for a win
    function checkWinner(score, nextPlayer) {
        roundCounter++;
        for (var i = 0; i < wins.length; i++) {
            console.log(p2);
            if ((wins[i] & score) === wins[i]) {
                if (nextPlayer === "p1"){
                    winner = "p2";
                    p2wins++;
                    $('h1').text("<< p2 WINS! >>");
                    $('h1').addClass("blink");
                    $('#p2score').text("p2 [0] Score: " + p2wins);
                    $('.cell').off('click');
                }else if (nextPlayer === "p2"){
                    winner = "p1";
                    p1wins++;
                    $('h1').text("<< p1 WINS! >>");
                    $('h1').addClass("blink");
                    $('#p1score').text("p1 [X] Score: " + p1wins);
                    $('.cell').off('click');
                }
            } else if (roundCounter === 9 && winner === "") {
                $('h1').text("<< IT'S A DRAW! >>");
            }
        }
    }

    // Triggered from "New Game" button, resets game board
    function newGame() {
        $('.cell').empty();
        $('h1').text(" \\\\ Tic Tac Tizzle! >");
        $('h1').removeClass("blink");
        p1 = 0;
        p2 = 0;
        roundCounter = 0;
        winner = 0;
        if (playMode === "1p") {
            play1PGame();
        } else{
            play2PGame();
        }
    }

    // Triggered from "Reset Game" button, resets game board and player scores
    function resetGame() {
        $('.cell').empty();
        $('h1').text(" \\\\ Tic Tac Tizzle! >");
        $('h1').removeClass("blink");
        $('#p1score').text("p1 [X] Score: 0");
        $('#p2score').text("p2 [0] Score: 0");
        p1 = 0;
        p2 = 0;
        p1score = 0;
        p2score = 0;
        roundCounter = 0;
        winner = 0;
        nextPlayer = "p1";
        if (playMode === "1p") {
            play1PGame();
        } else{
            play2PGame();
        }
    }
});

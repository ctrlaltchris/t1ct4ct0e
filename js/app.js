// $(function(){

    var p1mark = "X";
    var p2mark = "O";
    var p1 = 0;
    var p2 = 0;
    var p1wins = 0;
    var p2wins = 0;
    var nextPlayer = "p1";
    var currentPlayerMark;

    var wins = [7, 56, 448, 73, 146, 292, 273, 84];

    playGame();

    function playGame(){

        $('.cell').on('click', function(event){
            // Player 1 turn
            if (nextPlayer === "p1"){
                currentPlayerMark = p1mark;
                nextPlayer = "p2"

                if ($(this).text() === "") {
                    $(this).append(currentPlayerMark);
                    p1 += Number(this.id);
                    console.log("p1 score is: " + p1);

                    checkWinner(p1);

                } else {
                    return;
                }

            // Player 2 turn
            } else {
                currentPlayerMark = p2mark;
                nextPlayer = "p1"

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


    };

    // Check for a win
    function checkWinner(score, nextPlayer) {
        for (var i = 0; i < wins.length; i++) {
            console.log(wins[i] & score);
            if ((wins[i] & score) === wins[i]) {
                console.log("WINNAR!");
                if (nextPlayer === "p1"){
                    p2wins++;
                    $('h1').text("<< p2 WINS! >>");
                    $('#p2score').text("p2 [0] Score: " + p2wins);
                    $('.cell').off('click');
                }else {
                    p1wins++;
                    $('h1').text("<< p1 WINS! >>");
                    $('#p1score').text("p1 [X] Score: " + p1wins);
                    $('.cell').off('click');
                }

            }
        }
    };

    function resetBoard() {
        $('.cell').empty();
        $('h1').text(" \\\\ Tic Tac Toe! >");
        p1 = 0;
        p2 = 0;
        playGame();
    }

// });

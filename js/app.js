// $(function(){

    var turn = 0;
    var round = 1;
    var p1mark = "X";
    var p2mark = "O";
    var p1 = 0;
    var p2 = 0;
    var p1wins = 0;
    var p2wins = 0;
    var click;
    var clickScore;
    var playerScore = 0;
    var cpuScore = 0;
    var nextPlayer = "p1";
    var currentPlayerMark;

    var wins = [7, 56, 448, 73, 146, 292, 273, 84];

    playOneRound();

    function playOneRound(){

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
                    $('h1').text("<< p2 WINS! >>");
                    p2wins++
                }else {
                    $('h1').text("<< p1 WINS! >>");
                    p1wins++
                }

            }
        }
    };

// });

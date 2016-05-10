$(function(){

    var turn = 1;
    var round = 1;
    var p1mark = "X";
    var p2mark = "O";
    var p1 = 0;
    var p2 = 0;
    var click;
    var clickScore;
    var playerScore = 0;
    var cpuScore = 0;
    var currentPlayer = "p1";
    var nextPlayer;
    var currentPlayerMark;

    var wins = [7, 56, 448, 73, 146, 292, 273, 84];

    function playOneRound(){
        if (currentPlayer = "p1"){
            currentPlayerMark = p1mark;
            nextPlayer = "p2"

            $('.cell').on('click', function(event){
                console.log($(this).text());
                if ($(this).text() == "") {
                    $(this).append(currentPlayerMark);
                    p1 += Number(this.id);
                    console.log(p1);
                } else {
                    return;
                }

            });

        }else {
            currentPlayerMark = p2mark;
            nextPlayer = "p1"

            $('.cell').on('click', function(event){
                // Catch the user click and return div id
                var clickElement = this;
                clickScore = this.id;
                console.log(this.id);

                $(clickElement).append(currentPlayerMark);
                p1 += Number(this.id);
                console.log(p1);
                nextPlayer = "p2";
            });
        };

    };

    playOneRound();

    // Check for a winner!

//     win = function (score) {
//     for (var i = 0; i < wins.length; i += 1) {
//         if ((wins[i] & score) === wins[i]) {
//             return true;
//         }
//     }
//     return false;
// },

});






//
// /*
//  * Returns whether the given score is a winning score.
//  */
//     win = function (score) {
//         for (var i = 0; i < wins.length; i += 1) {
//             if ((wins[i] & score) === wins[i]) {
//                 return true;
//             }
//         }
//         return false;
//     },



        //
        //
        // remaining.text('Rounds Remaining: ' + (numberOfRounds - currentRoundNumber) + 1);
        //
        // function getRandomNumber(min, max){
        //     var rand = Math.floor(Math.random() * (max-min+1) + min);
        //     console.log(rand);
        //     return rand;
        // }
        //
        // function placeTarget(){
        //     target.css({
        //         left: getRandomNumber(0, gameArea.width() - target.width()),
        //         top: getRandomNumber(0, gameArea.height() - target.height())
        //     });
        //     targetX = target.offset().left - gameArea.offset().left;
        //     targetY = target.offset().top - gameArea.offset().top;
        // }
        //
        // placeTarget();
        //
        // $('h2').on('click', function(event){
        //     // Scoring exact click
        //     event.stopPropagation();
        // });
        //
        // $('button').on('click', function(event){
        //     // Hitting buttons
        //     event.stopPropagation();
        // });
        //
        // gameArea.on('click', function(event){
        //     // Scoring a near click;
        //     if(event.target === target[0]){
        //         console.log('YOU GOT ME');
        //         playerScore += exactClick;
        //
        //     }else{
        //         var clickX = event.offsetX;
        //         var clickY = event.offsetY;
        //
        //         var distanceX = Math.abs(targetX - clickX);
        //         var distanceY = Math.abs(targetY - clickY);
        //         var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        //
        //         var worstCase = Math.sqrt(gameArea.width() * gameArea.width() + gameArea.height() * gameArea.height());
        //         var distanceScore = Math.round(Math.pow((1 - distance / worstCase), 2) * exactClick);
        //         playerScore += distanceScore
        //     }
        //     console.log('Your score is: ' + playerScore);
        //     if(currentRoundNumber < numberOfRounds){
        //         placeTarget();
        //         currentRoundNumber++;
        //     }else {
        //         console.log('GAME OVER!');
        //         gameArea.off('click');
        //     }
        //     scoreText.text("Score: " + playerScore);
        // });

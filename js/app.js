$(function(){

    var round = 1;
    var player = "X";
    var cpu = "O";
    var clickDOMid;
    var playerScore;
    var cpuScore;

    var wins = [7, 56, 448, 73, 146, 292, 273, 84];

    // Game code

    $('.cell').on('click', function(event){
        // Catch the user click and return div id
        var clickID = $(event.target.id);

        clickDOMid = $(event.target)
        console.log(clickID);
        console.log(clickDOMid);
        $(event.text)[0] = "sX";
        console.log(this.id);

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


});

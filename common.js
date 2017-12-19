$(function() {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var car = $('#car');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');
    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');
    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    //saving some initial setup
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    //some other declarations
    var game_over = false;

    var score_counter = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    /* ------------------------------GAME CODE STARTS HERE------------------------------------------- */


    $(document).on('keydown',function (e) {
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }
            if(key === 39 && move_right === false){
                move_right = requestAnimationFrame(right);
            }
        }
    });

    $(document).on('keyup',function (e) {
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }
            if(key = 39){
                cancelAnimationFrame(move_right);
                move_right = false
            }
        }
    })

    function left() {
        if(game_over === false && parseInt(car.css('left')) > 0 ){
            car.css('left',parseInt(car.css('left')) - 5);
            move_left = requestAnimationFrame(left)
        }
    }

    function right() {
        if(game_over === false && parseInt(car.css('left')) < container_width - car_width ){
            car.css('left',parseInt(car.css('left')) + 5);
            move_right = requestAnimationFrame(right);
        }
    }


    /* ------------------------------GAME CODE ENDS HERE------------------------------------------- */


    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



});
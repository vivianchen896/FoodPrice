var food = ["Apple", "Pear", "Grape", "Pizza", "Pudding",
            "Kimbap", "Noodle", "Burrito", "Soup", "Chips",
            "Candy", "Cake", "Bread", "Curry", "Orange"]
            //15 diff food
var price = [ 2.2, 3.3, 4.4, 5.5, 6.6,
              7.7, 8.8, 9.9, 10.1, 11.11,
              12.12, 13.13, 14.14, 15.15, 16.16]
drawGraph();
function drawGraph(){
    drawAxis();
    drawData();
}

function drawAxis(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var canvas = document.getElementById("myCanvas");
    var txt = canvas.getContext("2d");
    txt.font = "20px Arial";

    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(50,450);
    ctx.stroke();

    var inc = 400/10;
    var y_num_tick = 10;
    var x_num_tick = 15;
    var x = 45;
    var y = 450 - inc;
    //draws y axis increments
    for( i = 1; i < y_num_tick; i++){
        console.log(i);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 10, y);
        txt.fillText(i * 2, x - 30, y);
        y = y - inc;
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(50,450);
    ctx.lineTo(700,450)
    ctx.stroke();
    //draws x axis increments
    var x_inc = 800/15;
    var x_num_tick = 15;
    var x_x = 50 + x_inc;
    var x_y = 455;

txt.rotate(Math.PI*2);
    for( i = 0; i < x_num_tick; i++){
        console.log(i);
        ctx.beginPath();
        ctx.moveTo(x_x, x_y);
        ctx.lineTo(x_x, x_y - 10);
        txt.fillText(food[i], x_x-20,x_y + 10);
        x_x = x_x + inc;
        ctx.stroke();
    }
}

function drawData(){

}
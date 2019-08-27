// #SKETCHNAME Jumping balls
// Inspired by "Nature of code" by Daniel Shiffman

background('Field');
fill("white");

var gravity = 2.1;
var balls = createBalls(10);

function loop()
{
    clear();

    // displayBalls
    balls.map(ball => displayBall(ball));
    
    // updateBalls
    balls.map(ball => updateBall(ball));
}

function createBalls(n)
{
    var balls = [];

    var delta = width / (n + 1);

    for (var i = 0; i < n; i++)
    {
        var ball = { x : delta * (i + 1), y : 30, speed : 1 + random(1, 3)};
        balls.push(ball);
    }

    return balls;
}

function displayBall(ball)
{
    circle(ball.x, ball.y, 10);
}

function updateBall(ball)
{
    if ( ball.y > height )
    {
        ball.speed *= -1;
        ball.y = height;
    }

    ball.speed += gravity;
    ball.y += ball.speed;
}

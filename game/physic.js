function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
    controls.update();

    var x = player_ennemy.graphic.position.x + WIDTH / 2;

    if (x < 0)
        player_ennemy.turnLeft(Math.PI)
    if ( x > WIDTH )
        player_ennemy.turnLeft(Math.PI)

    player_ennemy.accelerate(moveDistance)
    player_ennemy.move();
}
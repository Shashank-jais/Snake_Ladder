let ply1 = [{ x: 10, y: 1 }];
let inputDir1 = { x: 10, y: 0 };

let ply2 = [{ x: 10, y: 1 }];
let inputDir2 = { x: 10, y: 0 };

function ladder(x, y) {
    if (x == 10 && y == 3) {
        x = 9;
        y = 1;
    } else if (x == 10 && y == 6) {
        x = 9;
        y = 7;
    } else if (x == 9 && y == 4) {
        x = 3;
        y = 7;
    }
    else if (x == 9 && y == 6) {
        x = 7;
        y = 7;
    }
    else if (x == 9 && y == 10) {
        x = 8;
        y = 8;
    }
    else if (x == 8 && y == 2) {
        x = 7;
        y = 4;
    } else if (x == 7 && y == 3) {
        x = 5;
        y = 2;
    } else if (x == 6 && y == 9) {
        x = 4;
        y = 7;
    } else if (x == 5 && y == 4) {
        x = 3;
        y = 5;
    } else if (x == 4 && y == 1) {
        x = 3;
        y = 3;
    } else if (x == 3 && y == 8) {
        x = 2;
        y = 6;
    } else if (x == 2 && y == 1) {
        x = 1;
        y = 3;
    }
    else if (x == 2 && y == 8) {
        x = 1;
        y = 10;
    }
    return [x, y];
}

function alertfunv2() {
    alert('you won');
    document.querySelectorAll(".board2 .head2").forEach((el) => el.remove());

}
function alertfunv1() {
    alert('you won');
    document.querySelectorAll(".board1 .head").forEach((el) => el.remove());

}

function rollTheDice1() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
    if (inputDir1.x >= 1 && inputDir1.y <= 10) {
        if (inputDir1.x == 1 && inputDir1.y + randomNumber1 >= 10) {
            if (inputDir1.y + randomNumber1 == 11) {
                alertfunv1();
            } else {
                return;
            }
        }
        if (inputDir1.y + randomNumber1 > 10) {
            inputDir1.y = inputDir1.y + randomNumber1 - 10;
            inputDir1.x -= 1;
        } else {
            inputDir1.y += randomNumber1;
        }

        // Update player position using the returned values from ladder function
        [inputDir1.x, inputDir1.y] = ladder(inputDir1.x, inputDir1.y);

        for (let i = ply1.length - 2; i >= 0; i--) {
            ply1[i + 1] = { ...ply1[i] };
        }

        ply1[0].x = Math.min(Math.max(1, inputDir1.x), 10); // Ensure x stays within 1 to 10
        ply1[0].y = Math.min(Math.max(1, inputDir1.y), 10); // Ensure y stays within 1 to 10

        console.log(ply1);
        updateBoard1(ply1, 'head');
    }
}

function rollTheDice2() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");
    if (inputDir2.x >= 1 && inputDir2.y <= 10) {
        if (inputDir2.x == 1 && inputDir2.y + randomNumber2 >= 10) {
            if (inputDir2.y + randomNumber2 == 11) {
                alertfunv2();
            } else {
                return;
            }
        }
        if (inputDir2.y + randomNumber2 > 10) {
            inputDir2.y = inputDir2.y + randomNumber2 - 10;
            inputDir2.x -= 1;
        } else {
            inputDir2.y += randomNumber2;
        }

        // Update player position using the returned values from ladder function
        [inputDir2.x, inputDir2.y] = ladder(inputDir2.x, inputDir2.y);

        for (let i = ply2.length - 2; i >= 0; i--) {
            ply2[i + 1] = { ...ply2[i] };
        }

        ply2[0].x = Math.min(Math.max(1, inputDir2.x), 10); // Ensure x stays within 1 to 10
        ply2[0].y = Math.min(Math.max(1, inputDir2.y), 10); // Ensure y stays within 1 to 10

        console.log(ply2);
        updateBoard2(ply2, 'head2');
    }
}

function updateBoard1(player, className) {
    let board1 = document.querySelector(".board1");
    // Remove the previous head
    document.querySelectorAll(".board1 .head").forEach((el) => el.remove());

    // Add the new head
    player.forEach((e, index) => {
        diceElement = document.createElement('div');
        diceElement.style.gridRowStart = e.x;
        diceElement.style.gridColumnStart = e.y;
        diceElement.classList.add(className);
        diceElement.classList.add('head');
        diceElement.style.transition = 'all 0.5s ease';

        board1.appendChild(diceElement);
    });
}

function updateBoard2(player, className) {
    let board2 = document.querySelector(".board2");
    // Remove the previous head
    document.querySelectorAll(".board2 .head2").forEach((el) => el.remove());

    // Add the new head
    player.forEach((e, index) => {
        diceElement = document.createElement('div');
        diceElement.style.gridRowStart = e.x;
        diceElement.style.gridColumnStart = e.y;
        diceElement.classList.add(className);
        diceElement.classList.add('head2');
        diceElement.style.transition = 'all 0.5s ease';

        board2.appendChild(diceElement);
    });
}

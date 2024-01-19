let ply1 = [{
    x: 10, y: 1
}];
let inputDir1 = { x: 10, y: 0 };




let ply2 = [{
    x: 10, y: 1
}];
let inputDir2 = { x: 10, y: 0 };











function alertfunv() {
    alert('you won');
}






 
function rollTheDice1() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
    if (inputDir1.x >= 1 && inputDir1.y <= 10) {
        if (inputDir1.x == 1 && inputDir1.y + randomNumber1 >= 10) {
            if (inputDir1.y + randomNumber1 == 11) {
                alertfunv();
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
                alertfunv();
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

        for (let i = ply2.length - 2; i >= 0; i--) {
            ply2[i + 1] = { ...ply2[i] };
        }

        ply2[0].x = Math.min(Math.max(1, inputDir2.x), 10); // Ensure x stays within 1 to 10
        ply2[0].y = Math.min(Math.max(1, inputDir2.y), 10); // Ensure y stays within 1 to 10

        console.log(ply2);
        updateBoard2(ply2, 'head2');
    }
}

let board1 = document.querySelector(".board1");
board1.innerHTML = "";
function updateBoard1(player, className) {
    player.forEach((e, index) => {
        diceElement = document.createElement('div')
        diceElement.style.gridRowStart = e.x;
        diceElement.style.gridColumnStart = e.y;
        diceElement.classList.add(className);

        board1.appendChild(diceElement);
    });
}

let board2 = document.querySelector(".board2");
board2.innerHTML = "";
function updateBoard2(player, className) {

    player.forEach((e, index) => {
        diceElement = document.createElement('div')
        diceElement.style.gridRowStart = e.x;
        diceElement.style.gridColumnStart = e.y;
        diceElement.classList.add(className);

        board2.appendChild(diceElement);
    });
}

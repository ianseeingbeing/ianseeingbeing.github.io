const numDice = document.getElementById("numDice");
const diceImages = document.getElementById("diceImages");
const rollBtn = document.getElementById("rollBtn");

const rollResults = document.getElementById("rollResults");
const statsDiv = document.getElementById("statsDiv");

rollBtn.onclick = function () {
    let diceRolls = [];
    let diceImgs = [];

    if (numDice.value > 10000) {
        numDice.value = 10000;
        numDice.textContent = 10000;
    }

    for (let i = 0; i < numDice.value; i++) {
        let diceImg = new Image(100, 100);
        diceImg.className = "dice";
        diceImg.id = `diceRoll${i}`;

        let diceRoll = Math.floor(Math.random() * 6 + 1);
        diceImg.src = `../../images/dice/Side${diceRoll}.svg`;

        diceRolls.push(diceRoll);
        diceImgs.push(diceImg);
    }

    setInfo(diceRolls);

    diceImages.replaceChildren(...diceImgs);
};

function setInfo(rolls) {
    let rollList = rolls[0];

    for (let i = 1; i < rolls.length; i++) {
        rollList += `, ${rolls[i]}`;
    }

    rollResults.textContent = rollList;

    rolls.sort(function (a, b) {
        return a - b;
    });

    statsDiv.children[0].textContent = `Sum: ${sumRolls(rolls)}`;
    statsDiv.children[1].textContent = `Mean: ${meanRolls(rolls)}`;
    statsDiv.children[2].textContent = `Median: ${medianRolls(rolls)}`;
    statsDiv.children[3].textContent = `Mode: ${modeRolls(rolls)}`;
}

function sumRolls(rolls) {
    let sum = 0;
    for (roll of rolls) {
        sum += roll;
    }
    return sum;
}

function meanRolls(rolls) {
    let mean = sumRolls(rolls) / rolls.length;

    mean = Math.floor(mean * 1000) / 1000;

    return mean;
}

function medianRolls(rolls) {
    let length = rolls.length;

    if (length % 2 === 0) {
        return (rolls[length / 2] + rolls[length / 2 - 1]) / 2;
    } else {
        return rolls[Math.floor(length / 2)];
    }
}

function modeRolls(rolls) {
    let mode = [];

    let modeDict = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    };

    for (roll of rolls) {
        modeDict[roll]++;
    }

    let modeCount = 0;

    for (let i = 1; i <= 6; i++) {
        if (modeCount < modeDict[i]) {
            modeCount = modeDict[i];
        }
    }

    for (let i = 1; i <= 6; i++) {
        if (modeDict[i] === modeCount) {
            mode.push(i);
        }
    }

    mode = mode.join(", ");

    return mode;
}

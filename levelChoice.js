
import { goGame } from "./game.js";
import { randomCards, cardRandomMass } from "./random.js";
import { allCardsMass } from "./cardsMass.js";
export let levelChoice = 0;
export function levelStr() {
    const levelEl = document.querySelector('body');
    const levelHtml = `
<div class="container center">
    <div class="container-text"><p>Выбери сложность</p></div>
    <div class="container-level-buttons">
        <div><button class=${levelChoice == 0 ? "buttons-button" : levelChoice == 3 ? "choice-button" : "buttons-button"} id="3">1</button></div>
        <div><button class=${levelChoice == 0 ? "buttons-button" : levelChoice == 6 ? "choice-button" : "buttons-button"} id="6">2</button></div>
        <div><button class=${levelChoice == 0 ? "buttons-button" : levelChoice == 9 ? "choice-button" : "buttons-button"} id="9">3</button></div>
    </div>
    <div class="container-start-button"><button class="start-button" id="start">Старт</button></div>
</div>`
    levelEl.innerHTML = levelHtml;

    choiceButton()
    startButton()

}

function choiceButton() {
    const choiceButtons = document.getElementsByClassName("buttons-button");
    for (const choiceButton of choiceButtons) {
        choiceButton.addEventListener("click", () => {

            levelChoice = choiceButton.id;

            levelStr()
        });


    }

}
function startButton() {
    document.getElementById("start").addEventListener('click', () => {
        if (levelChoice == 0) {
            alert("Выберете сложность")
            return
        }

        cardRandomMass.splice(0, 18)
        window.user.level = levelChoice;
        randomCards(levelChoice, allCardsMass)
        // gamePageLvl()
        cardRandomMass.push.apply(cardRandomMass, cardRandomMass);

        shuffle(cardRandomMass);
        goGame(cardRandomMass, levelChoice)
    })

}
const shuffle = (cardRandomMass) => {
    let m = cardRandomMass.length, t, i;

    while (m) {
        i = Math.floor(Math.random() * m--);
        t = cardRandomMass[m];
        cardRandomMass[m] = cardRandomMass[i];
        cardRandomMass[i] = t;
    }

    return cardRandomMass;
}


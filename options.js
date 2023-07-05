const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const cardValue = [{value: 6,}, {value: 7,}, {value: 8,}, {value: 9,}, {value: 10,}, {value: 11,}, {value: 12,}, {value: 13,}, {value: 14,}];
// const cardSuit = [Diamonds, Hearts, Clubs, Spades];

 export function randomCard(levelChoice) {
    if (cardRandomMass.length < levelChoice) {
        const random = Math.floor(Math.random() * cardValue.length);
        if (cardRandomMass.filter(card => card == cardValue[random]).length < 4) {
            cardRandomMass.push(cardValue[random])
            const check  = cardRandomMass.filter(card => card == cardValue[random])
            console.log(check);
            randomCard(levelChoice)
            // console.log('pizdec');
            // return cardRandomMass.splice(0, 18);
        } else {
            console.log('Было');
            randomCard(levelChoice);
        }


    }
    return
 }

export function randomChoice(levelChoice) {
if (numberChoiceMass.length < levelChoice) {

    const rand = Math.floor(Math.random() * number.length);

    if (numberChoiceMass.includes(number[rand])) {
        randomChoice(levelChoice);
    } else {
        numberChoiceMass.push(number[rand]);
        // console.log(numberChoiceMass);
        randomChoice(levelChoice);
    }
}
return

}
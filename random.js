export let cardRandomMass = []
export function randomCards(levelChoice, allCardsMass) {
  if (cardRandomMass.length < levelChoice) {
    let rand = Math.floor(Math.random() * allCardsMass.length);
    if (cardRandomMass.includes(allCardsMass[rand])) {
      randomCards(levelChoice, allCardsMass);
    } else {
      cardRandomMass.push(allCardsMass[rand]);
      randomCards(levelChoice, allCardsMass);
    };
  };
  return;
}

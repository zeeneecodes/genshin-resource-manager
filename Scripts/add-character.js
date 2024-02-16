const characterSelection = document.querySelector('.left-container');

// Get all character names and push into a new array
let
  charactersArr = [],
  characters = '';

characterDetails.forEach((character) => {
  charactersArr.push(character.name);
});

charactersArr.sort();

// add all character names to buttons

charactersArr.forEach((chars) => {
  characters += `
    <button class="char-btn">${chars}</button>
  `
});
document.querySelector('.left-container').innerHTML = characters;


// Event Listener will get the character name from clicked button and assign them to their respecitive <p> elements

const charButton = document.querySelectorAll('.char-btn');
let characterName = '';
    
charButton.forEach((name) => {
  name.addEventListener('click', () => {
    getName(name.innerHTML);
  });
});

function getName (assignedName) {
  let
    charElement = '',
    regionSpecialty = '',
    mobDrop = '',
    dailyBoss = '';

  for (let i = 0; i < characterDetails.length; i++) {
    if (characterDetails[i].name === assignedName) {
      charElement = characterDetails[i].vision;
      regionSpecialty = characterDetails[i].regionSpecialty;
      mobDrop = characterDetails[i].mobDrop;
      dailyBoss = characterDetails[i].dailyBoss;
    }
  }

  const mobDetails = easyEnemyDetails[mobDrop];
  let
    mobDrop1 = mobDetails[0],
    mobDrop2 = mobDetails[1],
    mobDrop3 = mobDetails[2];

  document.querySelector('.char-name').innerHTML = assignedName;
  document.querySelector('.char-element').innerHTML = charElement;
  document.querySelector('.char-region-specialty').innerHTML = regionSpecialty;
  document.querySelector('.char-daily-boss').innerHTML = dailyBoss;
  document.querySelector('.char-mobdrop-1').innerHTML = mobDrop1;
  document.querySelector('.char-mobdrop-2').innerHTML = mobDrop2;
  document.querySelector('.char-mobdrop-3').innerHTML = mobDrop3;
 
}
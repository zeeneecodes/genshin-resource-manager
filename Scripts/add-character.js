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
  let charElement = '';
  let regionSpecialty = '';
  let mobDrop = '';
  let dailyBoss = '';

  for (let i = 0; i < characterDetails.length; i++) {
    if (characterDetails[i].name === assignedName) {
      charElement = characterDetails[i].vision;
      regionSpecialty = characterDetails[i].regionSpecialty;
      mobDrop = characterDetails[i].mobDrop;
      dailyBoss = characterDetails[i].dailyBoss;
    }
  }
  document.querySelector('.right-container').innerHTML = 
  `
    <p class="character-details">Name: ${assignedName}</p>
    <p class="character-details">Vision: ${charElement}</p>
    <p class="character-details"> Region Specialty: ${regionSpecialty}</p>
    <p class="character-details">Daily Boss: ${dailyBoss}</p>
    <hr>
  `;
  const mobDetails = easyEnemyDetails[mobDrop];
  console.log(mobDetails);
 
}
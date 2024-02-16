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
    dailyBoss = '',
    rarity='';

  for (let i = 0; i < characterDetails.length; i++) {
    if (characterDetails[i].name === assignedName) {
      charElement = characterDetails[i].vision;
      regionSpecialty = characterDetails[i].regionSpecialty;
      mobDrop = characterDetails[i].mobDrop;
      dailyBoss = characterDetails[i].dailyBoss;
      rarity = characterDetails[i].rarity;
    }
  }

  const mobDetails = easyEnemyDetails[mobDrop];
  let
    mobDrop1 = mobDetails[0],
    mobDrop2 = mobDetails[1],
    mobDrop3 = mobDetails[2];

	if (charElement === 'Anemo') {
		assignElementStones('Vayuda Turqoise');
	} else if (charElement === 'Hydro') {
		assignElementStones('Varunada Lazurite');
	} else if (charElement === 'Cryo') {
		assignElementStones('Shivada Jade');
	} else if (charElement === 'Dendro') {
		assignElementStones('Nagadus Emerald');
	} else if (charElement === 'Geo') {
		assignElementStones('Prithiva Topaz');
	} else if (charElement === 'Electro') {
		assignElementStones('Vajrada Amethyst');
	} else if (charElement === 'Pyro') {
		assignElementStones('Agnidus Agate');
	}
  
  document.querySelector('.char-pic').src = `Images/Characters/${assignedName}.png`;
  document.querySelector('.char-rarity').src = `Images/Rarity/${rarity}.png`;
  document.querySelector('.char-bg').src = `Images/General/${rarity}.png`;
  document.querySelector('.char-element-img').src = `Images/Vision/${charElement}.svg`;

  document.querySelector('.char-name').innerHTML = assignedName;
  document.querySelector('.char-region-specialty').innerHTML = regionSpecialty;
  document.querySelector('.char-daily-boss').innerHTML = dailyBoss;
  document.querySelector('.char-mobdrop-1').innerHTML = mobDrop1;
  document.querySelector('.char-mobdrop-2').innerHTML = mobDrop2;
  document.querySelector('.char-mobdrop-3').innerHTML = mobDrop3;
}

function assignElementStones (stoneTitle) {
  document.querySelector('.char-stone-sliver').innerHTML = `${stoneTitle} Sliver`;
  //document.querySelector('.element-sliver-img').src = `Images/Stones/${stoneTitle} Sliver.png`;

  document.querySelector('.char-stone-fragment').innerHTML = `${stoneTitle} Fragment`;
  //document.querySelector('.element-fragment-img').src = `Images/Stones/${stoneTitle} Fragment.png`;

  document.querySelector('.char-stone-chunk').innerHTML = `${stoneTitle} Chunk`;
  //document.querySelector('.element-chunk-img').src = `Images/Stones/${stoneTitle} Chunk.png`;

  document.querySelector('.char-stone-gemstone').innerHTML = `${stoneTitle} Gemstone`;
  //document.querySelector('.element-gemstone-img').src = `Images/Stones/${stoneTitle} Gemstone.png`;
}
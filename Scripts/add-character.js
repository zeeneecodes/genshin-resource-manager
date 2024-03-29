const characterSelection = document.querySelector('.left-container');

// let the code list all the
// character names on each button

let
  charactersArr = [],
  characters = '';

characterDetails.forEach((character) => {
  charactersArr.push(character.name);
});

charactersArr.sort();

charactersArr.forEach((chars) => {
  characters += `
    <button class="char-btn">${chars}</button>
  `
});

document.querySelector('.left-container').innerHTML = characters;


// variable declarations

const charButton = document.querySelectorAll('.char-btn'),
  calculateButton = document.querySelector('.calculate');
let characterName = '',
  startValue = document.querySelector('.slider-start-level'),
  endValue = document.querySelector('.slider-end-level');

const herosWit = 20000;
let
  totalSliver = 0,
  totalFragment = 0,
  totalChunk = 0,
  totalGem = 0,
  totalDailyBoss = 0,
  totalRegionSpecialty = 0,
  totalmobDrop1 = 0,
  totalmobDrop2 = 0,
  totalmobDrop3 = 0,
  totalMora = 0;

const functionArr = [ascension1, ascension2, ascension3, ascension4, ascension5, ascension6];


// Range slider has to show the value
// because user can't see the backend

startValue.oninput = () => {
  document.querySelector('.txt-start-level').innerHTML = `From Level: ${startValue.value}`;
};

endValue.oninput = () => {
  document.querySelector('.txt-end-level').innerHTML = `To Level: ${endValue.value}`;
};

// user will now click on calculate
charButton.forEach((name) => {
  name.addEventListener('click', () => {
    showCharacter(name.innerHTML);
    calculateButton.addEventListener('click', () => {
      let startlvl = '';
      let endlvl = '';

      showMaterials(name.innerHTML);
      resetValues();
      startlvl = startValue.value;
      endlvl = endValue.value;
      computeMoraHerosWit(startlvl,endlvl);
      assignAscension(startlvl,endlvl);

      document.querySelector('.regionSpecialtyAmount').innerHTML = totalRegionSpecialty;
      document.querySelector('.dailyBossAmount').innerHTML = totalDailyBoss;
      document.querySelector('.mobDrop1Amount').innerHTML = totalmobDrop1;
      document.querySelector('.mobDrop2Amount').innerHTML = totalmobDrop2;
      document.querySelector('.mobDrop3Amount').innerHTML = totalmobDrop3;
      document.querySelector('.sliverStoneAmount').innerHTML = totalSliver;
      document.querySelector('.fragmentStoneAmount').innerHTML = totalFragment;
      document.querySelector('.chunkStoneAmount').innerHTML = totalFragment;
      document.querySelector('.gemStoneAmount').innerHTML = totalGem;
    })
    resetMaterialsHTML();
  });
});


// FUNCTIONS

function showCharacter(assignedName) {
  let
    charElement = '',
    rarity = '';

    for (let i = 0; i < characterDetails.length; i++) {
      if (characterDetails[i].name === assignedName) {
        charElement = characterDetails[i].vision;
        rarity = characterDetails[i].rarity;
      }
    }
    document.querySelector('.char-pic').src = `Images/Characters/${assignedName}.png`;
    document.querySelector('.char-rarity').src = `Images/Rarity/${rarity}.png`;
    document.querySelector('.char-bg').src = `Images/General/${rarity}.png`;
    document.querySelector('.char-element-img').src = `Images/Vision/${charElement}.svg`;
    document.querySelector('.char-name').innerHTML = assignedName;
}

function showMaterials(assignedName) {
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

  document.querySelector('.char-region-specialty').innerHTML = regionSpecialty;
  document.querySelector('.char-region-specialty-img').src = `Images/Region Specialty/${regionSpecialty}.png`;
  document.querySelector('.char-daily-boss').innerHTML = dailyBoss;
  document.querySelector('.char-daily-boss-img').src = `Images/Daily Boss/${dailyBoss}.png`;
  document.querySelector('.char-mobdrop-1').innerHTML = mobDrop1;
  document.querySelector('.char-mobdrop-1-img').src = `Images/Easy Enemies/${mobDrop1}.png`;
  document.querySelector('.char-mobdrop-2').innerHTML = mobDrop2;
  document.querySelector('.char-mobdrop-2-img').src = `Images/Easy Enemies/${mobDrop2}.png`;
  document.querySelector('.char-mobdrop-3').innerHTML = mobDrop3;
  document.querySelector('.char-mobdrop-3-img').src = `Images/Easy Enemies/${mobDrop3}.png`;
}

function assignElementStones(stoneTitle) {
  document.querySelector('.char-stone-sliver').innerHTML = `${stoneTitle} Sliver`;
  document.querySelector('.char-stone-sliver-img').src = `Images/Stones/${stoneTitle} Sliver.png`;
  document.querySelector('.char-stone-fragment').innerHTML = `${stoneTitle} Fragment`;
  document.querySelector('.char-stone-fragment-img').src = `Images/Stones/${stoneTitle} Fragment.png`;
  document.querySelector('.char-stone-chunk').innerHTML = `${stoneTitle} Chunk`;
  document.querySelector('.char-stone-chunk-img').src = `Images/Stones/${stoneTitle} Chunk.png`;
  document.querySelector('.char-stone-gemstone').innerHTML = `${stoneTitle} Gemstone`;
  document.querySelector('.char-stone-gemstone-img').src = `Images/Stones/${stoneTitle} Gemstone.png`;
}




function computeMoraHerosWit(start,end) {
  let
    levelToAdd = 0,
    startingLvl = start - 1,
    endlvl = end - 1;

  for (let i = startingLvl; i < endlvl; i++) {
    levelToAdd += charLevelArray[i];
  }

  const totalHerosWit = Math.round(levelToAdd/herosWit);
  totalMora += totalHerosWit * 4000;
  document.querySelector('.char-herosWit-img').src = `Images/General/Heros Wit.png`;
  document.querySelector('.char-herosWit').innerHTML = "Hero's Wit";
  document.querySelector('.herosWitAmount').innerHTML = totalHerosWit;
  document.querySelector('.char-mora-img').src = `Images/General/Mora.png`;
  document.querySelector('.char-mora').innerHTML = 'Mora';
  document.querySelector('.moraAmount').innerHTML = totalMora.toLocaleString();
  
  //assignAscension();
  calculateAscension(startAscension,endAscension);
}

function assignAscension(start,end){
  //function to assign the selected start level and selected end level to an ascension phase
  let ascensionStart;
  let ascensionEnd;
  for (let i = 1; i < 91; i++){
    if (i == start) {
      if (i >= 1 && i <= 20) {
        ascensionStart = 0;
      } else if (i >= 21 && i <= 40) {
        ascensionStart = 1;
      } else if (i >= 41 && i <= 50) {
        ascensionStart = 2;
      } else if (i >= 51 && i <= 60) {
        ascensionStart = 3;
      } else if (i >= 61 && i <= 70) {
        ascensionStart = 4;
      } else if (i >= 71 && i <= 80) {
        ascensionStart = 5;
      } else if (i >= 81 && i <= 90) {
        ascensionStart = 6;
      }
    }
  }

  for (let j = 1; j < 91; j++){
    if (j == end) {
      if (j >= 1 && j <= 20) {
        ascensionEnd = 0;
      } else if (j >= 21 && j <= 40) {
        ascensionEnd = 1;
      } else if (j >= 41 && j <= 50) {
        ascensionEnd = 2;
      } else if (j >= 51 && j <= 60) {
        ascensionEnd = 3;
      } else if (j >= 61 && j <= 70) {
        ascensionEnd = 4;
      } else if (j >= 71 && j <= 80) {
        ascensionEnd = 5;
      } else if (j >= 81 && j <= 90) {
        ascensionEnd = 6;
      }
    }
  }
  calculateAscension(ascensionStart,ascensionEnd);
}

function calculateAscension(ascensionStart,ascensionEnd){
  for (let x = ascensionStart; x < ascensionEnd; x++){
      functionArr[x]();
  }
}


function ascension1 () {
	let {ascension1:{stones,regionSpecialty,mobDrop,mora}} = characterAscenscionInfo;
		totalSliver += stones[0];
		totalRegionSpecialty += regionSpecialty;
		totalmobDrop1 += mobDrop[0];
		totalMora += mora;
}

function ascension2 () {
	let {ascension2:{stones,dailyBoss,regionSpecialty,mobDrop,mora}} = characterAscenscionInfo;

	totalFragment += stones[1];
	totalDailyBoss += dailyBoss;
	totalRegionSpecialty += regionSpecialty;
	totalmobDrop1 += mobDrop[0];
	totalMora += mora;
}

function ascension3 () {
	let {ascension3:{stones,dailyBoss,regionSpecialty,mobDrop,mora}} = characterAscenscionInfo;

	totalFragment += stones[1];
	totalDailyBoss += dailyBoss;
	totalRegionSpecialty += regionSpecialty;
	totalmobDrop2 += mobDrop[1];
	totalMora += mora;
}

function ascension4 () {
	let {ascension4:{stones,dailyBoss,regionSpecialty,mobDrop,mora}} = characterAscenscionInfo;
	
	totalChunk += stones[2];
	totalDailyBoss += dailyBoss;
	totalRegionSpecialty += regionSpecialty;
	totalmobDrop2 += mobDrop[1];
	totalMora += mora;
}

function ascension5() {
	let {ascension5:{stones,dailyBoss,regionSpecialty,mobDrop,mora}} = characterAscenscionInfo;
	
	totalChunk += stones[2];
	totalDailyBoss += dailyBoss;
	totalRegionSpecialty += regionSpecialty;
	totalmobDrop3 += mobDrop[2];
	totalMora += mora;
}

function ascension6() {
	let {ascension6:{stones,dailyBoss,regionSpecialty,mobDrop,mora}} = characterAscenscionInfo;
	
	totalGem += stones[3];
	totalDailyBoss += dailyBoss;
	totalRegionSpecialty += regionSpecialty;
	totalmobDrop3 += mobDrop[2];
	totalMora += mora;
}

// RESET EVERYTHING

function resetValues() {
  totalSliver = 0;
  totalFragment = 0;
  totalChunk = 0;
  totalGem = 0;
  totalDailyBoss = 0;
  totalRegionSpecialty = 0;
  totalmobDrop1 = 0;
  totalmobDrop2 = 0;
  totalmobDrop3 = 0;
  totalMora = 0;
  startAscension = 0;
  endAscension = 0;
}

function resetMaterialsHTML() {
  document.querySelector('.char-region-specialty').innerHTML = '';
  document.querySelector('.char-region-specialty-img').src = 'Images/General/blank.png';
  document.querySelector('.char-daily-boss').innerHTML = '';
  document.querySelector('.char-daily-boss-img').src = 'Images/General/blank.png';
  document.querySelector('.char-mobdrop-1').innerHTML = '';
  document.querySelector('.char-mobdrop-1-img').src = 'Images/General/blank.png';
  document.querySelector('.char-mobdrop-2').innerHTML = '';
  document.querySelector('.char-mobdrop-2-img').src = 'Images/General/blank.png';
  document.querySelector('.char-mobdrop-3').innerHTML = '';
  document.querySelector('.char-mobdrop-3-img').src = 'Images/General/blank.png';
  document.querySelector('.char-stone-sliver').innerHTML = '';
  document.querySelector('.char-stone-sliver-img').src = 'Images/General/blank.png';
  document.querySelector('.char-stone-fragment').innerHTML = '';
  document.querySelector('.char-stone-fragment-img').src = 'Images/General/blank.png';
  document.querySelector('.char-stone-chunk').innerHTML = '';
  document.querySelector('.char-stone-chunk-img').src = 'Images/General/blank.png';
  document.querySelector('.char-stone-gemstone').innerHTML = '';
  document.querySelector('.char-stone-gemstone-img').src = 'Images/General/blank.png';
  document.querySelector('.char-herosWit-img').src = 'Images/General/blank.png';
  document.querySelector('.char-herosWit').innerHTML = '';
  document.querySelector('.char-mora-img').src = 'Images/General/blank.png';
  document.querySelector('.char-mora').innerHTML = '';
  document.querySelector('.moraAmount').innerHTML = '';
  document.querySelector('.char-herosWit').innerHTML = '';
  document.querySelector('.herosWitAmount').innerHTML = '';
  document.querySelector('.regionSpecialtyAmount').innerHTML = '';
  document.querySelector('.dailyBossAmount').innerHTML = '';
  document.querySelector('.mobDrop1Amount').innerHTML = '';
  document.querySelector('.mobDrop2Amount').innerHTML = '';
  document.querySelector('.mobDrop3Amount').innerHTML ='';
  document.querySelector('.sliverStoneAmount').innerHTML = '';
  document.querySelector('.fragmentStoneAmount').innerHTML = '';
  document.querySelector('.chunkStoneAmount').innerHTML = '';
  document.querySelector('.gemStoneAmount').innerHTML = '';
}
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
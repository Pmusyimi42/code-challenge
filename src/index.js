// Your code here
fetch('http://localhost:3000/characters')
.then(res=> res.json())
.then(data => data.map(character => {
  const allCharacters = document.getElementById('character-bar');
  const spanText = document.createElement('span')
  spanText.innerText += character.name;
  const linky = document.createElement('a');
  linky.setAttribute('href', `http://localhost:3000/characters/${character.id}`)
  linky.appendChild(spanText);
  allCharacters.appendChild(linky);
  // console.log(allCharacters);
}))


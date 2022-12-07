let currentId = 0;
let existingVotes = 0;
fetch('http://localhost:3000/characters')
.then(res=> res.json())
.then(data=> data.map(displayCharacters));


const displayCharacters = (character)=>{
  const allCharacters = document.getElementById('character-bar');
  const span = document.createElement('span')
  span.innerText = character.name;
  span.setAttribute('id', character.id);
  span.addEventListener('click', (event)=>{
    // console.log(event.target.id)
    event.preventDefault();
    const characterName = document.getElementById('name');
    characterName.innerText = character.name;
    const imagy = document.getElementById('image');
    imagy.src = character.image;
    const votes = document.getElementById('vote-count');
    votes.innerText = character.votes;
    currentId = event.target.id
    existingVotes = character.votes
    // console.log(existingVotes)
  });
  allCharacters.appendChild(span);
};

const updateCharacterVotes = (id, votes, added) =>{
    fetch(`http://localhost:3000/characters/${id}`, {
      headers: {'Content-Type' : 'application/json'},
      method: 'PATCH',
      body: JSON.stringify({
      votes: (votes + added)
    })
    })
  
  
};
const form = document.getElementById('votes-form')
  // console.log(vf);
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let addedVotes = parseInt(event.target.votes.value)
    
    // console.log(addedVotes)
    // console.log(currentId);
    updateCharacterVotes(currentId, existingVotes, addedVotes)
    
  })


const resetVotes = (id) => {
  fetch(`http://localhost:3000/characters/${id}`, {
      headers: {'Content-Type' : 'application/json'},
      method: 'PATCH',
      body: JSON.stringify({
      votes: 0
    })
    })
  
};
const resetButton = document.getElementById('reset-btn')
resetButton.addEventListener('click', () =>{
  resetVotes(currentId)
})



document.getElementById('pokemonForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const number = document.getElementById('number').value;
    const category = document.getElementById('category').value;
    const container = document.getElementById('pokemonCards');
    container.innerHTML = '';

    for (let i = 1; i <= number; i++) {
        const pokemonId = Math.floor(Math.random() * 1000) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        const card = makeCard(data);
        container.appendChild(card);
    }

    function makeCard(data) {
        const card = document.createElement('div');
        card.classList.add('card-body');

        card.innerHTML = `
          <div class="card">
            <div class="card-header" id="coolCards">
              <img src="${data.sprites.front_default}" class="cardImage" alt="${data.name}">
            </div>
            <div class="card-body">
              <h5>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h5>
              <p>Type: ${data.types.map(type => type.type.name).join(', ')}</p>
              <p>Height: ${data.height}</p>
              <p>Weight: ${data.weight}</p>
            </div>
          </div>
        `;
        return card;
    }
});

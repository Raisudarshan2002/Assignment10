document.getElementById('fetchPeople').addEventListener('click', () => fetchData('people'));
document.getElementById('fetchPlanets').addEventListener('click', () => fetchData('planets'));

async function fetchData(category) {
    const response = await fetch(`https://swapi.dev/api/${category}/`);
    const data = await response.json();
    displayData(data.results, category);
}

function displayData(data, category) {
    let output = '';
    if (category === 'people') {
        output = data.map(person => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">Height: ${person.height}</p>
                    <p class="card-text">Mass: ${person.mass}</p>
                    <p class="card-text">Gender: ${person.gender}</p>
                </div>
            </div>
        `).join('');
    } else if (category === 'planets') {
        output = data.map(planet => `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${planet.name}</h5>
                    <p class="card-text">Climate: ${planet.climate}</p>
                    <p class="card-text">Terrain: ${planet.terrain}</p>
                    <p class="card-text">Population: ${planet.population}</p>
                </div>
            </div>
        `).join('');
    }

    document.getElementById('dataDisplay').innerHTML = output;
}

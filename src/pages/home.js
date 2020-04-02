import getData from '../utils/getData';

const HOME = async () => {
  const characters = await getData();

  const VIEW = `
    <div class="row characters">
      ${characters.results.map(character => `
        <article class="col-md-4">
          <a href="#/${character.id}/">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
              <div class="card-header">${character.name}</div>
              <div class="card-body">
                <img class="img-fluid" src="${character.image}" alt="${character.name}">
              </div>
            </div>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return VIEW
}

export default HOME
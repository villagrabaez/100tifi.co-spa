import getData from '../utils/getData';

const HOME = async () => {
  const characters = await getData();

  const VIEW = `
    <div class="characters">
      ${characters.results.map(character => `
      <article class="character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
      `).join('')}
    </div>
  `;
  return VIEW
}

export default HOME
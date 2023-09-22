import axios from 'axios';
import icons from '../img/icons.svg';

const categoriesBtn = document.querySelector('.js-all-categories-btn');
const cardsList = document.querySelector('.js-card-list');

categoriesBtn.addEventListener('click', onAllCategoryButtonClick);

loadAllCategories();

const defaults = {
  preview: '../img/no-image-icon.png',
  title: 'no title',
  description: 'no description',
  rating: 'xx',
};

export async function fetchSingleRecipe(id) {
  const response = await axios.get(
    `https://tasty-treats-backend.p.goit.global/api/recipes/${id}`
  );

  return response.data;
}

function allCategoriesMarkup(cards) {
  const markup = cards.results
    .map(({ preview, title, description, rating }) => {
      const ratedStars = calculationOfRatedStars(rating);
      const ratedStarsArray = Array.from(
        { length: ratedStars },
        () =>
          `<svg class="svg-star rated">
          <use href="../icons.svg#star"></use>
        </svg>`
      ).join('');

      const notRatedStarsArray = Array.from(
        { length: 5 - ratedStars },
        () =>
          `<svg class="svg-star">
          <use href="../icons.svg#star"></use>
        </svg>`
      ).join('');

      return `<li class="card-item">
          <svg class="card-svg-heart" width="22px" height="22px">
        <use href="../img/icons.svg#heart"></use>
      </svg>
      <div class="image-gradient">
      <img class="card-img" src="${preview || defaults.preview}" alt="${
        title || defaults.title
      }"/>
      </div>
      <div class="card-text">
      <h2 class="card-dish-name">${title || defaults.title}</h2>
      <p class="card-dish-descr">${description || defaults.description}</p>
      </div>
      <div class="rating-btn-container">
        
          <p class="rating-number">${rating}</p>
          <div class="rating-container">
          ${ratedStarsArray}${notRatedStarsArray}
        </div>
        <button type="button" class="recipe-btn">See recipe</button>
      </div>
    </li>`;
    })
    .join('');
  return markup;
}

function onAllCategoryButtonClick() {
  categoriesCardsSearch()
    .then(cards => {
      const markup = allCategoriesMarkup(cards);
      cardsList.innerHTML = markup;
    })
    .catch(() => {
      console.log('Error', error.message);
    });
}

async function loadAllCategories() {
  try {
    const cards = await categoriesCardsSearch();
    const markup = allCategoriesMarkup(cards);
    cardsList.innerHTML = markup;
  } catch (error) {
    console.log('Error', error.message);
  }
}

function calculationOfRatedStars(rating) {
  const ratedStars = Math.floor(rating / 2);
  return ratedStars;
}
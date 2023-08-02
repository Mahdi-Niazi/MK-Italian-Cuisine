import { fetchDataId } from './addScore.js';

const showModal = async (dataId) => {
  const mealData = await fetchDataId(dataId);
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
  document.querySelector('.meal-img').src = mealData[0].strMealThumb;
  document.querySelector('.menuName').textContent = mealData[0].strMeal;
  document.querySelector('.category').textContent = `Category: ${mealData[0].strCategory}`;
  document.querySelector('.area').textContent = `Area: ${mealData[0].strArea}`;
  document.querySelector('.tutorial').href = mealData[0].strYoutube;
  document.querySelector('.source').href = mealData[0].strSource;
};

export default showModal;
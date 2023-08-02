import { fetchDataId } from './addScore.js';
import {addComment, fetchComment} from './comment.js';

const showModal = async (dataId) => {
  const mealData = await fetchDataId(dataId);
  const commentCount = await fetchComment(dataId);
  console.log(commentCount);
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
  document.querySelector('.meal-img').src = mealData[0].strMealThumb;
  document.querySelector('.menuName').textContent = mealData[0].strMeal;
  document.querySelector('.category').textContent = `Category: ${mealData[0].strCategory}`;
  document.querySelector('.area').textContent = `Area: ${mealData[0].strArea}`;
  document.querySelector('.tutorial').href = mealData[0].strYoutube;
  document.querySelector('.source').href = mealData[0].strSource;
  
  const commentList = document.querySelector('.comments');
  commentList.innerHTML = '';
  if(commentCount === 'error'){
    document.querySelector('.comment-heading').textContent = 'No comments available';
  } else {
    commentCount.forEach(element => {
      document.querySelector('.comment-heading').textContent = `Comments (${commentCount.length})`;
      commentList.innerHTML += `
    <li><span class="name">${element.creation_date} ${element.username}: ${element.comment}</span></li>`
  });
  }
  
  const form = document.querySelector('.form');
  form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('.nameInput').value.trim();
  const commentInput = document.querySelector('#messageInput').value.trim();
  
  if(nameInput !== '' && commentInput !== '') {
    const newComment = {
      "item_id": dataId,
      "username": nameInput,
      "comment": commentInput
    };
    alert(newComment);
    await addComment(newComment);
    document.querySelector('#messageInput').value = '';
    document.querySelector('.nameInput').value = '';
  }
})
};

export default showModal;
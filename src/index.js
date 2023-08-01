import './style.css';
import { fetchData } from './module/addScore.js';
import mklogo from './assets/mklogoyellow.svg'

const menuList = document.querySelector('.lists');

const displayLists = async () => {
  const menu = await fetchData();
  console.log(menu)
  menuList.innerHTML = '';
  menu.forEach((data,index) => {
    if(index <= 18 && index > 9)
    menuList.innerHTML += `
        <li>
        <img src="${data.strMealThumb}" alt="${data.strMeal}">
        <div class="name-con">
            <span class="menu-name">${data.strMeal}</span>
            <div class="like-con">
                <i class="fa-light fa-heart"></i>
                <span class="likes">5 likes</span>
            </div>
        </div>
    </li>`;
  });
};

displayLists();



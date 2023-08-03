import "./style.css";
import { fetchData } from "./module/addScore.js";
import showModal from "./module/showModal.js";
import { fetchLikes, addLikes, updateLikes } from "./module/addLikes.js";

const menuList = document.querySelector(".lists");

const menuItem = document.getElementById("menu-count");

const displayLists = async () => {
  const menu = await fetchData();
  const likes = await fetchLikes();
  menuItem.textContent = ` (${menu.length})`;
  menuList.innerHTML = "";

  const combined = [];
  for (let i = 0; i < menu.length; i += 1) {
    const meal = menu[i];
    const likeObj = likes.find((like) => like.item_id === meal.idMeal);

    combined.push({
      strMealThumb: meal.strMealThumb,
      strMeal: meal.strMeal,
      idMeal: meal.idMeal,
      likes: likeObj ? likeObj.likes : 0,
    });
  }

  combined.forEach((data, index) => {
    if (index <= 18 && index > 9) {
      menuList.innerHTML += `

        <li dataId='${data.idMeal}'>

        <img src="${data.strMealThumb}" alt="${data.strMeal}">
        <div class="name-con">
            <span class="menu-name">${data.strMeal}</span>
            <div class="like-con">
              <i class="fa-regular fa-heart"></i>
              <span class="likes">${data.likes} likes</span>
            </div>
        </div>
        <div class="button-con">
        <button type="button" class="addComment">Comment</button>
        </div>
    </li>`;
    }

    const heartIcons = document.querySelectorAll(".fa-heart");

    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener("click", async (event) => {
        heartIcon.classList.replace("fa-regular", "fa-solid");
        const listItem = event.target.closest("li");
        const dataId = listItem.getAttribute("dataId");
        const likes = await updateLikes(dataId);
        const like = {
          likes: likes + 1,
          item_id: dataId,
        };
        addLikes(like);
        displayLists();
      });
    });

    const addCommentBtns = document.querySelectorAll(".addComment");
    addCommentBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        const listItem = event.target.closest("li");
        const dataId = listItem.getAttribute("dataId");
        showModal(dataId);
      });
    });
  });
};

displayLists();

const closeBtn = document.querySelector(".fa-xmark");
const modal = document.querySelector(".modal");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

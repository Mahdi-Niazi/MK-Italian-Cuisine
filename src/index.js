import "./style.css";
import { postLike, getLike } from "./module/involvementApi.js";
import { fetchData } from "./module/addScore.js";

const menuList = document.querySelector(".lists");

const display = async () => {
  const menu = await fetchData();
  const like = await getLike();
  menuList.innerHTML = "";
  menu.forEach((data, index) => {
    if (index <= 18 && index > 9) {
      const li = document.createElement("li");
      li.classList.add("dataId");
      li.className = data.idMeal;

      const img = document.createElement("img");
      img.src = data.strMealThumb;
      img.alt = data.strMeal;

      const divName = document.createElement("div");
      divName.classList.add("name-con");

      const menuSpan = document.createElement("span");
      menuSpan.classList.add("menu-name");
      menuSpan.textContent = data.strMeal;

      const divLike = document.createElement("div");
      divLike.classList.add("like-con");

      const i = document.createElement("i");
      i.classList.add("fa-regular");
      i.classList.add("fa-heart");

      i.addEventListener("click", () => {
        const dataId = li.className;
        postLike(dataId);
      });

      const likeSpan = document.createElement("span");
      likeSpan.setAttribute("id", "spanLikes");
      const dataId = li.className;
      like.forEach((like) => {
        if (dataId === like.item_id) {
          likeSpan.textContent = `${like.likes} likes`;
        }
      });

      const btnCon = document.createElement("div");
      btnCon.classList.add("button-con");

      const commentBtn = document.createElement("button");
      commentBtn.setAttribute("type", "button");
      commentBtn.classList.add("addComment");
      commentBtn.textContent = "Comment";

      const reservationBtn = document.createElement("button");
      reservationBtn.setAttribute("type", "button");
      reservationBtn.classList.add("addReservation");
      reservationBtn.textContent = "Reservation";

      menuList.appendChild(li);
      li.appendChild(img);
      li.appendChild(divName);
      divName.appendChild(menuSpan);
      divName.appendChild(divLike);
      divLike.appendChild(i);
      li.appendChild(btnCon);
      divLike.appendChild(likeSpan);
      btnCon.appendChild(commentBtn);
      btnCon.appendChild(reservationBtn);
    }
  });
};
display();

const closeBtn = document.querySelector(".fa-xmark");
const modal = document.querySelector(".modal");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

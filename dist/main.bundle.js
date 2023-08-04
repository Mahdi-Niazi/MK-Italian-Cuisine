/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_addScore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/addScore.js */ \"./src/module/addScore.js\");\n/* harmony import */ var _module_showModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/showModal.js */ \"./src/module/showModal.js\");\n/* harmony import */ var _module_addLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/addLikes.js */ \"./src/module/addLikes.js\");\n/* harmony import */ var _module_mealcounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/mealcounter.js */ \"./src/module/mealcounter.js\");\n\n\n\n\n\nconst menuList = document.querySelector(\".lists\");\nconst menuItem = document.getElementById(\"menu-count\");\nconst displayLists = async () => {\n  const menu = await (0,_module_addScore_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)();\n  const likes = await (0,_module_addLikes_js__WEBPACK_IMPORTED_MODULE_3__.fetchLikes)();\n  menuList.innerHTML = \"\";\n  const combined = [];\n  for (let i = 0; i < menu.length; i += 1) {\n    const meal = menu[i];\n    const likeObj = likes.find(like => like.item_id === meal.idMeal);\n    combined.push({\n      strMealThumb: meal.strMealThumb,\n      strMeal: meal.strMeal,\n      idMeal: meal.idMeal,\n      likes: likeObj ? likeObj.likes : 0\n    });\n  }\n  combined.forEach((data, index) => {\n    if (index <= 18 && index > 9) {\n      menuList.innerHTML += `\n\n        <li dataId='${data.idMeal}'>\n\n        <img src=\"${data.strMealThumb}\" alt=\"${data.strMeal}\">\n        <div class=\"name-con\">\n            <span class=\"menu-name\">${data.strMeal}</span>\n            <div class=\"like-con\">\n              <i class=\"fa-regular fa-heart\"></i>\n              <span class=\"likes\">${data.likes} likes</span>\n            </div>\n        </div>\n        <div class=\"button-con\">\n        <button type=\"button\" class=\"addComment\">Comment</button>\n        </div>\n    </li>`;\n    }\n    menuItem.textContent = `(${(0,_module_mealcounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()})`;\n    const heartIcons = document.querySelectorAll(\".fa-heart\");\n    heartIcons.forEach(heartIcon => {\n      heartIcon.addEventListener(\"click\", async event => {\n        heartIcon.classList.replace(\"fa-regular\", \"fa-solid\");\n        const listItem = event.target.closest(\"li\");\n        const dataId = listItem.getAttribute(\"dataId\");\n        const likes = await (0,_module_addLikes_js__WEBPACK_IMPORTED_MODULE_3__.updateLikes)(dataId);\n        const like = {\n          likes: likes + 1,\n          item_id: dataId\n        };\n        (0,_module_addLikes_js__WEBPACK_IMPORTED_MODULE_3__.addLikes)(like);\n        displayLists();\n      });\n    });\n    const addCommentBtns = document.querySelectorAll(\".addComment\");\n    addCommentBtns.forEach(button => {\n      button.addEventListener(\"click\", event => {\n        const listItem = event.target.closest(\"li\");\n        const dataId = listItem.getAttribute(\"dataId\");\n        (0,_module_showModal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataId);\n      });\n    });\n  });\n};\ndisplayLists();\nconst closeBtn = document.querySelector(\".fa-xmark\");\nconst modal = document.querySelector(\".modal\");\ncloseBtn.addEventListener(\"click\", () => {\n  modal.style.display = \"none\";\n});\n\n//# sourceURL=webpack://group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/module/addLikes.js":
/*!********************************!*\
  !*** ./src/module/addLikes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLikes: () => (/* binding */ addLikes),\n/* harmony export */   apiUrl: () => (/* binding */ apiUrl),\n/* harmony export */   appId: () => (/* binding */ appId),\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   updateLikes: () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst appId = 'hEgDPv2bsJBfvDJZuzrn';\nconst apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/`;\nconst addLikes = async like => {\n  const response = await fetch(`${apiUrl}likes/`, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: JSON.stringify(like)\n  });\n  const data = await response.text();\n  return data;\n};\nconst fetchLikes = async () => {\n  const response = await fetch(`${apiUrl}likes/`);\n  const data = await response.text();\n  const parsedata = JSON.parse(data);\n  return parsedata;\n};\nconst updateLikes = async mealId => {\n  const likeData = await fetchLikes();\n  const likes = likeData.find(like => like.item_id === mealId);\n  return likes.likes;\n};\n\n\n//# sourceURL=webpack://group-capstone/./src/module/addLikes.js?");

/***/ }),

/***/ "./src/module/addScore.js":
/*!********************************!*\
  !*** ./src/module/addScore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   fetchDataId: () => (/* binding */ fetchDataId)\n/* harmony export */ });\nconst apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=italian';\nconst apiwithID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\nconst fetchData = async () => {\n  const response = await fetch(apiUrl);\n  const data = await response.json();\n  return data.meals;\n};\nconst fetchDataId = async dataId => {\n  const response = await fetch(`${apiwithID}${dataId}`);\n  const data = await response.json();\n  return data.meals;\n};\n\n\n//# sourceURL=webpack://group-capstone/./src/module/addScore.js?");

/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addComment: () => (/* binding */ addComment),\n/* harmony export */   fetchComment: () => (/* binding */ fetchComment)\n/* harmony export */ });\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLikes.js */ \"./src/module/addLikes.js\");\n\nconst baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_addLikes_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`;\nconst addComment = async newComment => {\n  const response = await fetch(baseUrl, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: JSON.stringify(newComment)\n  });\n  const data = await response.text();\n  return data;\n};\nconst fetchComment = async itemId => {\n  const response = await fetch(`${baseUrl}?item_id=${itemId}`);\n  const data = await response.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://group-capstone/./src/module/comment.js?");

/***/ }),

/***/ "./src/module/commentCounter.js":
/*!**************************************!*\
  !*** ./src/module/commentCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\n  const count = document.querySelectorAll('.comments > li');\n  return count.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://group-capstone/./src/module/commentCounter.js?");

/***/ }),

/***/ "./src/module/mealcounter.js":
/*!***********************************!*\
  !*** ./src/module/mealcounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealCounter = () => {\n  const count = document.querySelectorAll('.lists > li');\n  return count.length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);\n\n//# sourceURL=webpack://group-capstone/./src/module/mealcounter.js?");

/***/ }),

/***/ "./src/module/showModal.js":
/*!*********************************!*\
  !*** ./src/module/showModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addScore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addScore.js */ \"./src/module/addScore.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ \"./src/module/comment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/module/commentCounter.js\");\n\n\n\nconst showModal = async dataId => {\n  const mealData = await (0,_addScore_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataId)(dataId);\n  const commentCount = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComment)(dataId);\n  const modal = document.querySelector('.modal');\n  modal.style.display = 'block';\n  document.querySelector('.meal-img').src = mealData[0].strMealThumb;\n  document.querySelector('.menuName').textContent = mealData[0].strMeal;\n  document.querySelector('.category').textContent = `Category: ${mealData[0].strCategory}`;\n  document.querySelector('.area').textContent = `Area: ${mealData[0].strArea}`;\n  document.querySelector('.tutorial').href = mealData[0].strYoutube;\n  document.querySelector('.source').href = mealData[0].strSource;\n  const commentList = document.querySelector('.comments');\n  commentList.innerHTML = '';\n  if (commentCount.error) {\n    document.querySelector('.comment-heading').textContent = 'No comments available';\n  } else {\n    commentCount.forEach(element => {\n      commentList.innerHTML += `\n          <li><span class=\"comment\">${element.creation_date} <b>${element.username}:</b> ${element.comment}</span></li>`;\n    });\n  }\n  document.querySelector('.comment-heading').innerHTML = `Comments (${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()})`;\n  const form = document.querySelector('.form');\n  form.addEventListener('submit', async event => {\n    event.preventDefault();\n    const nameInput = document.querySelector('.nameInput').value.trim();\n    const commentInput = document.querySelector('#messageInput').value.trim();\n    if (nameInput !== '' && commentInput !== '') {\n      const newComment = {\n        item_id: dataId,\n        username: nameInput,\n        comment: commentInput\n      };\n      await (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__.addComment)(newComment);\n      await (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__.fetchComment)(dataId);\n      form.reset();\n      showModal(dataId);\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);\n\n//# sourceURL=webpack://group-capstone/./src/module/showModal.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Suez+One&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n.logo img {\r\n  width: 40px;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n}\r\n\r\n.lists li {\r\n  width: 370px;\r\n  padding: 1.5em 1em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #f5f5f5;\r\n  border-radius: 10px;\r\n  box-shadow: 4px 5px 5px 0 rgba(44, 44, 44, 0.644);\r\n}\r\n\r\n.comments li {\r\n  display: flex;\r\n  gap: 1em;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  color: #f4ce15;\r\n}\r\n\r\n.menuDescription img {\r\n  border-radius: 20px;\r\n}\r\n\r\n.lists li img {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\nheader {\r\n  background-color: black;\r\n  color: white;\r\n  position: relative;\r\n}\r\n\r\n.heading h1 {\r\n  font-family: 'Suez One', serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.heading {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 40%;\r\n  color: white;\r\n  right: 10%;\r\n}\r\n\r\n.button {\r\n  font-size: 50%;\r\n  border-radius: 20px;\r\n}\r\n\r\nul.nav-menu {\r\n  display: flex;\r\n  gap: 1em;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1em 10%;\r\n  padding-bottom: 0;\r\n  border-bottom: 2px solid #f4ce15;\r\n}\r\n\r\n.buttondesc,\r\nbutton {\r\n  padding: 0.5em 0.75em;\r\n  box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.75);\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 1em;\r\n  border: none;\r\n  background-color: #f4ce15;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n  width: fit-content;\r\n}\r\n\r\n.buttondesc:hover,\r\nbutton:hover {\r\n  background-color: white;\r\n}\r\n\r\na.buttondesc {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.menu-name {\r\n  font-weight: 500;\r\n}\r\n\r\n.button-con {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n}\r\n\r\n.lists {\r\n  margin-top: 1em;\r\n  -moz-box-shadow: 11px 15px 18px -3px rgba(140, 135, 140, 0.8);\r\n  -webkit-box-shadow: 11px 15px 18px -3px rgba(140, 135, 140, 0.8);\r\n  -ms-box-shadow: 11px 15px 18px -3px rgba(140, 135, 140, 0.8);\r\n  box-shadow: 11px 15px 18px -3px rgba(140, 135, 140, 0.8);\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 2em 10%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.5em;\r\n}\r\n\r\n.list-name {\r\n  font-weight: bolder;\r\n}\r\n\r\n.name-con {\r\n  margin-top: 1.5em;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nfooter {\r\n  background-color: black;\r\n  color: white;\r\n  height: 4em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-footer {\r\n  width: 100%;\r\n  height: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: black;\r\n}\r\n\r\n.txt {\r\n  padding-top: 30px;\r\n  color: white;\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n  font-size: 1.25em;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 2em 3em;\r\n  background-color: rgba(0, 0, 0, 0.683);\r\n  backdrop-filter: blur(0.1rem);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  overflow: auto;\r\n  display: none;\r\n}\r\n\r\n.desc-con {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  column-gap: 4.5em;\r\n  row-gap: 1em;\r\n  margin-top: 1.5em;\r\n}\r\n\r\n.desc-con span {\r\n  font-size: 1.25em;\r\n  font-weight: 500;\r\n}\r\n\r\n.modal-container {\r\n  width: 100%;\r\n  padding: 2.5em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  background-color: white;\r\n  border-radius: 20px;\r\n}\r\n\r\n.fa-xmark {\r\n  position: absolute;\r\n  font-size: 2em;\r\n  font-weight: 700;\r\n  top: 0.25em;\r\n  right: 0.35em;\r\n  cursor: pointer;\r\n}\r\n\r\n.menuName {\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.ing-con {\r\n  margin-top: 1em;\r\n}\r\n\r\n.ingredients {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  list-style: disc;\r\n  margin-top: 0.75em;\r\n  gap: 1em;\r\n  font-style: italic;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  margin-top: 1.5em;\r\n}\r\n\r\n.comments {\r\n  list-style: none;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 1.5em;\r\n}\r\n\r\n.form h3 {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.nameInput {\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  padding: 15px 16px;\r\n  border: none;\r\n  border-bottom: 1px solid gray;\r\n  width: 70%;\r\n}\r\n\r\n#messageInput {\r\n  padding: 12px;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n  width: 70%;\r\n  height: 114px;\r\n  background-color: rgba(179, 177, 177, 0.418);\r\n  border: none;\r\n  margin-top: 1em;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n@media only screen and (min-width: 49em) {\r\n  .heading {\r\n    top: 30%;\r\n    right: 20%;\r\n  }\r\n\r\n  .heading h1 {\r\n    font-size: 6em;\r\n  }\r\n\r\n  .button {\r\n    font-size: 100%;\r\n  }\r\n\r\n  .desc-con {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .fa-xmark {\r\n    top: 1em;\r\n    right: 1em;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
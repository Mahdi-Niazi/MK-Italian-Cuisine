const itemsCounter = () => {
  const count = document.querySelectorAll("ul > li");
  return count.length;
};

itemsCounter();
export default itemsCounter;

const commentCounter = () => {
  const count = document.querySelectorAll('.comments > li');
  return count.length;
};

export default commentCounter;
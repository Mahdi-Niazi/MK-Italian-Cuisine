const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=italian';

const addScore = async (scoreList) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(scoreList),
  });
  const data = await response.json();
  return data.result;
};

const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data.meals)
  return data.meals;
};

export { addScore, fetchData };

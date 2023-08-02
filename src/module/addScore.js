const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=italian';
const apiwithID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

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
  return data.meals;
};

const fetchDataId = async (dataId) => {
  const response = await fetch(`${apiwithID}${dataId}`);
  const data = await response.json();
  return data.meals;
};

export { addScore, fetchData, fetchDataId };

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=italian';
const apiwithID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

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

export { fetchData, fetchDataId };

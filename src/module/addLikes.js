const appId = 'hEgDPv2bsJBfvDJZuzrn';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/`;

const addLikes = async (like) => {
  const response = await fetch(`${apiUrl}likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(like),
  });
  const data = await response.text();
  return data;
};

const fetchLikes = async () => {
  const response = await fetch(`${apiUrl}likes/`);
  const data = await response.text();
  const parsedata = JSON.parse(data);
  return parsedata;
};

const updateLikes = async (mealId) => {
  const likeData = await fetchLikes();
  const likes = likeData.find((like) => like.item_id === mealId);
  return likes.likes;
};

export {
  addLikes, fetchLikes, updateLikes, apiUrl, appId,
};
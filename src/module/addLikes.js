const appId = 'hEgDPv2bsJBfvDJZuzrn';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/`;

const addLikes = async (likes) => {
  const response = await fetch(`${apiUrl}likes/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(likes),
  });
  const data = await response.json();
  return data;
};

const fetchLikes = async () => {
  const response = await fetch(`${apiUrl}likes/`);
  const data = await response.json();
  return data;
};

const updateLikes = async () => {
  const likeData = await fetchLikes();
  likeData.forEach((element) => {
    const spanLike = document.querySelector('.likes');
    spanLike.textContent = `${element.likes} likes`;
  });
};

export { addLikes, fetchLikes, updateLikes };
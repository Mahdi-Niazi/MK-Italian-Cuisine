import { appId } from './addLikes.js';

const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const addComment = async (newComment) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newComment),
  });
  const data = await response.text();
  return data;
};

const fetchComment = async (itemId) => {
  const response = await fetch(`${baseUrl}?item_id=${itemId}`);
  const data = await response.json();
  return data;
};

export { addComment, fetchComment };
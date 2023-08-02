const appId = 'ftmaMrLY2kajz8K3atzT';
const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;
const fetchUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ftmaMrLY2kajz8K3atzT/comments?item_id='

const addComment = async (newComment) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newComment),
    });
    const data = await response.json();
    return data.result;
  };

const fetchComment = async (itemId) => {
  const response = await fetch(`${fetchUrl}${itemId}`);
  const data = await response.json();
  console.log(data);
  return data;
}

export {addComment, fetchComment};
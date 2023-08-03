const appId = 'hEgDPv2bsJBfvDJZuzrn';
const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/`;

const fetchLikes = async () => {
  const response = await fetch(`${apiUrl}likes/`);
  const data = await response.text();
  const parsedata = JSON.parse(data);
  return parsedata;
};

export { fetchLikes, apiUrl, appId };

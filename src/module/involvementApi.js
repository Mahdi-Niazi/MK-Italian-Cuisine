const envolveApi =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNLOredTOTNlzoY0wcrW/likes/";

// Like Api

const postLike = async (dataId) => {
  const like = await fetch(envolveApi, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      item_id: dataId,
    }),
  });
  return like.json();
};

const getLike = async () => {
  const like = await fetch(envolveApi).then((response) => response.json());
  return like;
};

// Comment Api

const envolveApiComments =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eNLOredTOTNlzoY0wcrW/comments/";

const postComment = async () => {
  const comments = await fetch(envolveApiComments, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      item_id: "item1",
      username: "Mahdi",
      comment: "very nice",
    }),
  });
  return comments.json();
};

const itemId = "item1";

const getComment = async () => {
  const comments = await fetch(`${envolveApiComments}?item_id =${itemId}`).then(
    (response) => response.json()
  );
  return comments;
};

export { getLike, postLike, getComment, postComment, envolveApi };

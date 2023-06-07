export const fetchAPI = (url) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong!');
      }
      return res.json();
    });
};

export const fetchAllData = () => {
  try {
    return Promise.all([
      fetchAPI('http://www.boredapi.com/api/activity/'),
    ]);
  } catch (err) {
    throw new Error(err.message);
  }
};
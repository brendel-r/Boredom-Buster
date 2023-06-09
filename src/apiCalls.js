export const fetchAPI = (url) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      return res.json();
    })
    .catch((error) => {
      throw new Error("Something went wrong!");
    });
};

export const fetchAllData = () => {
  return Promise.all([fetchAPI("http://www.boredapi.com/api/activity")])
    .then((responses) => {
      const [activityResponse] = responses;
      if (!activityResponse) {
        throw new Error("Something went wrong!");
      }
      return [activityResponse];
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};


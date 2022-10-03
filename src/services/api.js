const callToApi = () => {
  return fetch("")
    .then((response) => response.json())
    .then((response) => {
      const result = {};
      return result;
    });
};

export default callToApi;

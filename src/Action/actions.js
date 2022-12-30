export const receiveData = (data) => {
  return {
    type: "RECEIVEDATA",
    payload: data,
  };
};

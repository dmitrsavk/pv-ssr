const getUser = data => ({
  type: "user/getData",
  payload: data
});

const getUserDataSuccess = data => ({
  type: "user/getDataSuccess",
  payload: data
});

export { getUser, getUserDataSuccess };

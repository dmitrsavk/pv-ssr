const user = (user = { status: "initial", data: {} }, action) => {
  switch (action.type) {
    case "user/getData":
      return { ...user, status: "pending" };
    case "user/getDataSuccess":
      return { status: "success", data: action.payload };
    default:
      return user;
  }
};

export { user };

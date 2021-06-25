import api from "./api-config";

// login user function that takes in user's form data (username / password)
export const loginUser = async (loginData) => {
  // access backend login route for request
  // send form data under key of authentication
  // assign response to what backend sends
  const resp = await api.post("/auth/login", { authentication: loginData });
  // place token in local storage
  localStorage.setItem("authToken", resp.data.token);
  // place token in authorization header attached to same axios instance
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  // return user data
  return resp.data.user;
};

// register user function that takes in submitted sign up form data
export const registerUser = async (registerData) => {
  // access user controller for create method
  const resp = await api.post("/users/", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

// verify function for what user refreshes or accidentally closes page
export const verifyUser = async () => {
  // get token from local storage
  const token = localStorage.getItem("authToken");
  // conditional in case user doesn't have token
  if (token) {
    // set header with saved token
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    // make api call that hits verify method and authorize request on backend
    const resp = await api.get("/auth/verify");
    // when found, return data
    return resp.data;
  }
  // no token found  return null
  return null;
};

// function to help with log out
export const removeToken = () => {
  // remove token from headers
  api.defaults.headers.common.authorization = null;
};

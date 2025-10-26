// src/api/api.js
export const registerUser = async (userData) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find((u) => u.email === userData.email);
  if (exists) throw new Error("User already exists");
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  return { message: "Registered successfully" };
};

export const loginUser = async (credentials) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) =>
      u.email === credentials.email && u.password === credentials.password
  );
  if (!user) throw new Error("Invalid email or password");
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  return { message: "Login successful", user };
};

export const logoutUser = () => {
  localStorage.removeItem("loggedInUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("loggedInUser"));
};
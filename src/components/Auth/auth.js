// auth.js

export const isLoggedIn = () => {
  const token = localStorage.getItem('user'); // or 'user' or any key you use
  return !!token; // returns true if token exists
};

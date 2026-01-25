const deleteUserFromLocal = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");
};

export default deleteUserFromLocal;

import axios from "axios";

export const getAllUsers = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((_) => _.data as { id: string; name: string }[]);
};

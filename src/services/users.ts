import axios from "axios";

export const getAllUsers = async () => {
  const _ = await axios.get("https://jsonplaceholder.typicode.com/users");
  return _.data as { id: string; name: string }[];
};

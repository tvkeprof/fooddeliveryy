import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:9999/category");
    return response.data;
  } catch (err) {
    console.log("err while gettin categories", err);
  }
};
export const getFoods = async () => {
  try {
    const response = await axios.get("http://localhost:9999/food");
    return response.data;
  } catch (err) {
    console.log("err while getting foods", err);
  }
};

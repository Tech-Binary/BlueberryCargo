import axios from "axios";

const BASE_URL = "https://your-api-url.com";

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/contact`,
      formData
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
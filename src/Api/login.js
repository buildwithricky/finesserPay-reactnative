import axios from "axios";
import { baseUrl } from "./url";

export const loginUser = async (data) => {
  try {
    const userData = {
      email: data.email,
      password: data.password,
    };

    const config = {
      method: "post",
      url: `${baseUrl}/account/login`,
      headers: {
        "content-type": "application/json",
      },
      data: userData,
    };
    const response = await axios(config);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e.response);
    console.log("an error", e.response.data);
    return e.response;
  }
};

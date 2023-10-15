import axios from "axios";
import { message } from "antd";

export const baseUrl = process.env.REACT_APP_BASE_URL;

/**
 * Public APIs
 * **************************************************************
 * Makes a public POST and GET request to the API with the provided path and payload.
 * @param {string} path - The API endpoint to make the request to.
 * @param {object} payload - The data to send in the request body.
 * @returns {Promise} A Promise that resolves with the response data if the request is successful,
 * or rejects with an error if it fails.
 */
export const publicGetApi = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + path + "?" + new URLSearchParams(payload).toString())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        message.error(error.response.data.message, 6);
        reject(error);
      });
  });
};

export const publicPostApi = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + path, { ...payload })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        message.error(error.response.data.message, 6);
        reject(error);
      });
  });
};

/**
 * Private APIs
 * **************************************************************
 * Makes a private POST, GET, PUT and DELETE request to the API with the provided path and payload.
 * Checks if the user's access token is still valid before making the request.
 * If the token is invalid, displays an error message and returns.
 * @param {string} path - The API endpoint to make the request to.
 * @param {object} payload - The data to send in the request body.
 * @returns {Promise} A Promise that resolves with the response data if the request is successful,
 * or rejects with an error if it fails.
 */
export const privatePostApi = (path, payload) => {
  if (
    !localStorage.getItem("accessToken") ||
    !(JSON.parse(localStorage.getItem("expireAt")) > new Date().getTime())
  ) {
    message.error("Session expired, please login again", 6);
    return;
  }
  const accessToken = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    axios
      .post(
        baseUrl + path,
        { ...payload },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        message.error(error.response.data.message, 6);
        reject(error);
      });
  });
};

export const privateGetApi = (path, payload) => {
  if (
    !localStorage.getItem("accessToken") ||
    !(JSON.parse(localStorage.getItem("expireAt")) > new Date().getTime())
  ) {
    message.error("Session expired, please login again", 6);
    return;
  }
  const accessToken = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + path + "?" + new URLSearchParams(payload).toString(), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        message.error(error.response.data.message, 6);
        reject(error);
      });
  });
};

export const privatePutApi = (path, payload) => {
  if (
    !localStorage.getItem("accessToken") ||
    !(JSON.parse(localStorage.getItem("expireAt")) > new Date().getTime())
  ) {
    message.error("Session expired, please login again", 6);
    return;
  }
  const accessToken = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    axios
      .put(
        baseUrl + path,
        { ...payload },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        message.error(error.response.data.message, 6);
        reject(error);
      });
  });
};

export const privateDeleteApi = (path, payload) => {
  if (
    !localStorage.getItem("accessToken") ||
    !(JSON.parse(localStorage.getItem("expireAt")) > new Date().getTime())
  ) {
    message.error("Session expired, please login again", 6);
    return;
  }
  const accessToken = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    axios
      .delete(baseUrl + path, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        message.error(error.response.data.message, 6);
        reject(error);
      });
  });
};

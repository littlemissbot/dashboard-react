import { publicPostApi } from "../../utils/apiHelper";

/**
 * Auth Operations
 */
export const authLogin = (payload) => () => {
  return new Promise((resolve, reject) => {
    publicPostApi("/auth/login", payload)
      .then((response) => {
        if (response.status === 200) {
          const currentTime = new Date().getTime();
          const futureTime = 60000 * 60 * response.data.result.expireIn;
          localStorage.setItem("accessToken", response.data.result.accessToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.result.user)
          );
          localStorage.setItem(
            "expireAt",
            JSON.stringify(new Date(currentTime + futureTime).getTime())
          );
          resolve();
        } else {
          reject(response.message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const authRegister = (payload) => () => {
  return new Promise((resolve, reject) => {
    publicPostApi("/auth/register", payload)
      .then((response) => {
        if (response.status === 200) {
          resolve();
        } else {
          reject(response.message);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

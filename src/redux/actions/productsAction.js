import {
  privatePostApi,
  privateGetApi,
  privatePutApi,
  privateDeleteApi,
} from "../../utils/apiHelper";
import { products } from "../slices/productsSlice";

/**
 * Bulk Operations
 */
export const listProducts = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    privateGetApi("/products", payload)
      .then((response) => {
        if (response.status === 200) {
          dispatch(products(response.data.result));
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

/**
 * CRUD Operations
 */
export const createProduct = (payload) => () => {
  return new Promise((resolve, reject) => {
    privatePostApi("/products", payload)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.result);
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const readProduct = (payload, id) => () => {
  return new Promise((resolve, reject) => {
    privateGetApi("/products/" + id, payload)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.result);
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateProduct = (payload, id) => () => {
  return new Promise((resolve, reject) => {
    privatePutApi("/products/" + id, payload)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.result);
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteProduct = (id) => () => {
  return new Promise((resolve, reject) => {
    privateDeleteApi("/products/" + id)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data.result);
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

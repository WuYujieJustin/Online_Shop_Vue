import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts() {
    return apiClient.get("/products");
  },
  getProduct(title) {
    return apiClient.get("/products/" + title);
  },
  addProduct(product) {
    return apiClient.post("/products", product)
  }
};

import http from '../utils/http';

const API_KEY = 'YOUR API KEY';

// products apis
export const createNewProductApi = product =>
  http.post(`/products`, { ...product });

export const updateProductApi = product =>
  http.put(`/products`, { ...product });

export const getAllProductsApi = () => http.get(`/products`);

export const getProductByIdApi = id => http.get(`/products/get/${id}`);

export const deleteProductByIdApi = id => http.delete(`/products/delete/${id}`);

// categories apis

export const createNewCategoryApi = category =>
  http.post(`/categories`, { ...category });

export const updateCategoryApi = category =>
  http.put(`/categories`, { ...category });

export const getAllCategoriesApi = () => http.get(`/categories`);

export const getCategoryByIdApi = id => http.get(`/categories/get/${id}`);

export const deleteCategoryByIdApi = id =>
  http.delete(`/categories/delete/${id}`);

export const convertPrice = (source, destination, amount) =>
  http.get(
    `http://data.fixer.io/api/convert?access_key=${API_KEY}&from=${source}&to=${destination}&amount=${amount}`,
  );

export const getCurrencyRates = () =>
  http.get(
    `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=EUR&symbols=USD,MAD`,
  );

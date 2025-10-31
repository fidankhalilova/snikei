import axios from "axios";
import type {
  ProductsResponse,
  CategoriesResponse,
  Product,
} from "../Types/product";

const STRAPI_URL = "http://localhost:1337/";

const axiosInstance = axios.create({
  baseURL: STRAPI_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export class StrapiApi {
  async fetchProducts(params?: {
    filters?: any;
    sort?: string;
    pagination?: { page?: number; pageSize?: number };
    populate?: string;
  }): Promise<ProductsResponse> {
    const defaultParams = {
      populate: "*",
      "pagination[pageSize]": 100,
      sort: "createdAt:desc",
      ...params,
    };

    const response = await axiosInstance.get("/api/products", {
      params: defaultParams,
    });

    return response.data;
  }

  async fetchProductById(id: number | string): Promise<{ data: Product }> {
    const response = await axiosInstance.get(`/api/products/${id}`, {
      params: {
        populate: "*",
      },
    });
    return response.data;
  }

  async fetchCategories(): Promise<CategoriesResponse> {
    const response = await axiosInstance.get("/api/categories", {
      params: {
        populate: "*",
        sort: "name:asc",
        "pagination[pageSize]": 50,
      },
    });
    return response.data;
  }

  async fetchProductsByCategory(
    categoryName: string
  ): Promise<ProductsResponse> {
    const response = await axiosInstance.get("/api/products", {
      params: {
        populate: "*",
        "filters[categories][name][$eq]": categoryName,
        "pagination[pageSize]": 100,
        sort: "createdAt:desc",
      },
    });
    return response.data;
  }

  async fetchProductsWithFilters(filters: {
    colors?: string[];
    categories?: string[];
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }): Promise<ProductsResponse> {
    const params: any = {
      populate: "*",
      "pagination[pageSize]": 100,
      sort: "createdAt:desc",
    };

    if (filters.colors && filters.colors.length > 0) {
      params["filters[color][$in]"] = filters.colors;
    }

    if (filters.categories && filters.categories.length > 0) {
      params["filters[categories][name][$in]"] = filters.categories;
    }

    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      if (filters.minPrice !== undefined) {
        params["filters[originalPrice][$gte]"] = filters.minPrice;
      }
      if (filters.maxPrice !== undefined) {
        params["filters[originalPrice][$lte]"] = filters.maxPrice;
      }
    }

    if (filters.search) {
      params["filters[name][$containsi]"] = filters.search;
    }

    const response = await axiosInstance.get("/api/products", { params });
    return response.data;
  }
}

export const strapiApi = new StrapiApi();

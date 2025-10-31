export interface ProductImage {
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail: {
      url: string;
    };
    small: {
      url: string;
    };
  };
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountPrice?: number;
  image: ProductImage;
  categories: Category[];
  color?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductsResponse {
  data: Product[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface CategoriesResponse {
  data: Category[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

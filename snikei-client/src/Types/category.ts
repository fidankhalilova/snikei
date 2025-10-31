// types/category.ts
export interface CategoryImage {
  data: {
    attributes: {
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
    };
  };
}

export interface Category {
  id: number;
  attributes: {
    name: string;
    image: CategoryImage;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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

import { useState, useEffect } from "react";
import type { Category } from "../Types/category";
import { strapiApi } from "../api/http";

interface UseCategoriesReturn {
  categories: Category[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const normalizeCategory = (category: any): Category => {
  if (category.attributes) {
    return {
      id: category.id,
      attributes: {
        name: category.attributes.name,
        image: category.attributes.image,
        createdAt: category.attributes.createdAt,
        updatedAt: category.attributes.updatedAt,
        publishedAt: category.attributes.publishedAt,
      },
    };
  }

  return {
    id: category.id,
    attributes: {
      name: category.name,
      image: category.image,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
      publishedAt: category.publishedAt,
    },
  };
};

export const useCategories = (): UseCategoriesReturn => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response = await strapiApi.fetchCategories();

      console.log("🔍 Raw API response:", response);

      const normalizedCategories = response.data.map(normalizeCategory);
      setCategories(normalizedCategories);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch categories";
      setError(errorMessage);
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
};

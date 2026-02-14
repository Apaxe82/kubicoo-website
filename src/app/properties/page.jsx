// src/services/propertyService.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Create axios instance with defaults
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Search/List Properties
export const searchProperties = async (filters = {}) => {
  try {
    const params = new URLSearchParams();
    
    if (filters.search) params.append('search', filters.search);
    if (filters.category && filters.category !== 'all') params.append('category', filters.category);
    if (filters.transaction_type) params.append('transaction_type', filters.transaction_type);
    if (filters.municipality && filters.municipality !== 'all') params.append('municipality', filters.municipality);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.bedrooms && filters.bedrooms !== 'all') params.append('bedrooms', filters.bedrooms);
    if (filters.bathrooms && filters.bathrooms !== 'all') params.append('bathrooms', filters.bathrooms);
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.page) params.append('page', filters.page);
    if (filters.limit) params.append('limit', filters.limit);

    const response = await apiClient.get(`/properties/search?${params.toString()}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Property Details
export const getPropertyById = async (propertyId) => {
  try {
    const response = await apiClient.get(`/properties/${propertyId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create Property (Landlord only)
export const createProperty = async (propertyData) => {
  try {
    const response = await apiClient.post('/properties/create', propertyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update Property
export const updateProperty = async (propertyId, propertyData) => {
  try {
    const response = await apiClient.put(`/properties/${propertyId}`, propertyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete Property
export const deleteProperty = async (propertyId) => {
  try {
    const response = await apiClient.delete(`/properties/${propertyId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get My Properties (Landlord)
export const getMyProperties = async () => {
  try {
    const response = await apiClient.get('/properties/my-properties');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Toggle Property Availability
export const togglePropertyAvailability = async (propertyId, available) => {
  try {
    const response = await apiClient.patch(`/properties/${propertyId}/availability`, {
      available
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Upload Property Photos
export const uploadPropertyPhotos = async (propertyId, photos) => {
  try {
    const formData = new FormData();
    photos.forEach((photo, index) => {
      formData.append(`photo${index}`, photo);
    });

    const response = await apiClient.post(
      `/properties/${propertyId}/photos`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  searchProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getMyProperties,
  togglePropertyAvailability,
  uploadPropertyPhotos,
};

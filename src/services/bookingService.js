// ~/kubico/kubicoo-website/src/services/bookingService.js
// FRONTEND SERVICE - API Client for booking operations

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 15000, // 15 seconds for booking operations
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to all requests
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Error handler
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Booking API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/**
 * Get booking quote with landlord discounts applied
 * This calls backend which checks for property owner's discount rules
 */
export const getBookingQuote = async (propertyId, checkIn, checkOut) => {
  try {
    const response = await apiClient.post('/bookings/quote', {
      propertyId,
      startDate: checkIn,
      endDate: checkOut,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Create a new booking
 * Backend will validate availability and generate payment reference
 */
export const createBooking = async (bookingData) => {
  try {
    const response = await apiClient.post('/bookings/create', {
      property_id: bookingData.propertyId,
      check_in: bookingData.checkIn,
      check_out: bookingData.checkOut,
      guests: bookingData.guests,
      total_price: bookingData.totalPrice,
      nights: bookingData.nights,
    });
    
    return {
      success: response.data.success,
      bookingId: response.data.booking_id,
      paymentReference: response.data.payment_reference,
      entity: response.data.entity,
      amount: response.data.amount,
      expiresAt: response.data.expires_at,
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Get all bookings for current user
 */
export const getUserBookings = async (userId) => {
  try {
    const response = await apiClient.get(`/bookings/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get details of a specific booking
 */
export const getBookingById = async (bookingId) => {
  try {
    const response = await apiClient.get(`/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Cancel a booking
 * Requires at least 7 days before check-in
 */
export const cancelBooking = async (bookingId, reason) => {
  try {
    const response = await apiClient.post(`/bookings/${bookingId}/cancel`, {
      reason
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get all bookings for landlord
 * Shows bookings for all properties owned by landlord
 */
export const getLandlordBookings = async () => {
  try {
    const response = await apiClient.get('/bookings/landlord/all');
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Update booking status (Landlord only)
 * Allows landlord to confirm, cancel, or complete bookings
 */
export const updateBookingStatus = async (bookingId, status) => {
  try {
    const response = await apiClient.patch(`/bookings/${bookingId}/status`, {
      status // confirmed, cancelled, completed
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Calculate nights between dates
 * Helper function for frontend calculations
 */
export const calculateNights = (checkIn, checkOut) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return nights > 0 ? nights : 0;
};

/**
 * Format booking dates for display
 */
export const formatBookingDates = (checkIn, checkOut) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const start = new Date(checkIn).toLocaleDateString('pt-PT', options);
  const end = new Date(checkOut).toLocaleDateString('pt-PT', options);
  return { checkIn: start, checkOut: end };
};

/**
 * Check if booking can be cancelled
 * Returns true if at least 7 days before check-in
 */
export const canCancelBooking = (checkInDate) => {
  const daysUntilCheckIn = Math.ceil(
    (new Date(checkInDate) - new Date()) / (1000 * 60 * 60 * 24)
  );
  return daysUntilCheckIn >= 7;
};

export default {
  getBookingQuote,
  createBooking,
  getUserBookings,
  getBookingById,
  cancelBooking,
  getLandlordBookings,
  updateBookingStatus,
  calculateNights,
  formatBookingDates,
  canCancelBooking,
};

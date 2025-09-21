// API Configuration
// This file centralizes all API endpoint configurations

// Get environment variables with fallback values
const getEnvVar = (key, defaultValue) => {
  return process.env[key] || defaultValue;
};

// API Configuration Object
export const API_CONFIG = {
  // Product API
  PRODUCT: {
    BASE_URL: getEnvVar('REACT_APP_PRODUCT_API_URL', 'http://localhost:8080/product'),
    ENDPOINTS: {
      CREATE: '',
      GET: (id) => `/${id}`,
      UPDATE: (id) => `/${id}`,
      DELETE: (id) => `/${id}`,
      GET_ALL: '',
      GET_BY_PAGE: (page, pageSize, sortField, sortOrder) => 
        `?page=${page}&pageSize=${pageSize}&sortField=${sortField}&sortOrder=${sortOrder}`
    }
  },
  
  // User API
  USER: {
    BASE_URL: getEnvVar('REACT_APP_USER_API_URL', 'http://localhost:8082/users'),
    ENDPOINTS: {
      CREATE: '',
      GET: (id) => `/${id}`,
      UPDATE: (id) => `/${id}`,
      DELETE: (id) => `/${id}`,
      GET_ALL: '',
      GET_BY_PAGE: (page, size, sortField, sortOrder) => 
        `?page=${page}&size=${size}&sortField=${sortField}&sortOrder=${sortOrder}`
    }
  }
};

// Utility function to build full API URLs
export const buildApiUrl = (apiType, endpoint, ...params) => {
  const config = API_CONFIG[apiType];
  if (!config) {
    throw new Error(`Unknown API type: ${apiType}`);
  }
  
  const endpointTemplate = config.ENDPOINTS[endpoint];
  if (!endpointTemplate) {
    throw new Error(`Unknown endpoint: ${endpoint} for API type: ${apiType}`);
  }
  
  const endpointPath = typeof endpointTemplate === 'function' 
    ? endpointTemplate(...params) 
    : endpointTemplate;
    
  return `${config.BASE_URL}${endpointPath}`;
};

// Export individual URLs for backward compatibility
export const PRODUCT_API_URL = API_CONFIG.PRODUCT.BASE_URL;
export const USER_API_URL = API_CONFIG.USER.BASE_URL;
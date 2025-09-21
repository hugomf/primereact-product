// Simple test to verify environment configuration
import { API_CONFIG, buildApiUrl, PRODUCT_API_URL, USER_API_URL } from './apiConfig';

console.log('=== Environment Configuration Test ===');
console.log('Product API URL:', PRODUCT_API_URL);
console.log('User API URL:', USER_API_URL);
console.log('Full API_CONFIG:', API_CONFIG);

// Test building URLs
try {
  console.log('\n=== URL Building Tests ===');
  console.log('Product CREATE URL:', buildApiUrl('PRODUCT', 'CREATE'));
  console.log('Product GET URL (id: 123):', buildApiUrl('PRODUCT', 'GET', 123));
  console.log('Product GET_BY_PAGE URL:', buildApiUrl('PRODUCT', 'GET_BY_PAGE', 0, 10, 'name', 'asc'));
  console.log('User UPDATE URL (id: 456):', buildApiUrl('USER', 'UPDATE', 456));
  
  console.log('\n✅ Configuration test completed successfully!');
} catch (error) {
  console.error('❌ Configuration test failed:', error);
}

console.log('\n=== Environment Variables ===');
console.log('REACT_APP_PRODUCT_API_URL:', process.env.REACT_APP_PRODUCT_API_URL);
console.log('REACT_APP_USER_API_URL:', process.env.REACT_APP_USER_API_URL);
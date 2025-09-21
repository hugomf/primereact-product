import React, { useEffect, useState } from 'react';
import { API_CONFIG, buildApiUrl, PRODUCT_API_URL, USER_API_URL } from '../config/apiConfig';

const ConfigTest = () => {
  const [config, setConfig] = useState(null);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    // Test configuration
    const results = [];
    
    try {
      console.log('=== Environment Configuration Test ===');
      console.log('Product API URL:', PRODUCT_API_URL);
      console.log('User API URL:', USER_API_URL);
      
      results.push(`✅ Product API URL: ${PRODUCT_API_URL}`);
      results.push(`✅ User API URL: ${USER_API_URL}`);
      
      // Test building URLs
      console.log('\n=== URL Building Tests ===');
      const productCreateUrl = buildApiUrl('PRODUCT', 'CREATE');
      const productGetUrl = buildApiUrl('PRODUCT', 'GET', 123);
      const productPageUrl = buildApiUrl('PRODUCT', 'GET_BY_PAGE', 0, 10, 'name', 'asc');
      const userUpdateUrl = buildApiUrl('USER', 'UPDATE', 456);
      
      console.log('Product CREATE URL:', productCreateUrl);
      console.log('Product GET URL (id: 123):', productGetUrl);
      console.log('Product GET_BY_PAGE URL:', productPageUrl);
      console.log('User UPDATE URL (id: 456):', userUpdateUrl);
      
      results.push(`✅ Product CREATE URL: ${productCreateUrl}`);
      results.push(`✅ Product GET URL: ${productGetUrl}`);
      results.push(`✅ Product Page URL: ${productPageUrl}`);
      results.push(`✅ User UPDATE URL: ${userUpdateUrl}`);
      
      console.log('\n✅ Configuration test completed successfully!');
      results.push('✅ All configuration tests passed!');
      
    } catch (error) {
      console.error('❌ Configuration test failed:', error);
      results.push(`❌ Error: ${error.message}`);
    }
    
    console.log('\n=== Environment Variables ===');
    console.log('REACT_APP_PRODUCT_API_URL:', process.env.REACT_APP_PRODUCT_API_URL);
    console.log('REACT_APP_USER_API_URL:', process.env.REACT_APP_USER_API_URL);
    
    results.push(`REACT_APP_PRODUCT_API_URL: ${process.env.REACT_APP_PRODUCT_API_URL || 'not set'}`);
    results.push(`REACT_APP_USER_API_URL: ${process.env.REACT_APP_USER_API_URL || 'not set'}`);
    
    setConfig(API_CONFIG);
    setTestResults(results);
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', margin: '20px' }}>
      <h3>🧪 Environment Configuration Test</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Configuration Summary:</h4>
        <p><strong>Product API:</strong> {PRODUCT_API_URL}</p>
        <p><strong>User API:</strong> {USER_API_URL}</p>
      </div>
      
      <div>
        <h4>Test Results:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {testResults.map((result, index) => (
            <li key={index} style={{ 
              padding: '8px', 
              margin: '4px 0', 
              backgroundColor: result.includes('❌') ? '#ffebee' : '#e8f5e8',
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '12px'
            }}>
              {result}
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
        <p><strong>💡 Tip:</strong> You can change these URLs by modifying the .env file in your project root.</p>
        <p>Current .env values are loaded from: <code>.env</code></p>
      </div>
    </div>
  );
};

export default ConfigTest;
# Environment Configuration Guide

This guide explains how to manage backend API URLs using environment variables and configuration files in your React application.

## 🎯 Overview

Your application now supports environment-based configuration for backend API URLs. This allows you to:
- Easily switch between development, staging, and production environments
- Keep sensitive URLs out of your codebase
- Manage different configurations for different deployment environments

## 📁 Files Created/Modified

### 1. Environment File (`.env`)
- **Location**: Root directory (`/Users/hugo/Projects/react-projects/product-app/primereact-product/.env`)
- **Purpose**: Stores environment-specific API URLs
- **Security**: Added to `.gitignore` to prevent committing sensitive data

### 2. Configuration Utility (`src/config/apiConfig.js`)
- **Purpose**: Centralized configuration management
- **Features**: 
  - Environment variable fallback support
  - Type-safe URL building
  - Easy endpoint management

### 3. Updated Service Files
- **`src/service/ProductService.js`**: Now uses environment variables
- **`src/service/UserService.js`**: Now uses environment variables

### 4. Test Component (`src/components/ConfigTest.jsx`)
- **Purpose**: Visual testing and verification of configuration

## 🔧 How to Use

### Step 1: Configure Environment Variables

Edit the `.env` file in your project root:

```bash
# Backend API URLs
REACT_APP_PRODUCT_API_URL=http://localhost:8080/product
REACT_APP_USER_API_URL=http://localhost:8082/users

# For production (uncomment and modify)
# REACT_APP_PRODUCT_API_URL=https://api.yourdomain.com/product
# REACT_APP_USER_API_URL=https://api.yourdomain.com/users
```

**Important**: All React environment variables must start with `REACT_APP_`

### Step 2: Use in Your Services

The service files are already updated to use the configuration. Here's how it works:

```javascript
import { buildApiUrl } from "../config/apiConfig";

// Instead of hardcoded URLs:
// const baseUrl = "http://localhost:8080/product"

// Use the configuration utility:
const url = buildApiUrl('PRODUCT', 'GET', productId);
```

### Step 3: Available API Types and Endpoints

#### Product API (`PRODUCT`)
- `CREATE`: POST to base URL
- `GET`: GET `/{id}`
- `UPDATE`: PUT `/{id}`
- `DELETE`: DELETE `/{id}`
- `GET_ALL`: GET to base URL
- `GET_BY_PAGE`: GET with pagination parameters

#### User API (`USER`)
- Same endpoints as Product API but with different base URL

## 🚀 Environment-Specific Configurations

### Development Environment
```bash
# .env
REACT_APP_PRODUCT_API_URL=http://localhost:8080/product
REACT_APP_USER_API_URL=http://localhost:8082/users
```

### Production Environment
```bash
# .env.production
REACT_APP_PRODUCT_API_URL=https://api.yourdomain.com/product
REACT_APP_USER_API_URL=https://api.yourdomain.com/users
```

### Staging Environment
```bash
# .env.staging
REACT_APP_PRODUCT_API_URL=https://staging-api.yourdomain.com/product
REACT_APP_USER_API_URL=https://staging-api.yourdomain.com/users
```

## 🧪 Testing Your Configuration

### Option 1: Use the Test Component
Add the `ConfigTest` component to your app to visually verify the configuration:

```jsx
import ConfigTest from './components/ConfigTest';

function App() {
  return (
    <div className="App">
      <ConfigTest />
      {/* Your other components */}
    </div>
  );
}
```

### Option 2: Check Browser Console
The configuration utility logs important information to the browser console when the test component loads.

## 🔒 Security Best Practices

1. **Never commit `.env` files** to version control (already configured in `.gitignore`)
2. **Use different API keys/URLs** for different environments
3. **Validate environment variables** are present before deployment
4. **Use HTTPS URLs** in production environments

## 🛠️ Troubleshooting

### Common Issues

1. **Environment variables not loading**
   - Ensure variables start with `REACT_APP_`
   - Restart your development server after changing `.env`
   - Check that `.env` is in the project root

2. **URLs not working**
   - Verify the URLs in your `.env` file are correct
   - Check that backend services are running
   - Test URLs directly in browser or Postman

3. **Build errors**
   - Ensure all required environment variables are set
   - Check for typos in variable names
   - Verify the configuration utility is imported correctly

### Debug Information

The configuration system provides detailed logging. Check your browser console for:
- Loaded environment variables
- Built API URLs
- Any configuration errors

## 📋 Migration Checklist

If you're migrating from hardcoded URLs:

- [x] Create `.env` file with your API URLs
- [x] Update service files to use configuration
- [x] Test configuration with provided test component
- [x] Add `.env` to `.gitignore`
- [x] Set up environment variables for different deployment environments
- [x] Update deployment documentation

## 🎉 Benefits of This Approach

1. **Environment Flexibility**: Easy switching between dev/staging/prod
2. **Security**: Keep sensitive URLs out of codebase
3. **Maintainability**: Centralized configuration management
4. **Scalability**: Easy to add new APIs or endpoints
5. **Team Collaboration**: Different developers can use different local configurations

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify your `.env` file syntax
3. Ensure all required packages are installed
4. Restart your development server
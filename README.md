# PrimeReact Product Management System

![React v18](https://img.shields.io/badge/react-v18-blue?logo=react) ![Prime React](https://img.shields.io/badge/primereact-v8.7.3-blue) ![React Query](https://img.shields.io/badge/react--query-v3.39.2-green) ![React Hook Form](https://img.shields.io/badge/react--hook--form-v7.41.0-purple)

A comprehensive React application built with PrimeReact that provides dynamic data tables, form generation, and full CRUD operations for product and user management.

## ✨ Features

- **Dynamic Data Tables** - Fully functional tables with pagination, sorting, and lazy loading
- **Dynamic Form Generation** - Forms generated from JSON specifications with validation
- **CRUD Operations** - Create, Read, Update, Delete functionality for Products and Users
- **Responsive Design** - Built with PrimeFlex for responsive layouts
- **API Integration** - RESTful API integration with React Query for state management
- **Form Validation** - Comprehensive form validation using react-hook-form
- **Sidebar Navigation** - Custom sidebar with routing support
- **Image Handling** - Lazy loading images with react-lazy-load-image-component
- **Toast Notifications** - User feedback with PrimeReact Toast component

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd primereact-product
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
src/
├── components/
│   ├── dynaform/          # Dynamic form generation system
│   │   ├── DynamicForm.js     # Main form component
│   │   ├── DynamicForm.css    # Form styles
│   │   ├── FormSpec.js        # Form specification examples
│   │   └── inputMapping.js    # Input type mappings
│   ├── dynatable/         # Dynamic table components
│   │   ├── DynamicTable.js    # Reusable table component
│   │   └── PaginatorTemplate.js # Custom paginator
│   ├── navigation/        # Navigation components
│   │   ├── SideBarMenu.jsx    # Main sidebar
│   │   └── *.scss         # Sidebar styles
│   ├── product/           # Product management
│   │   ├── Product.js          # Product component
│   │   └── ProductFormSpec.js  # Product form specification
│   ├── user/              # User management
│   │   ├── User.js             # User component
│   │   └── UserFormSpec.js     # User form specification
│   └── examples/          # Example components
├── context/               # React context providers
├── hooks/                 # Custom React hooks
│   ├── useFetchData.js    # Data fetching hook
│   ├── useGetData.js      # Data retrieval hook
│   └── useTableCrud.js    # CRUD operations hook
├── service/               # API service layer
│   ├── ProductService.js  # Product API calls
│   ├── UserService.js     # User API calls
│   └── CountryService.js  # Country data service
├── utils/                 # Utility functions
└── App.jsx                # Main application component
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **PrimeReact** - UI component library
- **React Query** - Server state management
- **React Hook Form** - Form handling and validation
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **PrimeFlex** - CSS utility library
- **Sass** - CSS preprocessor
- **React Icons** - Icon library
- **Font Awesome** - Additional icons

## 🔧 Configuration

### API Configuration

The application expects a REST API running on `http://localhost:8080`. Update the base URLs in the service files:

- [`ProductService.js`](src/service/ProductService.js:4): `http://localhost:8080/product`
- [`UserService.js`](src/service/UserService.js:4): `http://localhost:8080/user`

### Form Configuration

Forms are configured using JSON specifications. Example from [`FormSpec.js`](src/components/dynaform/FormSpec.js:1):

```javascript
export const formSpec = {
  name: {
    label: 'Name*',
    type: 'text',
    required: 'Name is required.',
    defaultValue: ''
  },
  email: {
    label: 'Email',
    type: 'email',
    required: false,
    formatErrorMessage: 'Invalid email address.'
  }
  // ... more fields
};
```

### Supported Input Types

- `text` - Text input
- `email` - Email input with validation
- `password` - Password input with strength indicators
- `date` - Date picker
- `checkbox` - Checkbox input
- `select` - Dropdown selection
- `radio` - Radio button group
- `textarea` - Multi-line text input
- `rating` - Star rating input
- `button` - Form buttons

## 📋 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation.** Ejects from Create React App for full configuration control.

## 🎯 Usage Examples

### Creating a New Table Component

```javascript
import { useFetchData } from '../hooks/useFetchData';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function MyTable() {
  const { data, isLoading } = useFetchData(/* parameters */);
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <DataTable value={data.items} paginator rows={10}>
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
    </DataTable>
  );
}
```

### Custom Form Specification

```javascript
// In your component's form spec file
export const formSpec = {
  title: {
    label: 'Product Title*',
    type: 'text',
    required: 'Title is required.'
  },
  price: {
    label: 'Price*',
    type: 'text',
    required: 'Price is required.',
    pattern: {
      value: /^\d+(\.\d{1,2})?$/,
      message: 'Please enter a valid price.'
    }
  }
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [PrimeReact](https://primereact.org/) for the excellent UI component library
- [React Query](https://react-query.tanstack.com/) for server state management
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Create React App](https://create-react-app.dev/) for the project bootstrap

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the development team.

---

**Note**: This application requires a backend API running on port 8080. Make sure your API server is running before starting the development server.

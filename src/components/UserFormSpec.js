 export const formSpec = {
    userName: {
      label: 'UserName*',
      field: 'userName',
      type: 'text',
      required: 'User Name is required.',
      defaulValue: ''
    },
    password: {
      label: 'Password*',
      field: 'password',
      type: 'password',
      required: 'Password es requerido.',
      defaulValue: ''
    },
    firstName: {
      label: 'First Name',
      field: 'firstName',
      type: 'text',
      required: true
    },
    lastName: {
      label: 'Last Name',
      field: 'lastName',
      type: 'text',
      required: false
    },
    email: {
      label: 'E-Mail',
      field: 'email',
      type: 'email',
      required: false,
      formatErrorMessage: 'Invalid email address. E.g. example@email.com'
    },
    country: {
      label: 'Country*',
      type: 'select',
      required: 'Country is required.',
      options: [
        { value: 'USA', label: 'USA' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Mexico', label: 'Mexico' }
      ]
    },
    phone: {
      label: 'Phone',
      field: 'phone',
      type: 'text',
      required: false
    },
    save: {
      label: 'Save*',
      field: 'save',
      type: 'hidden',
      required: false,
      defaulValue: 'add'
    },
  };
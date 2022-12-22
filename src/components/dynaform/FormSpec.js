 export const formSpec = {
    name: {
      label: 'Name*',
      type: 'text',
      required: 'Name is required.',
      defaulValue: ''
    },
    email: {
      label: 'Email',
      type: 'email',
      required: false,
      formatErrorMessage: 'Invalid email address. E.g. example@email.com'
    },
    password: {
      label: 'Password*',
      type: 'password',
      required: 'Password is required.',
    },
    remember: {
      label: 'Remember me',
      type: 'checkbox'
    },
    birthday: {
      label: 'Birthday*',
      type: 'date',
      dateFormat: 'dd/mm/yy',
      dateMask: '99/99/9999',
      required: 'Birthday is required.'
    },
    planet: {
      label: 'Planet',
      type: 'radio',
      //className: 'field-radiobutton',
      options: [
        { value: 'earth', label: 'Earth' },
        { value: 'mars', label: 'Mars' },
        { value: 'other', label: 'Other' }
      ]
    },
    country: {
      label: 'Country*',
      type: 'select',
      required: 'Country is required.',
      options: [
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'mexico', label: 'Mexico' }
      ]
    },
    message: {
      label: 'Message*',
      type: 'textarea',
      required: 'Message is required.'
    },
    submit: {
      label: 'Submit',
      type: 'button'
    }
  };
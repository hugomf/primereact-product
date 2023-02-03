 export const formSpec = {
    title: {
      label: 'Title*',
      field: 'title',
      type: 'text',
      required: 'Title is required.',
      defaulValue: ''
    },
    description: {
      label: 'Description*',
      field: 'description',
      type: 'text',
      required: true,
      defaulValue: 'Description es requerido.'
    },
    sku: {
      label: 'SKU',
      field: 'sku',
      type: 'text',
      required: false
    },
    price: {
      label: 'Price',
      field: 'price.basePrice',
      type: 'text',
      required: false
    },
    imagePath: {
      label: 'ImageURL',
      field: 'imagePath',
      type: 'text',
      required: false,
    },
    rating: {
      label: 'Reviews',
      field: 'rating',
      type: 'rating',
      required: 'Rating is required.',
      defaulValue: '0'
    },
    save: {
      label: 'Save*',
      field: 'save',
      type: 'hidden',
      required: false,
      defaulValue: 'add'
    },
  };
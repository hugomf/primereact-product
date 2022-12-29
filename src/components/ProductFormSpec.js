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
      type: 'textarea',
      required: 'Description is required.',
      defaulValue: ''
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
  };
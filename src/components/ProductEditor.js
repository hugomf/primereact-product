import { DynamicTable } from './dynatable/DynamicTable';
import { Button } from 'primereact/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductEditor = () => {


  const imageTemplate = ({ rowData }) => (
    <div>
      <LazyLoadImage
        src={rowData.imagePath} // use normal <img> attributes as props
        width={20} />
      <span>{image.caption}</span>
    </div>
  );

    const columns = [
        { field: "id", header: "ID", sortable: true },
        { field: "title", header: "title", sortable: true },
        { field: "sku", header: "sku", sortable: true },
        { body: {imageTemplate}, header: "image"}
      ];

       const headerTemplate = (
        <div>
            <Button 
              className="mr-2"
              icon="pi pi-plus"
              label="Add Product"
            />
        </div>
    );
    
     const actionsTemplate = (
    
        <div>
            <Button 
              className="p-button-rounded mr-2"
              icon="pi pi-pencil"
            />
            <Button 
              className="p-button-rounded p-button-danger mr-2"
              icon="pi pi-trash"
            />
        </div>
    
      );

  return (
    <div>
      <DynamicTable 
            baseUrl="http://localhost:8080/product"
            columns={columns}
            sortField="id"
            sortOrder="1"
            pageSize="10"
            headerTemplate={headerTemplate}
            actionsTemplate={actionsTemplate}
      />
    </div>
  );
};

export { ProductEditor };

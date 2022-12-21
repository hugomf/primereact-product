import { Dropdown } from 'primereact/dropdown';
import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';
import { Button } from "primereact/button";

export const paginatorTemplate = {
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    'PrevPageLink': (options) => {
        return (
            <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                <span className="p-3">Previous</span>
                <Ripple />
            </button>
        )
    },
    'NextPageLink': (options) => {
        return (
            <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                <span className="p-3">Next</span>
                <Ripple />
            </button>
        )
    },
    'PageLinks': (options) => {
        if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
            const className = classNames(options.className, { 'p-disabled': true });

            return <span className={className} style={{ userSelect: 'none' }}>...</span>;
        }

        return (
            <button type="button" className={options.className} onClick={options.onClick}>
                {options.page + 1}
                <Ripple />
            </button>
        )
    },
    'RowsPerPageDropdown': (options) => {
        const dropdownOptions = [
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 },
            { label: 'All', value: options.totalRecords }
        ];

        return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
    },
    'CurrentPageReport': (options) => {
      return (
          <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
              {options.first} - {options.last} of {options.totalRecords}
          </span>
      )
  }
};


export const headerTemplate = (
    <div>
        <Button 
          className="mr-2"
          icon="pi pi-plus"
          label="Add Product"
        />
    </div>
);

export const actionsTemplate = (

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
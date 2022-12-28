import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function UpdateItemDialog({saveItem, children, show, hideDialog, header}){

    const footer = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
        </>
    );

    return (
        <Dialog visible={show} style={{ width: '450px' }} header={header} modal className="p-fluid" footer={footer} onHide={hideDialog}>
                {children}
        </Dialog>
    )
}
import { useRef, useState } from "react";

export default function useTableCrud({defaultItem, itemName}){

    let emptyItem = {...defaultItem};

    const [isUpdateItemDialogShown, setUpdateItemDialogVisibility] = useState(false);
    const [isDeleteItemDialogShown, setDeleteItemDialogVisibility] = useState(false);
    const [item, setItem] = useState(emptyItem);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);

    const openAddItemDialog = () => {
        setItem(emptyItem);
        setSubmitted(false);
        setUpdateItemDialogVisibility(true);
    }

    const hideUpdateItemDialog = () => {
        setSubmitted(false);
        setUpdateItemDialogVisibility(false);
    }

    const hideDeleteItemDialog = () => {
        setDeleteItemDialogVisibility(false);
    }

    const saveItem = ({addItem, updateItem, mandatoryFields = []}) => {
        setSubmitted(true);
        let _item = {...item};
        const isAllMandatoryFieldsAdded = mandatoryFields.every(field => typeof _item[field] === 'string' ? _item[field].trim() : _item[field])
        if(isAllMandatoryFieldsAdded){
            if (item._id) {
                updateItem(_item);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: `${itemName} Updated`, life: 3000 });
            }
            else {
                addItem(_item);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: `${itemName} Created`, life: 3000 });
            }
            setSubmitted(false);
            setUpdateItemDialogVisibility(false);
            setItem(emptyItem);
        }
       
    }

    const openUpdateItemDialog = (item) => {
        setItem({...item});
        setUpdateItemDialogVisibility(true);
    }

    const openDeleteItemDialog = (item) => {
        setItem(item);
        setDeleteItemDialogVisibility(true);
    }

    const deleteItem = (deleteItemCb) => {
        deleteItemCb(item);
        setDeleteItemDialogVisibility(false);
        setItem(emptyItem);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: `${itemName} Deleted`, life: 3000 });
    }

    const updateItem = (key, value) => {
        let _item = {...item};
        _item[`${key}`] = value;
        setItem(_item);
    }

    return {
        item, 
        action: {
            saveItem,
            deleteItem,
            updateItem,
            setItem
        },
        toast, 
        submitted, 
        dialog: {
            isUpdateItemDialogShown, 
            isDeleteItemDialogShown, 
            openAddItemDialog, 
            openUpdateItemDialog,
            hideUpdateItemDialog, 
            hideDeleteItemDialog , 
            openDeleteItemDialog,
        },
    }

}
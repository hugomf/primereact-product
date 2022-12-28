import React, { useState, useEffect } from 'react';
import { inputMapping } from './inputMapping';
import { useForm } from 'react-hook-form';
import { Dialog } from 'primereact/dialog';
import './DynamicForm.css';
import { Button } from 'primereact/button';

const DynamicForm = (props) => {

  // const defaultValues = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   remember: true,
  //   message:'',
  //   planet: 'earth',
  //   country: null
  // }

  const [showMessage, setShowMessage] = useState(false);
  const { control, formState: { errors }, handleSubmit, reset, register } = useForm(props.formValues);
  const [formData, setFormData] = useState({});

  const dialogFooter = <div className="flex justify-content-center">
      <Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
   
  // effect runs when user state is updated
  useEffect(() => {
    // reset form with user data
    reset(props.formValues);
  }, [reset, props.formValues]);

  const onSubmit = data => {
    setFormData(data);
    setShowMessage(true);
    alert(JSON.stringify(data))
    console.log(formData);
    reset();
  }

  return (
    <div className="form-demo">
       <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} 
        showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
          <div className="flex justify-content-center flex-column pt-6 px-3">
              <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
              <h5>Registration Successful!</h5>
              <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                  Your account is registered under name <b>{formData.name}</b> ; 
                  it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> 
                  for activation instructions.
              </p>
          </div>
        </Dialog>
    <div className="flex justify-content-center">
      <div className="card">
        <h5 className="text-center">Dyna Form</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            { Object.keys(props.formSpec).map(key => {
                const field = props.formSpec[key];
                const input = inputMapping[field.type]
                  ? inputMapping[field.type](key, field, errors, control, register)
                  : inputMapping['text'](key, field, errors, control, register);
                  console.log("Key", key);
                return (
                  <div key={key}>
                    {input}
                  </div>
                );
              })
            }
          </form>
      </div>
    </div>
    </div>
  );
}

export {DynamicForm};

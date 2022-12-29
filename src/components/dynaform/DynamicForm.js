import React, { useEffect } from 'react';
import { inputMapping } from './inputMapping';
import { useForm } from 'react-hook-form';
import './DynamicForm.css';

export default React.forwardRef((props,ref) => {

  // const defaultValues = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   remember: true,
  //   message:'',
  //   planet: 'earth',
  //   country: null
  // }

 // const [formData, setFormData] = useState(props.formValues);
  const { control, formState: { errors }, handleSubmit, reset, register } = useForm(props.formValues);
  
  //const [formData, setFormData] = useState({});

  // effect runs when user state is updated
  useEffect(() => {
    // reset form with user data
    reset(props.formValues);
  
  }, [reset, props.formValues]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.onSubmit(data, e);
  }


  return (
      <div className="flex justify-content-center">
        <form ref={ref} onSubmit={handleSubmit(onSubmit)} className="p-fluid">
          { Object.keys(props.formSpec).map(key => {
              const field = props.formSpec[key];
              const input = inputMapping[field.type]
                ? inputMapping[field.type](key, field, errors, control, register)
                : inputMapping['text'](key, field, errors, control, register);
              return (
                <div key={key}>
                  {input}
                </div>
              );
            })
          }
        </form>
      </div>
  );

});

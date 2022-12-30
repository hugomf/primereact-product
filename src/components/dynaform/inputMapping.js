import { InputText } from 'primereact/inputtext';
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';

import { Divider } from 'primereact/divider';
import React from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';

import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';

const passwordHeader = <h6>Pick a password</h6>;
const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
);

const getFormErrorMessage = (name, errors) => {
  return errors[name] && <small className="p-error">{errors[name].message}</small>
};

export const inputMapping = {

  text: (key, fieldSpec, errors, control) => (
    <div className="field">
      <span className="p-float-label">
        <Controller
          name={fieldSpec.field}
          control={control}
          rules={{ required: fieldSpec.required }}
          render={({ field, fieldState }) => (
            <InputText id={field.name} {...field} 
              className={classNames({ 'p-invalid': fieldState.error })} />
        )} />
        <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
      </span>
      {getFormErrorMessage(key, errors)}
    </div>
  ),

  email: (key, fieldSpec, errors, control) => (
    <div className="field">
    <span className="p-float-label p-input-icon-right">
        <i className="pi pi-envelope" />
        <Controller
          name={key}
          control={control}
          rules={{ required: fieldSpec.required, 
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: fieldSpec.formatErrorMessage }}}
          render={({ field, fieldState }) => (
            <InputText id={field.name} {...field} 
              className={classNames({ 'p-invalid': fieldState.error })} />
            )} />
          <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
      </span>
      {getFormErrorMessage(key, errors)}
    </div>
  ),

  date: (key, fieldSpec, errors, control) => (
    <div className="field">
    <span className="p-float-label">
        <Controller 
           name={key} 
          control={control}
          rules={{ required: fieldSpec.required }}
          render={({ field, fieldState }) => (
            <Calendar 
              id={field.name} 
              value={field.value} 
              onChange={(e) => field.onChange(e.value)} 
              dateFormat={fieldSpec.dateFormat} mask={fieldSpec.dateMask} showIcon 
              className={classNames({ 'p-invalid': fieldState.error })} />
        )} />
        <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
    </span>
    {getFormErrorMessage(key, errors)}
  </div>
  ),

  password: (key, fieldSpec, errors, control) => (
    <div className="field">
      <span className="p-float-label">
        <Controller
          name={key}
          control={control}
          rules={{ required: fieldSpec.required }}
          render={({ field, fieldState }) => (
            <Password id={field.name} inputRef={field.ref} {...field} toggleMask="true"
              className={classNames({ 'p-invalid': fieldState.error })}
              header={passwordHeader} footer={passwordFooter} />
        )} />
        <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
      </span>
      {getFormErrorMessage(key, errors)}
    </div>
  ),
  
  checkbox: (key, fieldSpec, errors, control) => (
    <div className="field-checkbox">
        <Controller 
          name={key} 
          control={control} 
          rules={{ required: fieldSpec.required }} 
          render={({ field, fieldState }) => (
            <Checkbox inputId={field.name} 
              onChange={(e) => field.onChange(e.checked)} 
              checked={field.value} 
              className={classNames({ 'p-invalid': fieldState.error })} /> )} 
        />
        <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
    </div>
  ),

  select: (key, fieldSpec, errors, control) => (
    <div className="field">
      <span className="p-float-label">
          <Controller name={key} 
            control={control} 
            rules={{ required: fieldSpec.required }} 
            render={({ field, fieldState }) => (
              <Dropdown id={field.name} 
                value={field.value} 
                onChange={(e) => field.onChange(e.value)} 
                options={fieldSpec.options} optionLabel="label"
                className={classNames({ 'p-invalid': fieldState.error })} /> )} 
          />
          <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
      </span>
      {getFormErrorMessage(key, errors)}
    </div>
  ),
  // radio: (key, fieldSpec, errors, control) => (
  //   <div className="field">
  //     <span className="p-float-label"></span>
  //       <div key={key} className="field-radiobutton">
  //         { fieldSpec.options.map((option, index) => (
  //             <Controller 
  //               name={option.value}
  //               control={control} 
  //               render={({ field }) => (
  //                 <>
  //                   {console.log("hola", )}
  //                   <RadioButton
  //                     inputId={key + index}
  //                     {...field} 
  //                     onChange={(e) => field.onChange(e.value)} 
  //                     checked={field.value === option.value} 
  //                     />
  //                     <label htmlFor={key}>{option.label}</label>
  //                 </>
  //               )}/>
  //         ))}
  //       </div>  
  //   </div>
  // ),


  radio: (key, fieldSpec, errors, control, register) => (
    <div className="field">
      <span className="p-float-label"></span>
          <fieldset key={key} className="field-radiobutton">
          <legend>{fieldSpec.label}</legend>
          { fieldSpec.options.map((option, index) => (
             <label htmlFor={'field-' + option.value}>
              <input
                 {...register(key)}
                 value={option.value}
                 key={key}
                 type="radio"
                 id={'field-' + option.value}
              />
              {option.label}
            </label>
          ))}
          </fieldset>
    </div>
  ),

  textarea: (key, fieldSpec, errors, control) => (
    <div className="field">
      <span className="p-float-label">
        <Controller
          name={fieldSpec.field}
          control={control}
          rules={{ required: fieldSpec.required }}
          render={({ field, fieldState }) => 
            <InputTextarea rows={5} id={field.name} {...field} 
              className={classNames({ 'p-invalid': fieldState.error })} />}
        />
        <label htmlFor={key} className={classNames({ 'p-error': errors[key] })}>{fieldSpec.label}</label>
      </span>
      {getFormErrorMessage(key, errors)}
    </div>
  ),

  hidden: (key, fieldSpec, errors, control) => (
    <div className="field">
      <span className="p-float-label">
        <Controller
          name={fieldSpec.field}
          control={control}
          rules={{ required: fieldSpec.required }}
          render={({ field, fieldState }) => (
            <input type="hidden" id={field.name} {...field} />
        )} />
      </span>
    </div>
  ),

  rating: (key, fieldSpec, errors, control) => (
    <div className="field">
      <span className="p-float-label form-group -mt-3">
        <span className="text-sm ml-2">{fieldSpec.label}</span>
        <Controller
          name={fieldSpec.field}
          control={control}
          render={({ field, fieldState }) => (
            <Rating id={field.name} {...field}
                stars={5} cancel={false} className="ml-1 mt-1" />
        )} />
      </span>
    </div>
  ),

  button: (key, fieldSpec,errors, control) => (
    <Button type="submit" label={fieldSpec.label} onSubmit={control.onSubmit} className={fieldSpec.className} style={fieldSpec.style} />
  )
  
};
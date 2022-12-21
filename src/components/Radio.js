import React from 'react';
import { useForm } from 'react-hook-form';

const Radio = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="radio"
          name="color"
          value="red"
          {...register('color',{ required: true })}
        />
        Red
      </div>
      <div>
        <input
          type="radio"
          name="color"
          value="green"
          {...register('color',{ required: true })}
        />
        Green
      </div>
      <div>
        <input
          type="radio"
          name="color"
          value="blue"
          {...register('color',{ required: true })}
        />
        Blue
      </div>
      <input type="submit" />
    </form>
  );
}

export { Radio };

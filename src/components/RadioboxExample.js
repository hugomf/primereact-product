import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from 'primereact/radiobutton';

function RadioboxExample() {
  const { register, watch } = useForm();

  return (
    <form>
    <fieldset>
      <legend>I would like to</legend>
        <label htmlFor="field-rain">
            <input
                {...register("weather")}
                type="radio"
                value="rain"
                id="field-rain"
            />
            Rain
        </label>
        <label htmlFor="field-wind">
            <input
                {...register("weather")}
                type="radio"
                value="wind"
                id="field-wind"
            />
            Lots of wind
        </label>
        <label htmlFor="field-sun">
            <input
                {...register("weather")}
                type="radio"
                value="sun"
                id="field-sun"
            />
            Sunny
        </label>
    </fieldset>
    <button type="submit">Submit</button>
  </form>
  );
}
export {RadioboxExample};
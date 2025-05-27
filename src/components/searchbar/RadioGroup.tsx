import classes from "./RadioGroup.module.css";

export type RadioOption<T> = {
  label: string;
  value: T;
};

interface RadioGroupProps<T> {
  name: string;
  options: RadioOption<T>[];
  selectedValue: T;
  onChange: (value: T) => void;
}

export function RadioGroup<T extends string>({
  name,
  options,
  selectedValue,
  onChange,
}: RadioGroupProps<T>) {
  return (
    <div className={classes.container}>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

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
    <div style={{ marginBottom: "1rem" }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{ display: "block", marginBottom: "0.25rem" }}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />{" "}
          {option.label}
        </label>
      ))}
    </div>
  );
}

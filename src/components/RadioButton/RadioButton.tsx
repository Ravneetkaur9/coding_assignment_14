import React from 'react';

type RadioButtonProps = {
  name: string;
  label: string;
  options: string[];
  selected?: string;
  onChange?: (value: string) => void;
};

const RadioButton = ({ name, label, options, selected, onChange }: RadioButtonProps) => (
  <div className="radio-group">
    <p>{label}</p>
    {options.map((option) => (
      <label key={option}>
        <input
          type="radio"
          name={name}
          value={option}
          checked={selected === option}
          onChange={() => onChange?.(option)}
        />
        {option}
      </label>
    ))}
  </div>
);

export default RadioButton;

import React from 'react';
import './Dropdown.css';

interface DropdownProps {
  label: string;
  options: string[];
  onChange?: (value: string) => void;
}

const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <select onChange={(e) => onChange?.(e.target.value)}>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

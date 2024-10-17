import React, { useEffect, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';

const FlexibleCheckboxGroup = ({
  options = [],
  name = '',
  label = '',
  multiSelect = false,
  selectedOptions = [], // This will be passed from the parent
  disabled = false,
  onChange = () => {},
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  // Initialize selectedValues from selectedOptions (parent's state or localStorage) when the component mounts
  useEffect(() => {
    if (selectedOptions.length > 0) {
      setSelectedValues(selectedOptions);
    }
  }, [selectedOptions]);

  const handleCheckboxChange = (e) => {
    let newSelectedValues;

    if (multiSelect) {
      newSelectedValues = e.checked
        ? [...selectedValues, e.value]
        : selectedValues.filter((val) => val !== e.value);
    } else {
      newSelectedValues = e.checked ? [e.value] : [];
    }

    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues); // Trigger parent's handler to sync with localStorage
  };

  if (!Array.isArray(options) || options.length === 0) {
    return null; // or return a message like "No options available"
  }

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <Checkbox
              inputId={`${name}-${option.id}`}
              name={name}
              value={option.id}
              onChange={handleCheckboxChange}
              checked={selectedValues.includes(option.id)} // Maintain checked state
              {...(disabled && { disabled: true })}
            />
            <label htmlFor={`${name}-${option.id}`} className="ml-2 text-sm text-gray-600">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexibleCheckboxGroup;

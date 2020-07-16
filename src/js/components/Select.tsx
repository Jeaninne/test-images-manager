import * as React from "react";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  setNewValue: (e) => void;
}

const Select: React.FC<SelectProps> = ({label, value, setNewValue, name, options}) => {
  const renderOptions = () => {
    return options.map(option => <option className={"Option"} key={option} value={option}>{option}</option>);
  };

  return (
    <>
      <label className={"Label"}>{label}</label>
      <select className={"Select"} name={name} value={value} onChange={setNewValue}>
        {renderOptions()}
      </select>
    </>
  );
};

export default Select;

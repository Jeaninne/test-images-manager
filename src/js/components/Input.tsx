import * as React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  type?: "text" | "color";
  setNewValue: (e) => void;
}

const Input: React.FC<InputProps> = ({label, type = "text", name, value, setNewValue}) => {
  return (
		<>
			<label className={"Label"}>{label}</label>
      <input className={"Input"} type={type} name={name} value={value} onChange={setNewValue}/>
		</>
  );
};

export default Input;

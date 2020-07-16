import * as React from "react";

interface ButtonProps {
  label: string;
  name: string;
  text: string;
  setNewValue: (e) => void;
}

const Textarea: React.FC<ButtonProps> = ({label, text, name, setNewValue}) => {
  return (
    <>
      <label className={"Label"}>{label}</label>
      <textarea className={"Textarea"} name={name} onChange={setNewValue} value={text} />
    </>
  );
};

export default Textarea;

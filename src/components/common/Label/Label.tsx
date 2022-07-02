import { FC } from "react";
import "./Label.styles.css";

export interface LabelProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: boolean;
}

const Label: FC<LabelProps> = ({
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="label">
      <label className="label__name">
        {name}
        {": "}
      </label>
      <input
        className={`label__input ${error ? "label--error" : ""}`}
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Label;

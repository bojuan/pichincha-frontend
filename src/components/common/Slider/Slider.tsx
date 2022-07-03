import { FC } from "react";
import "./Slider.styles.css";

export interface SliderProps {
  name: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ name, value, onChange, min, max }) => {
  return (
    <div className="slider">
      <label className="slider__name">
        {name}
        {": "}
      </label>
      <div className="slider__input-container">
        {typeof min === "number" && (
          <span className="slider__range">{min}</span>
        )}
        <input
          className={`slider__input`}
          type="range"
          id={name}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={
            onChange ? (e) => onChange(Number(e.target.value)) : undefined
          }
        />
        {typeof max === "number" && (
          <span className="slider__range">{max}</span>
        )}
      </div>
    </div>
  );
};

export default Slider;

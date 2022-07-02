import CancelIcon from "../../../assets/icons/CancelIcon";
import SaveIcon from "../../../assets/icons/SaveIcon";
import Button from "../../common/Button/Button";
import Label from "../../common/Label/Label";
import Slider from "../../common/Slider/Slider";
import "./FormSection.style.css";

function FormSection() {
  return (
    <section className="form">
      <div className="form__title">
        <h2>Pokemon</h2>
      </div>
      <div className="form__body">
        <div className="form__item-body">
          <Label name="Nombre" />
        </div>
        <div className="form__item-body">
          <Slider name="Ataque" min={0} max={100} />
        </div>
        <div className="form__item-body">
          <Label name="Imagen" placeholder="url" />
        </div>

        <div className="form__item-body">
          <Slider name="Defensa" min={0} max={100} />
        </div>
      </div>
      <div className="form__buttons">
        <Button icon={<SaveIcon />}>Guardar</Button>
        <Button icon={<CancelIcon />}>Cancelar</Button>
      </div>
    </section>
  );
}

export default FormSection;

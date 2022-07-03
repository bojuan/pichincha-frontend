import CancelIcon from "../../../assets/icons/CancelIcon";
import SaveIcon from "../../../assets/icons/SaveIcon";
import Button from "../../common/Button/Button";
import Label from "../../common/Label/Label";
import Slider from "../../common/Slider/Slider";
import "./FormSection.style.css";
import useFormSection from "./useFormSection/useFormSection";

function FormSection() {
  const {
    attack,
    defense,
    image,
    name,
    type,
    hp,
    disableButton,
    isUpdate,
    errors: { errorName, errorImage, errorType },
    actions: {
      handleCancel,
      handleSave,
      handleChangeAttack,
      handleChangeDefense,
      handleChangeImage,
      handleChangeName,
      handleChangeType,
      handleChangeHp,
    },
  } = useFormSection();

  return (
    <section className="form">
      <div className="form__title">
        <h2>{isUpdate ? "Actualizar" : "Nuevo"} Pokemon</h2>
      </div>
      <div className="form__body">
        <div className="form__item-body">
          <Label
            name="Nombre"
            value={name}
            onChange={handleChangeName}
            error={errorName}
          />
        </div>
        <div className="form__item-body">
          <Slider
            name="Ataque"
            min={0}
            max={100}
            value={attack}
            onChange={handleChangeAttack}
          />
        </div>
        <div className="form__item-body">
          <Label
            name="Imagen"
            placeholder="url"
            value={image}
            onChange={handleChangeImage}
            error={errorImage}
          />
        </div>

        <div className="form__item-body">
          <Slider
            name="Defensa"
            min={0}
            max={100}
            value={defense}
            onChange={handleChangeDefense}
          />
        </div>

        <div className="form__item-body">
          <Label
            name="Tipo"
            value={type}
            onChange={handleChangeType}
            error={errorType}
          />
        </div>

        <div className="form__item-body">
          <Slider
            name="Golpe"
            min={0}
            max={100}
            value={hp}
            onChange={handleChangeHp}
          />
        </div>
      </div>
      <div className="form__buttons">
        <Button
          icon={<SaveIcon />}
          onClick={handleSave}
          disabled={disableButton}
        >
          Guardar
        </Button>
        <Button icon={<CancelIcon />} onClick={handleCancel}>
          Cancelar
        </Button>
      </div>
    </section>
  );
}

export default FormSection;

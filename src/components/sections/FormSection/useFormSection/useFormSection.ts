import { useEffect, useState } from "react";
import { usePokemonContext } from "../../../../context/PokemonContext";
import { createPokemon, updatePokemon } from "../../../../services/services";
import { ID_AUTHOR } from "../../../../shared/constants/pichincha-constants";

const useFormSection = () => {
  const {
    pokemons,
    pokemonToEdit,
    openPokemonForm,
    actions: { handleOpenForm, handlePokemonToEdit, setPokemonsList },
  } = usePokemonContext();

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [attack, setAttack] = useState<number>(0);
  const [defense, setDefense] = useState<number>(0);
  const [hp, setHp] = useState<number>(0);

  const [disableButton, setDisableButton] = useState<boolean>(true);

  const [verifyErrors, setVerifyErrors] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorImage, setErrorImage] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<boolean>(false);

  useEffect(() => {
    if (pokemonToEdit) {
      setName(pokemonToEdit.name);
      setImage(pokemonToEdit.image);
      setAttack(pokemonToEdit.attack);
      setDefense(pokemonToEdit.defense);
      setHp(pokemonToEdit.hp);
      setType(pokemonToEdit.type);
      return;
    }

    setName("");
    setImage("");
    setType("");
    setAttack(0);
    setDefense(0);
    setHp(0);
  }, [pokemonToEdit]);

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeImage = (value: string) => {
    setImage(value);
  };

  const handleChangeAttack = (value: number) => {
    setAttack(value);
  };

  const handleChangeDefense = (value: number) => {
    setDefense(value);
  };

  const handleCancel = () => {
    handleOpenForm(false);
    handlePokemonToEdit();
  };

  const handleChangeType = (value: string) => {
    setType(value);
  };

  const handleChangeHp = (value: number) => {
    setHp(value);
  };

  const createItemPokemon = async () => {
    try {
      const data = {
        name,
        image,
        attack,
        defense,
        hp,
        idAuthor: ID_AUTHOR,
        type,
      };
      const pokemon = await createPokemon(data);

      setPokemonsList([...pokemons, pokemon]);
      handleCancel();
    } catch (error) {
      alert("No se pudo crear el Pokemon");
    }
  };

  const saveItemPokemon = async () => {
    try {
      const data = {
        name,
        image,
        attack,
        defense,
        hp,
        idAuthor: ID_AUTHOR,
        type,
      };
      await updatePokemon(pokemonToEdit!.id.toString(), data);

      const newList = pokemons.map((item) => {
        if (item.id === pokemonToEdit!.id) {
          return {
            ...item,
            name,
            image,
            attack,
            defense,
            type,
            hp,
          };
        }

        return item;
      });

      setPokemonsList(newList);
      handleCancel();
    } catch (error) {
      alert("No se pudo actualizar el Pokemon");
    }
  };

  const handleSave = async () => {
    if (pokemonToEdit) {
      await saveItemPokemon();
      return;
    }

    await createItemPokemon();
  };

  useEffect(() => {
    setDisableButton(!(name !== "" && image !== "" && type !== ""));
  }, [name, image, type]);

  useEffect(() => {
    setVerifyErrors(true);
  }, []);

  useEffect(() => {
    if (verifyErrors) {
      setErrorName(name === "");
      setErrorType(type === "");
      setErrorImage(image === "");
    }
  }, [name, image, type]);

  return {
    name,
    image,
    attack,
    defense,
    type,
    hp,
    disableButton,
    isUpdate: !!pokemonToEdit,
    openPokemonForm,
    pokemons,
    errors: {
      errorName,
      errorImage,
      errorType,
    },
    actions: {
      handleCancel,
      handleSave,
      handleChangeAttack,
      handleChangeDefense,
      handleChangeImage,
      handleChangeName,
      handleChangeType,
      handleChangeHp,
      handlePokemonToEdit,
      setPokemonsList,
    },
  };
};

export default useFormSection;

import EditIcon from "../../../assets/icons/EditIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import Button from "../../common/Button/Button";
import TablePokemons from "../../common/TablePokemons/TablePokemons";
import { TablePokemonsColumn } from "../../common/TablePokemons/TablePokemons.interfaces";
import { useTableSection } from "./useTableSection/useTableSection";
import "./TableSection.styles.css";

function TableSection() {
  const {
    dataSource,
    actions: { editPokemon, deletePokemon },
  } = useTableSection();

  const columns: TablePokemonsColumn[] = [
    {
      title: "Nombre",
      key: "name",
    },
    {
      title: "Imagen",
      key: "image",
    },
    {
      title: "Ataque",
      key: "attack",
    },
    {
      title: "Defensa",
      key: "defense",
    },
    {
      title: "Acciones",
      key: "actions",
      render: (item) => (
        <div className="column__actions">
          <Button
            icon={<EditIcon />}
            type="text"
            onClick={editPokemon(item)}
          />
          <Button
            icon={<TrashIcon />}
            type="text"
            onClick={deletePokemon(item)}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="table-section">
      <TablePokemons data={dataSource} columns={columns} />
    </section>
  );
}

export default TableSection;

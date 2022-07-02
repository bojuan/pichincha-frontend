import { FC, ReactNode } from "react";
import { KeyTable, TablePokemonsProps } from "./TablePokemons.interfaces";
import "./TablePokemons.styles.css";

const TablePokemons: FC<TablePokemonsProps> = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan={columns.length} className="table__no-data">
              No data
            </td>
          </tr>
        )}
        {data.map((item) => (
          <tr key={item.key}>
            {columns.map((column) => {
              const data = item[column.key as unknown as KeyTable] as ReactNode;
              let render = column.render ? column.render(item) : data;

              if (column.key === "image") {
                render = (
                  <img
                    className="table__image"
                    alt={item.name}
                    src={data as string}
                  />
                );
              }

              return (
                <td
                  key={column.key}
                  className={`table__container-${column.key}`}
                >
                  {render}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePokemons;

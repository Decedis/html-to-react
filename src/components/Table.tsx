import { Character } from "../../fma-data.ts";
import "../css/character-ratings.css";

type TableProp = {
  input: Character;
  classCSS: string;
};

export function Table(object: TableProp) {
  const { input, classCSS } = object;
  if (input.votes >= 90) {
    return (
      <tr className={classCSS}>
        <td>{input.name}</td>
        <td>{input.skillset}</td>
        <td>{input.votes}</td>
      </tr>
    );
  }
}

import { Character } from "../../fma-data.ts";
import "../css/character-ratings.css";

type TableProp = {
  character: Character;
  classCSS: string;
};

export function Table(object: TableProp) {
  const { character, classCSS } = object;
  if (character.votes >= 90) {
    return (
      <tr className={classCSS}>
        <td>{character.name}</td>
        <td>{character.skillset}</td>
        <td>{character.votes}</td>
      </tr>
    );
  }
}

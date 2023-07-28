import { Character } from "../../public/fma-data.ts";

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

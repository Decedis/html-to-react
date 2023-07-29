import { Header } from "./components/Header";
import { CharacterTable } from "./components/CharacterTable";
import { CharacterCards } from "./components/CharacterCards";
import { data } from "../fma-data";

const linkList: string[] = ["about us", "info", "support us"];

export function App() {
  return (
    <>
      <Header links={linkList} />
      <CharacterTable id={"character-ratings"} characters={data} />
      <CharacterCards id={"character-cards"} characters={data} />
    </>
  );
}

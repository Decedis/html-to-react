import { Character } from "../../fma-data";
import "../css/character-cards.css";

export function Card({ character }: { character: Character }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{character.name}</h3>
      </div>
      <img src={character.imageUrl} alt="" />
      <p> {character.background} </p>
    </div>
  );
}

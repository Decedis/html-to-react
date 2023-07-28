import { Character } from "../../fma-data";
import "../css/character-cards.css";

export function Card({ input }: { input: Character }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{input.name}</h3>
      </div>
      <img src={input.imageUrl} alt="" />
      <p> {input.background} </p>
    </div>
  );
}

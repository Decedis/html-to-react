import { Card } from "./Card";
import { Section } from "./Section";

export class CharacterCards extends Section {
  render() {
    const { id, characters } = this.props;
    return (
      <div id={id}>
        {characters.map((card) => (
          <Card character={card} />
        ))}
      </div>
    );
  }
}

import { Section } from "./Section";
import { Table } from "./Table";

export class CharacterTable extends Section {
  render() {
    const { id, characters } = this.props;
    let currentClass = "dark";
    return (
      <div id={id}>
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {characters
              .sort((a, b) => (a.votes < b.votes ? 1 : 0)) // a.votes - b.votes
              .map((tableElm) => {
                currentClass = currentClass === "dark" ? "light" : "dark";
                return <Table character={tableElm} classCSS={currentClass} />;
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

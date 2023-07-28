import React from "react";
import { Character } from "../../fma-data";
import { Card } from "./Card";
import { Table } from "./Table";

type SectionProps = {
  id: string;
  data: Character[];
};

export class Section extends React.Component<SectionProps> {
  render() {
    const { id, data } = this.props;
    let currentClass = "dark";
    if (id === "character-ratings") {
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
              {data
                .sort((a, b) => (a.votes < b.votes ? 1 : 0))
                .map((tableElm) => {
                  currentClass = currentClass === "dark" ? "light" : "dark";
                  return <Table input={tableElm} classCSS={currentClass} />;
                })}
            </tbody>
          </table>
        </div>
      );
    }

    if (id === "character-cards") {
      return (
        <div id={id}>
          {data.map((card) => (
            <Card input={card} />
          ))}
        </div>
      );
    }
  }
}

import React from "react";
import { Character } from "../../fma-data";

type SectionProps = {
  id: string;
  characters: Character[];
};
export class Section extends React.Component<SectionProps> {}

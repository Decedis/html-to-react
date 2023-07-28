import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import "./css/reset.css";
import "./css/header.css";
import "./css/character-ratings.css";
import "./css/character-cards.css";

import { data } from "../public/fma-data";
import { Section } from "./components/Section";
import { Nav } from "./components/Nav.tsx";

const linkList: string[] = ["about us", "info", "support us"];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Nav links={linkList} />,
    <Section id={"character-ratings"} />,
    <Section id={"character-cards"} />,
  </>,
);

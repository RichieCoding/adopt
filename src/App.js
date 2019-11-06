import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Kodak",
      animal: "Cat",
      breed: "Cutie"
    }),
    React.createElement(Pet, {
      name: "Jeter",
      animal: "Dog",
      breed: "Pom"
    }),
    React.createElement(Pet, {
      name: "Serenity",
      animal: "Dog",
      breed: "Pitbull"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));

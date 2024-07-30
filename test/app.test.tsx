import * as React from "react";
import * as renderer from "react-test-renderer";
import { ReactShakaPlayer as Player } from "../src/components/player";

it("Player renders correctly", () => {
  const tree = renderer.create(<Player />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Player renders source[src] string correctly", () => {
  const props = { src: "this is sample src" };
  const tree = renderer.create(<Player {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Player render className container correctly", () => {
  const props = { className: "container-class-name" };
  const tree = renderer.create(<Player {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Player render playerClassName container correctly", () => {
  const props = { playerClassName: "player-class-name" };
  const tree = renderer.create(<Player {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Player render container className and playerClassName container correctly", () => {
  const props = {
    className: "container-class-name",
    playerClassName: "player-class-name",
  };
  const tree = renderer.create(<Player {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

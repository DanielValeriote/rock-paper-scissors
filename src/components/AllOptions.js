import React from 'react'
import paperIcon from "../images/icon-paper.svg";
import scissorIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import Option from './Option';

export const options = {
  paper: {
    name: "paper",
    color: "hsl(230, 89%, 62%)",
    img: paperIcon,
  },
  scissors: {
    name: "scissors",
    color: "hsl(39, 89%, 49%)",
    img: scissorIcon,
  },
  rock: {
    name: "rock",
    color: "hsl(349, 71%, 52%)",
    img: rockIcon,
  },
};

export default function AllOptions({ pickChoice }) {
  return (
    <section className="options">
      <Option
        data={options.paper}
        className="paper"
        onClickFunction={pickChoice}
        id={1}
      />
      <Option
        data={options.scissors}
        className="scissors"
        onClickFunction={pickChoice}
        id={2}
      />
      <Option
        data={options.rock}
        className="rock"
        onClickFunction={pickChoice}
        id={3}
      />
    </section>
  );
}

import {options} from "../App";

function getRandomOption() {
  let random = Math.floor(Math.random() * 3)
  switch(random) {
    case 0:
      return options.paper
    case 1:
      return options.scissors
    case 2:
      return options.rock
  }
}

export default getRandomOption;
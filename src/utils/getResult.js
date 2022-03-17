function getResult (chosenName, houseName) {
  switch(chosenName) {
    case "paper":
      switch (houseName) {
        case "paper":
          return { value: "YOU TIED" };
        case "scissors":
          return { value: "YOU LOSE" };
        case "rock":
          return { value: "YOU WIN" };
        default:
          return;
      }
      
    case "scissors":
      switch (houseName) {
        case "paper":
          return { value: "YOU WIN" };
        case "scissors":
          return { value: "YOU TIED" };
        case "rock":
          return { value: "YOU LOSE" };
        default:
          return;
      }

    case "rock":
      switch (houseName) {
        case "paper":
          return { value: "YOU LOSE" };
        case "scissors":
          return { value: "YOU WIN" };
        case "rock":
          return { value: "YOU TIED" };
        default:
          return;
        }
      default:
        return;
  }
}

export default getResult
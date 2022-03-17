import './App.scss';
import logo from "./images/logo.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorIcon from "./images/icon-scissors.svg";
import rockIcon from "./images/icon-rock.svg";
import Option from './components/Option';
import RulesModal from './components/RulesModal';
import ResultScreen from './components/ResultScreen';
import './styles/header.scss';
import { useState } from "react";

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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [chosenOpt, setChosenOpt] = useState(false)
  const [step, setStep] = useState("options");

  

  function pickChoice (choosen) {
    setStep("result");
    setChosenOpt(choosen)
  }

  return (
    <>
      {showModal && <RulesModal onCloseBtnClick={setShowModal} />}
      <header className="App-header">
        <img src={logo} alt="logo" />
        <div className="score-container">
          <h5>score</h5>
          <h2>12</h2>
        </div>
      </header>
      <main>
        {step === "options" && (
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
        )}
        {step === "result" && <ResultScreen choosenOption={chosenOpt} />}
      </main>
      <footer>
        <button
          id="showRulesBtn"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Rules
        </button>
      </footer>
    </>
  );
}

export default App;

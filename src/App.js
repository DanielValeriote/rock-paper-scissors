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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [options, setOptions] = useState({
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
  });
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
                id={1}
                onClickFunction={pickChoice}
              />
              <Option
                data={options.scissors}
                className="scissors"
                id={2}
                onClickFunction={pickChoice}
              />
              <Option
                data={options.rock}
                className="rock"
                id={3}
                onClickFunction={pickChoice}
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

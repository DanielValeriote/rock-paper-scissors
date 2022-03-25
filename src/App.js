import './App.scss';
import './styles/header.scss';
import logo from "./images/logo.svg";
import AllOptions from './components/AllOptions';
import RulesModal from './components/RulesModal';
import ResultScreen from './components/ResultScreen';
import { useState, createContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const ScoreContext = createContext("main");

function App() {
  const [showModal, setShowModal] = useState(false);
  const [chosenOpt, setChosenOpt] = useState(false)
  const [score, setScore] = useState(0)
  const [step, setStep] = useState("options");

  function pickChoice (chosen) {
    setStep("result");
    setChosenOpt(chosen)
  }

  function goToHomePage() {
    setStep("options");
    setChosenOpt(false);
  }

  return (
    <>
      <ScoreContext.Provider value={{ score, setScore }}>
        {showModal && <RulesModal onCloseBtnClick={setShowModal} />}
        <header className="App-header">
          <img onClick={() => goToHomePage()} src={logo} alt="logo" />
          <div className="score-container">
            <h5>score</h5>
            <h2>{score}</h2>
          </div>
        </header>
        <main>
          {step === "options" && <AllOptions pickChoice={pickChoice} />}
          {step === "result" && (
            <ResultScreen
              backToHomeFnc={goToHomePage}
              chosenOption={chosenOpt}
              scoreUpdater={setScore}
            />
          )}
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
          <div className="credits">
            <h5>Project created by Daniel Valeriote</h5>
            <ul className="link-icons">
              <li>
                <a
                  href="https://github.com/DanielValeriote"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daniel-valeriote/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </ScoreContext.Provider>
    </>
  );
}

export default App;

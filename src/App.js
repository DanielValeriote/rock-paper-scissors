import './App.scss';
import logo from "./images/logo.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorIcon from "./images/icon-scissors.svg";
import rockIcon from "./images/icon-rock.svg";
import Option from './components/Option';
import './styles/header.scss';
function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="logo" />
        <div className="score-container">
          <h5>score</h5>
          <h2>12</h2>
        </div>
      </header>
      <main>
        <section className="options">
          <Option
            className="paper"
            image={paperIcon}
            name="paper"
            color="hsl(230, 89%, 62%)"
            id={1}
          />
          <Option
            className="scissors"
            image={scissorIcon}
            name="scissors"
            color="hsl(39, 89%, 49%)"
            id={2}
          />
          <Option
            className="rock"
            image={rockIcon}
            name="rock"
            color="hsl(349, 71%, 52%)"
            id={3}
          />
        </section>
      </main>
      <footer>
        <button id="showRulesBtn">Rules</button>
      </footer>
    </>
  );
}

export default App;

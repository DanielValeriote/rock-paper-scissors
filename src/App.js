import './App.scss';
import logo from "./images/logo.svg";
import triangleBg from "./images/bg-triangle.svg";
import paperIcon from "./images/icon-paper.svg";
import scissorIcon from "./images/icon-scissors.svg";
import rockIcon from "./images/icon-rock.svg";
import Option from './components/Option';
import './styles/header.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <div className="score-container">
          <h5>score</h5>
          <h2>12</h2>
        </div>
      </header>
      <main>
        <section className="options-container">
          {/* <div className="triangle-bg">
            <img src={triangleBg} alt="triangle background" />
          </div> */}
          <Option
            className="secondImage"
            image={paperIcon}
            name="paper"
            color="hsl(230, 89%, 62%)"
            id={1}
          />
          <Option
            image={scissorIcon}
            name="scissor"
            color="hsl(39, 89%, 49%)"
            id={2}
          />
          <Option
            image={rockIcon}
            name="rock"
            color="hsl(349, 71%, 52%)"
            id={3}
          />
        </section>
      </main>
    </div>
  );
}

export default App;

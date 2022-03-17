import "./ResultScreen.scss";
import paperIcon from "../images/icon-paper.svg";
import scissorIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import Option from "../components/Option";

const ResultScreen = ({ choosenOption }) => {
  return (
    <section className="resultScreen">
      <Option
        data={choosenOption}
        name={choosenOption.name}
        extraClassName="chosenOpt"
        id={4}
      />
      <Option
        data={{ name: "rock", img: rockIcon, color: "hsl(349, 71%, 52%)" }}
        className="rock houseOpt"
        extraClassName="houseOpt"
        id={5}
      />
    </section>
  );
};

export default ResultScreen;

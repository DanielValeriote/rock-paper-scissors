import "./ResultScreen.scss";
import paperIcon from "../images/icon-paper.svg";
import scissorIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import Option from "../components/Option";
import getRandomOption from "../utils/getRandomOption"

const ResultScreen = ({ choosenOption }) => {
  const randomOption = getRandomOption();
  return (
    <section className="resultScreen">
      <Option
        data={choosenOption}
        extraClassName="chosenOpt"
        id={4}
      />
      <Option
        data={randomOption}
        extraClassName="houseOpt"
        id={5}
      />
    </section>
  );
};

export default ResultScreen;

import "./ResultScreen.scss";
import Option from "../components/Option";
import getRandomOption from "../utils/getRandomOption"
import { useState } from "react";

const ResultScreen = ({ choosenOption }) => {
  const randomOption = getRandomOption();
  const [houseOpt, setHouseOpt] = useState({name:"wait"})
  setTimeout(()=> setHouseOpt(randomOption),1000)
  return (
    <section className="resultScreen">
      <Option data={choosenOption} extraClassName="chosenOpt" id={4} />
      <Option data={houseOpt} extraClassName="houseOpt" id={5} />
    </section>
  );
};

export default ResultScreen;

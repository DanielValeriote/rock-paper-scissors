import "./ResultScreen.scss";
import Option from "../components/Option";
import getRandomOption from "../utils/getRandomOption"
import { useState, useEffect } from "react";


const ResultScreen = ({ choosenOption }) => {
  useEffect(()=> {
    setTimeout(()=> setHouseOpt(getRandomOption), 1000)}, [])
  const [houseOpt, setHouseOpt] = useState({name:"wait"})
  return (
    <section className="resultScreen">
      <Option data={choosenOption} extraClassName="chosenOpt" id={4} />
      <Option data={houseOpt} extraClassName="houseOpt" id={5} />
    </section>
  );
};

export default ResultScreen;

import "./ResultScreen.scss";
import Option from "../components/Option";
import getRandomOption from "../utils/getRandomOption"
import getResult from "../utils/getResult"
import { useState, useEffect } from "react";

const ResultScreen = ({ chosenOption }) => {
  const [houseOpt, setHouseOpt] = useState({name:"wait"})
  const [result, setResult] = useState({ value: false });
  useEffect(()=> {
    setTimeout(()=>  {
      setHouseOpt(getRandomOption())
    }, 1000)}, [])
  useEffect(() => {
    if(houseOpt.name && houseOpt.name !== "wait") {
      let result = getResult(chosenOption.name, houseOpt.name);
      setResult(result)
    }
  }, [houseOpt]);

  return (
    <section className="resultScreen">
      <Option data={chosenOption} extraClassName="chosenOpt" id={4} />
      <h3 className="chosenOptTitle">YOU PICKED</h3>
      <Option data={houseOpt} extraClassName="houseOpt" id={5} />
      <h3 className="houseOptTitle">THE HOUSE PICKED</h3>
      {result.value && <h1 className="resultTitle">{result.value}</h1>}
    </section>
  );
};

export default ResultScreen;

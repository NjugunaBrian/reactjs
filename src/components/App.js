import { useState } from "react";

function Statistics ({handleClick, text}){
  return(
    <button onClick={handleClick}>{text}</button>
  );
}



export default function App(){
  const [valueNeutral, setNeutral] = useState(0);
  const [valueGood, setGood] = useState(0);
  const [valueBad, setBad]  = useState(0);
  const [totalNeutral, setTotalNeutral] = useState(0);
  const [totalGood, setTotalGood]  = useState(0);
  const [totalBad, setTotalBad]  = useState(0);
  const [allClicks, setClicks]  = useState(0);

  function handleNeutralClick(){
    const updatedNeutral = valueNeutral + 1
    setNeutral(updatedNeutral)
    setTotalNeutral(updatedNeutral)
    setClicks(updatedNeutral + valueGood + valueBad)

  }  
  function handleGoodClick(){
    const updatedGood  = valueGood + 1
    setGood(updatedGood);
    setTotalGood(updatedGood)
    setClicks(valueNeutral + updatedGood + valueBad)

  }  
  function handleBadClick(){
    const updatedBad  = valueBad + 1
    setBad(updatedBad);
    setTotalBad(updatedBad)
    setClicks(valueNeutral + valueGood + updatedBad)

  }
    
  return(
    <>
      <h1>give feedback</h1>
      <div>
        <Statistics handleClick={handleNeutralClick} text='neutral' />
        <Statistics handleClick={handleGoodClick} text='good' />
        <Statistics handleClick={handleBadClick} text='bad' />
      </div>

      <h1>statistics</h1>
      
      <p>neutral {totalNeutral}</p>
      <p>good {totalGood}</p>
      <p>bad {totalBad}</p>
      <p>all {allClicks}</p>
      <p>positive {(totalGood / allClicks ) * 100}%</p>
      


    </>  
  );

}
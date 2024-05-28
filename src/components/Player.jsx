import { useRef,useState } from "react";

export default function Player() {
  let input = useRef()
  let [playerName,setPlayerName] = useState()
  return (
    <section id="player">
      <h2>Welcome  {playerName ? playerName:"unknown entity"}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={()=>{
          setPlayerName(input.current.value);
          input.current.value =""
        }}>Set Name</button>
      </p>
    </section>
  );
}

import { useRef, useState } from "react"
import ResultModel from "./ResultModel";

export default function Timer({ title, targetTime }) {

    let timer = useRef();
    let dialog = useRef();

    const [timeRemaing, setTimeRemaing] = useState(targetTime * 1000)
    const timerisActive = timeRemaing > 0 && timeRemaing < targetTime * 1000

    if (timeRemaing <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
        


    }
function handelReset(){
    setTimeRemaing(targetTime * 1000)
}
    function handleStart() {

        timer.current = setInterval(() => {
            setTimeRemaing(prevtime => prevtime - 10)
        }, 10)

    }

    function handleStop() {
        dialog.current.open()

        clearInterval(timer.current)
    }

    return (<>
        <ResultModel ref={dialog} 
        remaingTime={timeRemaing}
     targetTime={targetTime}
     onReset={handelReset} />
        <section className="challenge">
            <h2>{title}</h2>

            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerisActive ? handleStop : handleStart}>
                    {timerisActive ? 'Stop challenge' : "start challenge"}
                </button>
            </p>
            <p className={timerisActive ? "active" : undefined}>
                {timerisActive ? 'Time is Running...' : 'Timer inactive'}

            </p>
        </section></>)
}
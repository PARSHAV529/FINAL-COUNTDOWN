import { forwardRef ,useImperativeHandle,useRef} from "react";
import { createPortal } from "react-dom";
const ResultModel = forwardRef(function ResultModel({remaingTime,onReset, targetTime},ref){
    let dialog=useRef();
    const UserLost =remaingTime <= 0
    const score = Math.round((1-remaingTime/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <>
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            { UserLost && <h2>You Lost</h2>}
            { !UserLost && <h2>You Score : {score}</h2>}
            <p>The Target Time was <strong>{targetTime} seconds.</strong></p>
            <p>You Stopped The timer with <strong>{(remaingTime/1000).toFixed(2)} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>

        </dialog>
        
        
        </>,
        document.getElementById('modal')
    )
})

export default ResultModel;
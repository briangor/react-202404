import { useRef, useState } from "react"

export default function Refs() {
    const [count, setCount] = useState(0);
    let ref = useRef(0);

    function handleClick() {
        setCount(count + 1);
    }
    function handleClickRef() {
        ref.current = ref.current + 1;
    }
  return (
    <div>
        <h4>State & Refs</h4>
        <button onClick={handleClick}>+1</button> <span>count(state): {count}</span>
        <br />
        <button onClick={handleClickRef}>+1</button> <span>count(ref): {ref.current}</span>
    </div>
  )
}

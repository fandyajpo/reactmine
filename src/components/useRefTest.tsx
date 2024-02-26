import { useRef } from "react";

const RefComponent = () => {
  const ref = useRef(null);
  return (
    <div>
      <button onClick={() => ref.current.click()}>Click By Ref</button>
      <hr />
      <button ref={ref} onClick={() => console.log("Clicked")}>
        Return Console Log
      </button>
    </div>
  );
};

export default RefComponent;

import { useEffect, useState } from "react";

export default function StateHook() {
  const [count, setCount] = useState(2);
  useEffect(()=>{
    console.log("Page Loaded")
  },[])

  useEffect(()=>{
    console.log("Count Updated")
  },[count])
  
  return (
    <div className="w-50% bg-cyan-800 text-white m-auto p-4 flex justify-center items-center flex-col">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          setCount(count - 2);
        }}
      >
        Substract
      </button>
    </div>
  );
}

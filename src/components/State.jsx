import { useState } from "react";

export default function StateHook(){
    const [count,setCount] = useState(2);
    return (
        <div className="w-50% bg-cyan-800 text-white m-auto p-4 flex justify-center items-center flex-col">
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count * 2)}}>Click Me</button>
        </div>
    )
}
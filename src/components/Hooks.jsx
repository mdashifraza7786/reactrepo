
// export default function useStateHooks() {
//     const data = [
//         { id: 1, name: "John" },
//         { id: 2, name: "Jane" },
//         { id: 3, name: "Doe" }
//     ]
//     const [dataValues, setDataValues] = useState(data);
//     return (
//         <div className="hooks">
//             <h1>Hooks</h1>
//             <ul>
//                 {dataValues.map((item) => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//             <div className="flex gap-2">
//             <button className="bg-red-800 py-2 px-5" onClick={() => setDataValues([])}>Clear</button>
//             <button className="bg-red-800 py-2 px-5" onClick={() => setDataValues(data)}>Reset</button>
//             </div>
//         </div>
//     )   
// }


// export default function useEffectHooks() {
//     const [count, setCount] = useState(0);
    
//     useEffect(()=>{
//         console.log('Component Mounted');
//     },[count]);

//     return (
//         <div className="hooks">
//             <h1>Hooks</h1>
//             <h2>Count: {count}</h2>
//             <button className="bg-red-800 py-2 px-5" onClick={() => setCount(count + 1)}>Increment</button>
//             <button className="bg-red-800 py-2 px-5" onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// }



export default function ContextHooks(){
    return(
        <>
        </>
    )
}
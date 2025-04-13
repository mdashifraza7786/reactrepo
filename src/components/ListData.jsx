
export default function ListData({arrayData}){


    return (
        <div className="w-[75%] m-auto">
            {arrayData.map((item,index)=>{
                return (
                    <div key={index} className="border-1 py-3 px-4 border-gray-500  bg-cyan-900 my-2 text-white flex justify-between items-center">
                        <h1>{item.name}</h1>
                        <div className="flex gap-4 justify-start">
                        <p>{item.age}</p>
                        <p>{item.city}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
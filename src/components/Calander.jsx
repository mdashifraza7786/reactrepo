import { useState } from "react";

const  Calander = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsofyear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const getDaysInMonth = (year, month) => {
        return new Date(year, month +1, 0).getDate();
    }

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    }

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); 

    const daysInMonth =  getDaysInMonth(year,month);
    const firstDay = getFirstDayOfMonth(year, month);

    const goToPrevMonth = () =>{
        setCurrentDate(new Date(year, month -1, 1));
    }
    const goToNextMonth = () =>{
        setCurrentDate(new Date(year, month + 1 ,1))
    }

    const calanderDays = []; // ['','', 1,2,3,4,5,...,30];

    for(let i = 0; i < firstDay; i++){
        calanderDays.push('');
    }

    for(let i = 1; i <= daysInMonth; i++){
        calanderDays.push(i);
    }

    const currentMonth = new Date().getMonth();
    const today = new Date().getDate();

    // const date = new Date();
    // const monthinstring = date.toLocaleString('default');
    // console.log(monthinstring)




    return (
        <>
        <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <button onClick={goToPrevMonth}>Prev</button>
                <h2>{monthsofyear[month]} {year}</h2>
                <button onClick={goToNextMonth}>Next</button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center font-semibold">
                {daysofweek.map((day,index) => {
                    return(
                    <div key={index}>{day}</div>
                )
                })}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mt-2">
                {calanderDays.map((date, index) => {
                    return (
                        <div key={index} className={`flex items-center justify-center h-10 w-10 rounded-full ${date != '' ? "border" : ""} ${month == currentMonth && date == today  ? "bg-blue-400" : ""}`}>
                            {date}
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Calander
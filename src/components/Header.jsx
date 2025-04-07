import React from "react";
import Logo from "../../download.png";

function Header(props) {
  // {username:"Sakshi", func:makealert, data:{name:"Sakshi", age:20, city:"Delhi"}}
  // {username, func, data} = props;
  // if(props.data.age > 18) {
  //   alert("You are an adult");
  // }
  
  return (
    <header className="flex justify-between items-center shadow-md px-10 py-2">
      <div>
        <img className="w-[30%]" src={Logo} />
      </div>
      <div>
        <ul className="flex gap-7 text-[1.2rem]">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </div>
      <div>
        {props.data.age > 18 ? <h1>You are an adult</h1> : <h1>You are a minor</h1>}
      </div>
      <div>
        <button onClick={()=>{alert("Hello")}} className="text-[1.2rem] bg-sky-800 text-white outline-none px-5 py-2">Login</button>
      </div>
    </header>
  );
}

export default Header;

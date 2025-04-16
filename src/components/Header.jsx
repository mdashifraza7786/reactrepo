import React from "react";
import Logo from "../../download.png";
import { Link } from "react-router-dom";

function Header(props) {

  
  return (
    <header className="flex justify-between items-center shadow-md px-10 py-2">
      <div>
        <img className="w-[30%]" src={Logo} />
      </div>
      <div>
        <ul className="flex gap-7 text-[1.2rem]">
            <Link to="/"><li>Home</li></Link>
            <Link to="/data"><li>Data</li></Link>
            <Link to="/form"> <li>Form</li></Link>
        </ul>
      </div>
      <div>
        <h1 className="text-[1.2rem]">Welcome {props.username}</h1>
      </div>
      <div>
        <button onClick={()=>{alert("Hello")}} className="text-[1.2rem] bg-sky-800 text-white outline-none px-5 py-2">Login</button>
      </div>
    </header>
  );
}
export default Header;

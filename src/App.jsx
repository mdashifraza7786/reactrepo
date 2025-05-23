import Calander from "./components/Calander.jsx";
import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Hooks from "./components/Hooks.jsx";
import ListData from "./components/ListData.jsx";
import StateHook from "./components/State.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextHooks from "./components/Hooks.jsx";

function App() {
  const data = [
    { name: "Sakshi", age: 16, city: "Delhi" },
    { name: "Ravi", age: 20, city: "Mumbai" },
    { name: "Aditi", age: 22, city: "Bangalore" },
    { name: "Rahul", age: 19, city: "Chennai" },
    { name: "Priya", age: 17, city: "Kolkata" },
    { name: "Ankit", age: 21, city: "Hyderabad" },
    { name: "Neha", age: 18, city: "Pune" },
    { name: "Vikram", age: 23, city: "Ahmedabad" },
    { name: "Sneha", age: 20, city: "Jaipur" },
  ];


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/data" element={<ListData arrayData={data} />} />
          <Route path="/state" element={<StateHook />} />
          <Route path="/form" element={<Form />} />
          <Route path="/calander" element={<Calander />} />
          <Route path="/hooks" element={<ContextHooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

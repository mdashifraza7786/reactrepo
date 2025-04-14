import Form from "./components/Form.jsx";
import Header from "./components/Header.jsx";
import ListData from "./components/ListData.jsx";
import Memo from "./components/Memo.jsx";
import StateHook from "./components/State.jsx";

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
      <Header username="Sakshi" />
      {/* <ListData arrayData={data}/> */}
      <StateHook/>
      <Form/>
    </>
  );
}
export default App;

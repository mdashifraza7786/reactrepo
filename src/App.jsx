import Header from './components/Header.jsx';
function App() {

  const makealert = () => {
    alert("Hello");
  }  

  const data = {name: "Sakshi", age: 16, city: "Delhi"};
  
  return (
    <>
     <Header username="Sakshi" func={makealert} data={data} />
    </>
  );
}
export default App;
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import PizzaList from "./components/PizzaList";
import RestoList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestoList />
    </div>
  );
}

export default App;

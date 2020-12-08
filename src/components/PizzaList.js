import { useSelector } from "react-redux";
import { selectUser } from "../store/users/selectors";
import { selectPizzas } from "../store/pizzas/selectors";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  console.log(pizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total
        <p>TODO: the list of pizzas</p>
      </p>
      <ul className="PizzaList">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="Pizza">
            {pizza.name}
            <br />
            {pizza.description}
            <br />
            Amount of times purchased: {pizza.bought} !
          </li>
        ))}
      </ul>
    </div>
  );
}

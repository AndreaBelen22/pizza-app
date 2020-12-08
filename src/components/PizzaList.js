import { useSelector } from "react-redux";
import { selectUser } from "../store/users/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/users/actions";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  // console.log(pizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <div>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total
        <p className="PizzaTitle">List of Pizzas</p>
      </div>
      <ul className="PizzaList">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="Pizza">
            {pizza.name}
            <br />
            {pizza.description}
            <br />
            Amount of times purchased: {pizza.bought} !
            <br />
            <button
              onClick={() => {
                dispatch(toggleFavorite(pizza.id));
              }}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

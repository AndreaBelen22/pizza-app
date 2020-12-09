import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { useState } from "react";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";

export default function RestaurantList() {
  const pizzas = useSelector(selectPizzas);
  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const restaurantsThatSellSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants?.map((restaurant) => (
          <div>
            <li key={restaurant.id}>{restaurant.name}</li>
            <ul>
              {restaurant.pizzas.map((pizza) => (
                <li>{pizza.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <h2>
        Who sells{" "}
        <select
          value={selectedPizza}
          onChange={(e) => {
            setSelectedPizza(parseInt(e.target.value));
          }}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        ?
      </h2>
      <ul>
        {restaurantsThatSellSelectedPizza.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

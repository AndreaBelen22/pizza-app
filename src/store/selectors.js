export const selectRestaurantsWithPizzas = (reduxState) => {
  return reduxState.restaurants.allRestaurants.map((restaurant) => {
    return {
      ...restaurant,
      pizzas: restaurant.pizzas.map((pizzaId) =>
        reduxState.pizzas.allPizzas.find((pizza) => pizza.id === pizzaId)
      ),
    };
  });
};

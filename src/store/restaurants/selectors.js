export const selectRestaurants = (reduxState) => {
  const restaurantsList = [...reduxState.restaurants.allRestaurants];
  return restaurantsList.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
};
export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.allRestaurants.filter((restaurant) =>
    restaurant.pizzas.includes(pizzaId)
  );
};

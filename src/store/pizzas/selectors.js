export const selectPizzas = (reduxState) => {
  const newPizzas = [...reduxState.pizzas.allPizzas];
  return newPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};

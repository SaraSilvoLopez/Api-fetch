Pizzas.route = '/';
Pizzas.getData = async function (parms, query) {
    return await PizzaService.getAll(pizzas);
}
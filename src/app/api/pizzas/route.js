const pizzas = [
    {
        type: "margherita",
        facts: "Classic pizza with tomato, mozzarella, and basil, representing the Italian flag's colors.",
        yearOfOrigin: 1889
    },
    {
        type: "pepperoni",
        facts: "Most popular pizza in the U.S., featuring spicy cured sausage.",
        yearOfOrigin: 1910
    },
    {
        type: "neapolitan",
        facts: "Originated in Naples, Italy, with a thin, soft, and chewy crust.",
        yearOfOrigin: 1700
    },
    {
        type: "chicago deep-dish",
        facts: "Thick, layered pizza baked in a deep pan, often with cheese on the bottom.",
        yearOfOrigin: 1943
    },
    {
        type: "hawaiian",
        facts: "Controversial pizza topped with pineapple and ham, created in Canada.",
        yearOfOrigin: 1962
    }
];

export async function GET(request) {
    const { searchParams, _ } = new URL(request.url)
    const pizzaType = searchParams.get('type');

    if (pizzaType) {
        const pizza = pizzas[pizzaType.toLowerCase()];
        console.log(pizza);
        return pizza ? Response.json(pizza) : new Response(JSON.stringify({ error: "Rapper not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    };

    return Response.json(pizzas);
};

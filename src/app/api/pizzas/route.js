const pizzas = [
    {
        type: "Margherita",
        facts: "Classic pizza with tomato, mozzarella, and basil, representing the Italian flag's colors.",
        yearOfOrigin: 1889
    },
    {
        type: "Pepperoni",
        facts: "Most popular pizza in the U.S., featuring spicy cured sausage.",
        yearOfOrigin: 1910
    },
    {
        type: "Neapolitan",
        facts: "Originated in Naples, Italy, with a thin, soft, and chewy crust.",
        yearOfOrigin: 1700
    },
    {
        type: "Chicago Deep-Dish",
        facts: "Thick, layered pizza baked in a deep pan, often with cheese on the bottom.",
        yearOfOrigin: 1943
    },
    {
        type: "Hawaiian",
        facts: "Controversial pizza topped with pineapple and ham, created in Canada.",
        yearOfOrigin: 1962
    }
];

export async function GET() {
    return Response.json(pizzas);
};

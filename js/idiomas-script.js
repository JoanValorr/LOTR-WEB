const quotes = [
    {
        text: "No hay nada como el sueño para crear la realidad.",
        character: "Cualquiera de la Tierra Media"
    },
    {
        text: "El camino se hace al andar.",
        character: "Cualquiera de la Tierra Media"
    },
    {
        text: "La vida es un regalo.",
        character: "Gandalf"
    },
    {
        text: "Incluso la persona más pequeña puede cambiar el curso del futuro.",
        character: "Galadriel"
    },
    {
        text: "Los sueños son importantes.",
        character: "Frodo"
    },
    {
        text: "Siempre hay esperanza.",
        character: "Aragorn"
    },
    {
        text: "No puedes pasar.",
        character: "Gandalf"
    },
    {
        text: "Las cosas que perdemos siempre están con nosotros.",
        character: "Elrond"
    },
    {
        text: "La valentía no es la ausencia de miedo.",
        character: "Boromir"
    },
    {
        text: "No es el poder lo que importa, es cómo lo usas.",
        character: "Gandalf"
    }
];

const quotesContainer = document.getElementById('quotes-container');

quotes.forEach(quote => {
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quote');
    quoteDiv.innerHTML = `<p>"${quote.text}"</p><p><strong>- ${quote.character}</strong></p>`;
    quotesContainer.appendChild(quoteDiv);
});

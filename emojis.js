// Emojis separados em um array
const listaDeEmojis = ['??', '??', '??'];

// Local onde serão inseridos
const divEmojis = document.getElementById('emojis');

// Montar e mostrar
divEmojis.textContent = 'Emojis conectados: ' + listaDeEmojis.join(' ');

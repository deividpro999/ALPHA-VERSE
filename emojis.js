// Emojis separados em um array
const listaDeEmojis = ['??', '??', '??'];

// Local onde ser�o inseridos
const divEmojis = document.getElementById('emojis');

// Montar e mostrar
divEmojis.textContent = 'Emojis conectados: ' + listaDeEmojis.join(' ');

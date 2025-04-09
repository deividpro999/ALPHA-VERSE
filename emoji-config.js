// js/emoji-config.js
const emojis = ['??', '??', '??'];
function renderEmojis() {
  const area = document.getElementById('emoji-area');
  area.textContent = emojis.join(' ');
}

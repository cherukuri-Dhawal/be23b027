### 3. JavaScript File: `script.js`
```javascript
// Log when the poster loads and append generation date
window.addEventListener('DOMContentLoaded', () => {
  console.log('Poster loaded successfully.');
  const dateEl = document.createElement('div');
  dateEl.textContent = 'Generated on: ' + new Date().toLocaleDateString('en-IN');
  dateEl.style.position = 'absolute';
  dateEl.style.bottom = '16px';
  dateEl.style.left = '32px';
  dateEl.style.fontSize = '12px';
  dateEl.style.color = '#666';
  document.querySelector('.poster').appendChild(dateEl);
});
const width = window.innerWidth;
const height = window.innerHeight;

console.log(width);
console.log(height);
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);

const n = 100;
const w = 5;

for (let i = 0; i < n; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', w *2 * i)
    rect.setAttribute('width', w);
    rect.setAttribute('height', height);
    svg.appendChild(rect);
}


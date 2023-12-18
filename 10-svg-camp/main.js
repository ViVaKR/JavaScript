const ns = 'http://www.w3.org/2000/svg';

const width = window.innerWidth; // window is optional, sometimes
const height = window.innerHeight;

console.log(width);
console.log(height);
const svg = document.createElementNS(ns, 'svg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
document.body.appendChild(svg);

const n = 100;
const w = 10;

const mask = document.createElementNS(ns, 'mask');
mask.setAttribute('id', 'circle-mask');
svg.appendChild(mask);

const circle = document.createElementNS(ns, 'circle');
circle.setAttribute('cx', width / 2);
circle.setAttribute('cy', height / 2);
circle.setAttribute('r', 200);
circle.setAttribute('fill', 'white');
mask.appendChild(circle);

for (let i = 0; i < n; i++) {
    const rect = document.createElementNS(ns, 'rect');
    rect.setAttribute('y', w * 2 * i)
    rect.setAttribute('width', width);
    rect.setAttribute('height', w);
    rect.setAttribute('mask', 'url(#circle-mask');
    // mask = "url(#myMask)"
    svg.appendChild(rect);
}


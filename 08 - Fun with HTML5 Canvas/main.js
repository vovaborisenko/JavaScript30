"use strict";
const canvas = document.querySelector('#draw');
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let step = 1;
let hue = 100;
const maxWidth = 100;
const minWidth = 2;
if (canvas && ctx) {
    [canvas.width, canvas.height] = [window.innerWidth, window.innerHeight - 1];
    canvas.addEventListener('pointerdown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.clientX, e.clientY];
    });
    canvas.addEventListener('pointerup', () => isDrawing = false);
    canvas.addEventListener('pointerout', () => isDrawing = false);
    canvas.addEventListener('pointermove', draw);
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = maxWidth;
}
function draw(e) {
    if (!isDrawing || !ctx)
        return;
    ctx.lineWidth += step;
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    [lastX, lastY] = [e.clientX, e.clientY];
    if (ctx.lineWidth > maxWidth || ctx.lineWidth < minWidth) {
        step = -step;
    }
    if (hue >= 360) {
        hue = 0;
    }
    console.log(step, ctx.lineWidth);
}

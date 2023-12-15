import { frame } from './frame.mjs'

console.log("main");

function main()
{
    var canvas = document.getElementById('screen');
    var context = canvas.getContext('2d');

    var resizeCanvas = () =>
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    function requestFrame()
    {
        requestAnimationFrame(ms => draw(ms * 0.001));
    }

    function draw (time)
    {
        frame.draw(time);
        requestFrame();
    };

    window.addEventListener('load', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);

    requestFrame();
}
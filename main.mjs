import { frame } from './frame.mjs'

function main()
{
    var canvas = document.getElementById('screen');

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
        frame.draw(time, canvas);
        requestFrame();
    };

    window.addEventListener('load', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);

    requestFrame();
}

main();
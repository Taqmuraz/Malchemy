export const frame =
{
    draw:function(time, canvas)
    {
        var context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
};
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// touches
// targetTouches
// changedTuoches

window.addEventListener('DOMContentLoaded', () => {


    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        //console.log(e.changedTouches);
        //console.log('start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        //console.log(e.targetTouches[0].pageX);
        console.log(e.target.style= `position: absolute; left: ${e.targetTouches[0].pageX}px; top: ${e.targetTouches[0].pageY}px;` );
    });
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(`end`);
    });


});
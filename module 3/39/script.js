
const btn = document.querySelector('.btn');
let timerId;
let i = 0;


function myAnimation() {
    const box = document.querySelector('.box');
    let pos = 0;

    function move(){
        if (pos == 300) {
            clearInterval();
        } else {
            pos ++;
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
        }
    }

    const id = setInterval(move, 10);
}


btn.addEventListener('click', myAnimation);



// function logger(text) {
//     if (i == 3){
//         clearInterval(timerId);
//     }
//     console.log(text);
//     i++;
// }


// let id = setTimeout(function log(){
//     console.log('hello!');
//     id = setTimeout(log, 3000);
// },500);
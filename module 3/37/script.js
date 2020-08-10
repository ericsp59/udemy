const btns = document.querySelectorAll('.btn1'),
      btns2 = document.querySelectorAll('.btn2'),
      wrapper = document.querySelector('.main');

      

//console.log(btns[0].classList);
// console.log(btns[0].classList.item(0));
//console.log(btns[0].classList.add('red'));
//console.log(btns[0].classList.toggle('blue')); 

// btns.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.classList.toggle('blue');
//     });
// });

function toogleClassName(el){
    if (el.classList.contains('red')){
        el.classList.toggle('blue');
        el.classList.toggle('red');
    } else if (el.classList.contains('blue')){
        el.classList.toggle('blue');
        el.classList.toggle('red');
    } else {
        el.classList.toggle('blue');
    }
}

wrapper.addEventListener('click', (e) => {
    //console.log(e.target.matches('button'));
    if (e.target && e.target.matches('button')){
        e.target.addEventListener('click', toogleClassName(e.target), {once: true});    
    }
    
});
 
function createEl (element, classNameArr, parent) {
    let el = document.createElement(element);
    classNameArr.forEach( item => {
        el.classList.add(item);
    });
    parent.append(el);
}

createEl('button', ['btn1','red'], wrapper);

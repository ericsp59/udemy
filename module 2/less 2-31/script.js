const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


const deleteEl = function(e){
    //console.log('click-delete');
    console.log(e.currentTarget);
    console.log(e.type);
    //console.log(this);
    // i++;
    // if (i == 1){
    //     btns.forEach((item, key) => {
    //         this.removeEventListener('click', deleteEl);
    //     });
    // }

    //e.target.remove();
};

btns.forEach(function(item, key) {
    item.addEventListener('click', deleteEl, {once: true});
    //item.removeEventListener('click', deleteEl);
});

overlay.addEventListener('click', (e) => {
    console.log( e.target );
    console.log("overlay click");
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

'use strict';
document.addEventListener('DOMContentLoaded',()=> {
    const btn = document.querySelector('.btnColor');

    btn.addEventListener('click', (e) => {
        let color = getRandomColor();
        btn.style.backgroundColor = color;
        console.log(color);

    });

    function getRandomColor() {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'f'];
        const color = [];
        let colorStr;
        for (let i = 0; i<6; i++) {
            color.push(digits[Math.floor((Math.random() * (digits.length)))]);
        }
        colorStr = color.join('');
        return '#' + colorStr;    
    }


});


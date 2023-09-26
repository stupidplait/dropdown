'use strict';

const ulRelative = document.querySelector('nav>ul');
const ulDropdowns = ulRelative.querySelectorAll('ul.dropdown');

ulDropdowns.forEach(dropdown => dropdown.style.top = `calc(${dropdown.closest('li').offsetHeight}px + 0.25rem)`);

ulRelative.onmouseover = function (event) {
    let target = event.target.closest('li:has(p)');

    if (!target) return;

    target.querySelector('ul.dropdown').style.display = 'block';
};

ulRelative.onmouseout = function (event) {
    let target = event.target.closest('li:has(p)');

    if (!target) return;

    target.querySelector('ul.dropdown').style.display = '';
}
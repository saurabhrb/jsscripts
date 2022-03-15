// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.eflix.is/*
// @icon         https://www.google.com/s2/favicons?domain=eflix.is
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

window.addEventListener('load', function() {
    // your code here
    // get modal
    const modal = document.getElementById('pop-limit');

    // change state like in hidden modal
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');

     // get modal backdrop
     //const modalBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove opened modal backdrop
      //document.body.removeChild(modalBackdrops[0]);

    is_premium=true;
    get_sources('');

    console.log('tampermonkey EFLIX premium activated, by saurabh');
}, false);

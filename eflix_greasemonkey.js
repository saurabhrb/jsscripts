// ==UserScript==
// @name         EflixScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       SRB
// @include      https://*.eflix.is/*
// @icon         https://www.google.com/s2/favicons?domain=eflix.is
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function()
{
	setTimeout( function(){

    // get modal
    const modal = document.getElementById('pop-limit');

    // change state like in hidden modal
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    is_premium=true;
    get_sources('');

    console.log('tampermonkey EFLIX premium activated, by saurabh');
},1000);
});

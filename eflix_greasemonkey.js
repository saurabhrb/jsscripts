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
var is_premium=true;
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function(){
        $('#pop-limit').find('a').click();
        is_premium=true;
        get_sources('');
});

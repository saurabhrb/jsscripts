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

// Create the element

var script_new = document.createElement("script");

// Add script content

script_new.innerHTML = "document.getElementById('pop-limit').children[0].children[0].click();is_premium=true;get_sources('');";

// Append
document.body.appendChild(script_new);

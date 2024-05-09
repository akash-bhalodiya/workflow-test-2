// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-05-09
// @description  try to take over the world!
// @author       You
// @match        https://app.hubspot.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hubspot.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        const searchBox = document.querySelector("#hs-search-react");
        searchBox.style.cssText = "display: none;";
    }, 2000);
})();
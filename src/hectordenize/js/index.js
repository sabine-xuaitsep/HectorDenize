// ./hectordenizeCSS/js/index.js
// JS FRAMEWORK DISPATCHER

import {navTrigger} from './components/_nav_trigger'; navTrigger();

import {navScrollSpy} from './components/_scrollspy'; navScrollSpy();
import {headerScrollSpy} from './components/_scrollspy'; headerScrollSpy();


// Basic email protection
const mailPart1 = "webdeveloper.ieps";
const mailPart2 = "@";
const mailPart3 = "gmail.com";
document.getElementById("mailAddress").innerHTML = `<a href=mailto:${mailPart1 + mailPart2 + mailPart3} class="color-dim">${mailPart1 + mailPart2 + mailPart3}</a>.`;
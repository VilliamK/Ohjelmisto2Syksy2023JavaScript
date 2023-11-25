'use strict';

const div = document.querySelector("#target")

const first = div.appendChild(document.createElement("li"))
first.textContent = "First item"

const second = div.appendChild(document.createElement("li"))
second.textContent = "Second item"
second.classList.add("my-item")

const third = div.appendChild(document.createElement("li"))
third.textContent = "Third item"

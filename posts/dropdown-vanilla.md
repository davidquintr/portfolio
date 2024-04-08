---
title: "Dropdown in JavaScript vanilla"
description: "Creating a dropdown in JavaScript vanilla, please don't use Bootstrap."
date: "2023-09-23"
tags: ["Frontend", "JavaScript", "Functions"]
---

# Concept
This function was created for EXPEDOC, and this was made in relation to dropdown in Bootstrap, for be present to hide certain elements that are not necessary to show all the time or simply for give the option to hide elements.
We can have an example in Bootstrap:
<video  autoplay loop muted controls>
	<source src="../blog/dropdown-vanilla/dropdown-bootstrap.mp4" />
</video>
For this, we need to import all the dependences for have use of this function, in my opinion, this are really not neccessary. As web developers, we have the tools, we can do something new and better.

## Results
And this is my result for dropdown in JavaScript Vanilla.

<video autoplay loop muted controls>
	<source src="../blog/dropdown-vanilla/dropdown-vanilla.mp4" />
</video>

## Source
```js
There's the base who reacts to the size of each element.
(function () {
    let oldresize = window.onresize;
    window.onresize = function (e) {
        var event = window.event || e;
        if (typeof (oldresize) === 'function' && !oldresize.call(window, event)) {
            return false;
        }
        if (typeof (window.onzoom) === 'function') {
            return window.onzoom.call(window, event);
        }
    }
})();
```
For limitations of CSS3, the height values does not allow animations with transform property. Having this, the unique option is max-height property, this allows the transform animation but we can't know the height size of each element for CSS, for that reason we need to use JavaScript and this is the function:

```js
let buttonDrop = document.querySelectorAll(".button-drop")
let dropDownElements = document.querySelectorAll(".dropdown-element")

if (buttonDrop.length > 0 && dropDownElements.length > 0) {
    window.addEventListener("DOMContentLoaded", function () {
    assignButton()
    dropSize()
    })
}

function assignButton() {
    try {
        buttonDrop.forEach((element, index) => {
            element.addEventListener('click', function () {
                dropDownElements[index].style.transition = ""
                dropDownElements[index].classList.toggle("dropdown-active")
                element.classList.toggle("dropIcon-active")
            })
        })
    } catch (error){}
}

window.addEventListener('resize', function () {
    dropSize()
})

function dropSize() {
    dropDownElements.forEach((element, index) => {
    let height = element.scrollHeight
        element.style.maxHeight = height + "px";
    })
}
```

Explaining this, we need to asign the class 'button-drop' to the button who open or close the dropdown. Following this, to the container target of elements 'dropdown-element'.
If this is effective, for each element with the class 'dropdown-element' will be assigned the 'max-height' property in style inline html if is open. If is not open, is toggled the class 'dropdown-active' who contains certains CSS presets properties:

```css
.dropdown-element{
    overflow-y: hidden;
    border: 1px solid #d4d4d4;
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding-inline: 10px;
    transition: opacity 0.4s, max-height 0.4s, padding 0.4s, margin 0.4s;
}

.dropdown-active {
    max-height: 0 !important;
    opacity: 0;
    padding: 0 !important;
    margin: 0 !important;
}
```

As we can see, there's the recommended properties to the good work of this function.

## Online view
You can see this code implemented in my [GitHub](https://github.com/davidquintr) in the repository [dropdown-js-vanilla](https://github.com/davidquintr/dropdown-js-vanilla) and also there's an [online deployed app](https://davidquintr.github.io/dropdown-js-vanilla/) for testing it. You are free to use and upgrade if you want.

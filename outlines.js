var log = function() {
    console.log.apply(console, arguments)
}

var addCss = function(selector) {
    var t = `
        <style class="dj-showOutlines dj-all-removed">
            ${selector} {
                outline: dashed red 2.5px;
            }
        <style>
    `
    var head = document.querySelector('head')
    head.insertAdjacentHTML('beforeend', t)
}

var addButtonCss = function() {
     var t = `
        <style class="index-dj-buttons">
            .dj-button-showOutline {
                position: fixed;
                opacity: 0.6;
                top: 400px;
                width: 180px;
                z-index: 200;
            }
            .dj-button-showOutline-active {
                display: none;
            .dj-button {
                border: 0px;
                outline: none;
            }
        <style>
    `
    var head = document.querySelector('head')
    head.insertAdjacentHTML('beforeend', t)
}

var addButtonHtmlCss = function() {
    var t = `
        <div class="dj-button-showOutline dj-all-removed">
            <button class="dj-button" id="id-button-allOutline">all</button>
            <button class="dj-button" id="id-button-divOutline">div</button>
            <button class="dj-button" id="id-button-spanOutline">span</button>
            <button class="dj-button" id="id-button-aOutline">a</button>
            <button class="dj-button" id="id-button-pOutline">p</button>
            <button class="dj-button" id="id-button-imgOutline">img</button>
            <button class="dj-button" id="id-button-hideOutline">hide</button>
            <button class="dj-button" id="id-button-removeOutline">del</button>
        </div>
        `

    var body = document.querySelectorAll('body')
    for (var i = 0; i < body.length; i++) {
        let e = body[i]
        e.insertAdjacentHTML('afterbegin', t)
    }
    addButtonCss()
}

bindEventShow = function(className, selector) {
    var element = document.querySelector(className)
    element.addEventListener('click', function() {
        var style = document.querySelector('.dj-showOutlines')
        if (style !== null) {
            style.remove()
        }
        addCss(selector)
    })
}

bindEventHide= function() {
    var hide = document.querySelector('#id-button-hideOutline')
    hide.addEventListener('click', function() {
        var style = document.querySelector('.dj-showOutlines')
        if (style !== null) {
            style.remove()
        }
    })
}

bindEventRemove = function() {
    var remove = document.querySelector('#id-button-removeOutline')
    remove.addEventListener('click', function() {
        var style = document.querySelectorAll('.dj-all-removed')
        for (var i = 0; i < style.length; i++) {
            let e = style[i]
            e.remove()
        }
    })
}

var __main = function() {
    addButtonHtmlCss()
    bindEventShow('#id-button-allOutline', '*')
    bindEventShow('#id-button-divOutline', 'div')
    bindEventShow('#id-button-spanOutline', 'span')
    bindEventShow('#id-button-aOutline', 'a')
    bindEventShow('#id-button-pOutline', 'p')
    bindEventShow('#id-button-imgOutline', 'img')
    bindEventRemove()
    bindEventHide()
}
__main()

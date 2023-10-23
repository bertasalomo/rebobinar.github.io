

// ------------REVERSE SCROLL

var ELEM_maincontainer = document.querySelector("#main-container");
var ELEM_mainstep = ELEM_maincontainer.querySelectorAll(".mainstep");
var ELEM_reversedscroll = document.querySelector(".reversed-scroll");
var ELEM_normalscroll = document.querySelector(".normal-scroll");

var scroller = scrollama();

function updateReversedScroll() {
    // console.log('reverse')
    ELEM_reversedscroll.style.bottom = "-" + window.scrollY + "px";  // En el scroll invertido aplicamos el mismo valor del scroll normal, pero en negativo 🤓
}

function init() {
    scroller.setup({ /* Configuramos nuestra instancia de Scrollama */
        step: ".normal-scroll",
        debug: false,
        progress: true,
        // threshold: 1,
        offset: 0
    });
    scroller.onStepProgress(updateReversedScroll);  // Cada progreso del scroll normal, llama a actualizar el scroll invertido.
    updateReversedScroll();
}


(function () {
    // console.log(ELEM_reversedscroll.clientHeight)
    ELEM_normalscroll.style.height = `${ELEM_reversedscroll.clientHeight}px`;
    init();
})();




//___________________________


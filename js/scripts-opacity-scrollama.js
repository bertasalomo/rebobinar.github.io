

// ------------OPACITY SCROLLAMA

var scroller = scrollama();
var all_steps = document.querySelectorAll(".step");

function alEntrarEnZonaVisible(response) {
    // console.log(response.element);
    // console.log(response.index);
    // console.log(response.direction);
    response.element.style.opacity = 1;
    // if (response.direction === "up") {
    //     response.element.style.opacity = 0;
    // }
    if (response.direction === "down") {
        response.element.style.opacity = 1;
    }

}
function alSalirDeZonaVisible(response) {
    // console.log(response.element);
    // console.log(response.index);
    // console.log(response.direction);


}

scroller.setup({
    step: ".step",
    debug: false
});

scroller.onStepEnter(alEntrarEnZonaVisible);
scroller.onStepExit(alSalirDeZonaVisible);











// var rellax = new Rellax('.element-flotant', '.foto-bn', {
//     wrapper: '.portada'
// });
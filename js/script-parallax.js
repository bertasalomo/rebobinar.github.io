// ------------PARALLAX

window.addEventListener('scroll', function (e) {

    const target = document.querySelectorAll('.parallax');
    // const target = document.querySelectorAll('.element-flotant', '.foto-bn');


    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.ratex;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px, -' + pos + 'px, 0px)';
        } else {
            // console.log('scroll y', window.pageYOffset)
            var posX = window.pageYOffset * target[index].dataset.rateX;
            var posY = window.pageYOffset * target[index].dataset.rateY;

            target[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
        }
    }


});

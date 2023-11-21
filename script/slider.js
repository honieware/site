const container = document.getElementById('carousel');
container.scrollLeft = 0;

// Scroll with buttons

var button = document.getElementById('slide');
button.onclick = function () {
    sideScroll(container,'right',25,100,10);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 10;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

// Scroll with drag
let pos = { left: 0, x: 0 };

const mouseDownHandler = function (e) {
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';

    pos = {
        // The current scroll
        left: container.scrollLeft,
        // Get the current mouse position
        x: e.clientX,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;

    // Scroll the element
    container.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');
};

container.addEventListener('mousedown', mouseDownHandler);
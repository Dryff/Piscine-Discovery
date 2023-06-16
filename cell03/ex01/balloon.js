function getNextColor(i) {
    if (i % 3 == 0)
        return 'red';
    else if (i % 3 == 1) 
        return 'green';
    return 'blue';
}

var i = 0;
var button = document.getElementById('myBalloon');
var balloon = document.querySelector('.balloon');
var text = document.getElementById('text');
var currentSize = 200;

button.addEventListener('click', function() {
    console.log(i);
    if (++i == 3)
        i = 0;
    balloon.style.backgroundColor = getNextColor(i);
    currentSize = currentSize + 10;
    if (currentSize > 420){
        currentSize = 200;
    }
    balloon.style.height = currentSize + 'px';
    balloon.style.width = currentSize + 'px';
    text.textContent = currentSize + 'px';
});

button.addEventListener('mouseleave', function() {
    console.log(i);
    if (--i == -1)
        i = 2;
    balloon.style.backgroundColor = getNextColor(i);
    if (currentSize > 200)
    {
        currentSize -= 5;
        balloon.style.height = currentSize + 'px';
        balloon.style.width = currentSize + 'px';
        text.textContent = currentSize + 'px';
    }
});

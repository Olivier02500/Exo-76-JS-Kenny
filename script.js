
let dead = 0;
/*
document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);

    if (t > 0 )
    t = t - 10;
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t > 50)
    t = t - 10;
    else {
        alert("vous avez encore tué Kenny, bande d'*****");
        t = 200;
       dead++;
       document.getElementById('dead').innerText= dead.toString();
        document.getElementById('kenny').style.top = '200px'
    }
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t < 500 - 32)
    t = t + 10;
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t < 470 - 32)
    t = t + 10;
    document.getElementById('kenny').style.top = t + 'px';
});
*/
let kenny = document.getElementById('kenny');
window.addEventListener('keydown', function (e){

    function up(){
        let t = parseInt(kenny.style.top);
        if (t === 0){
            kenny.style.top = '0';
        }
        else{
            t = t -10;
            kenny.style.top = t + 'px';
        }
    }

function down(){
    let t = parseInt(kenny.style.top);

    if(t === 470){
        kenny.style.right = '470px';
    }
    else{
        t = t +10;
        kenny.style.top = t + 'px';
    }
}

function left(){
    let t = parseInt(kenny.style.left);

    if (t === 70){
        kenny.style.left = '0px';
        alert('kenny is dead');
        kenny.style.top = '200px';
        kenny.style.left = '200px';
    }
    else{
        t = t -10;
        kenny.style.left = t +'px';
    }
}

function right(){
    let t = parseInt(kenny.style.left);

    if (t === 470){
        kenny.style.right = '470px';
    }
    else{
        t = t +10;
        kenny.style.left = t +'px';
    }
}
switch (e.key){

    case 'ArrowLeft':
        left();
        break;

    case 'ArrowRight':
        right()
        break;

    case 'ArrowUp' :
        up();
        break;

    case 'ArrowDown':
        down();
        break;
}
})

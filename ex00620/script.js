
    var corpo = window.document.body;
    var button = document.getElementById('button');
    var button2 = document.getElementById('button2');
    var p1 = document.getElementsByTagName('p')[1];

    function mude(){
        corpo.style.background = 'blue'
        p1.style.color = 'white'
        p1.style.background = 'black'
    }
    button.addEventListener('click', mude);
    function volte(){
        corpo.style.background = 'white'
        p1.style.color = 'black'
        p1.style.background = 'none'
    }
    button2.addEventListener('click', volte)

    

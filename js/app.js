
// top of the javascript file


var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;



document.getElementsByClassName('btn__reset')[0].addEventListener('click', function(){
    this.parentNode.style.display = 'none';});

document.getElementsByClassName('refresh')[0].addEventListener('click', function(){
        this.parentNode.style.display = 'none';});


var phrases = [ //phrases
    'Trust may come at some expense but losing it will cost you everything',
    'Sometimes you have to forget what you want to remember what you deserve',
    'Words can sometimes in a moment of grace attain the quality of deeds',
    'One should not worry over things that have already happened and that cannot be changed',
    'Someone acting foolish can easily lose his or her money due to carelessness',
    'An apple a day keeps the doctor away'
];



// get a random phrase function
function getRandomPhraseAsArray(arr){
    var str = arr[Math.floor(Math.random() * 5)];
    return str.split('');
}


// add a phrase to the display function
function addPhraseToDisplay(arr){
    for(var i = 0; i < arr.length; i++){
        var li = document.createElement('li');
        li.textContent = arr[i].toUpperCase();
        if(arr[i].match(/[a-z]/i)){
            li.className = 'letter';
        }
        document.querySelector('#phrase ul').appendChild(li);
    }
}


// check the letter function
function checkLetter(letter){
    var elems = document.getElementsByClassName('letter');
    var counter = 0;
    for(var i = 0; i < elems.length; i++){
        if(elems[i].textContent === letter.toUpperCase()){
            elems[i].classList.add('show');
            counter++;
        }
    }


    // if statement
    if(counter > 0){
        return letter;
    }else{
        return null;
    }
}




qwerty.addEventListener('click', function(evt){
    if(evt.target.nodeName === 'BUTTON'){
        evt.target.classList.add('chosen');
        evt.target.setAttribute('disabled', 'disabled');
        var letterFound = checkLetter(evt.target.textContent);
        if(letterFound === null){
            missed++;
            document.querySelectorAll('#scoreboard li')[missed -1].firstElementChild.src = 'images/lostHeart.png';
        }
        checkWin();
    }
});




function checkWin(){ // function displaying the overlay and text elements
    if(document.getElementsByClassName('show').length === document.getElementsByClassName('letter').length){
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('#overlay .title').textContent = 'YOU WON!';
        document.getElementsByClassName('btn__reset')[0].style.display = 'none';


    }else if(missed === 5){
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('#overlay .title').textContent = 'YOU HAVE LOST! ';
        document.getElementsByClassName('btn__reset')[0].style.display = 'none';

    }
}



const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

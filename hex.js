const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomNumber(){
    return Math.floor(Math.random()*16);
}

btn.addEventListener('click',function(){

    let hexColor = '#';
    for(let i=0;i<6;i++){
        let randomNumber = getRandomNumber();
        hexColor += hex[randomNumber];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
    btn.style.backgroundColor = hexColor
document.querySelector('h4').style.color = hexColor

})
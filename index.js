const color = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById('btn');
const colors = document.querySelector('.color')

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = 
    color[randomNumber];
    colors.textContent = color[randomNumber];
    btn.style.backgroundColor = color[randomNumber]
    colors.style.color = color[randomNumber]
})
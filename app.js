const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; //100px

function shadow (e){
    //ici on donne les variables de cette façon
// const width = hero.offsetWidth;
// const height = hero.offsetHeight;

//ici c'est une autre façon d'indiquer ses variables 
const { offsetWidth: width , offsetHeight: height } = hero;
let {offsetX: x , offsetY: y} = e;


if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;

}

const xWalk = (x / width * walk ) - (walk / 2);
const yWalk = (y / height * walk ) - (walk / 2);

text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7)`;

console.log(xWalk,yWalk);
}

hero.addEventListener('mousemove', shadow);